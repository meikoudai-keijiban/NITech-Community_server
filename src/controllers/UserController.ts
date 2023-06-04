import passport from "passport";
import { Get, JsonController, UseBefore, CurrentUser, Param } from "routing-controllers";

import { User } from "../models/User";
import { UserService } from "../services/UserService";

@JsonController()
export class UserController {
    private readonly userService: UserService;

    constructor() {
      this.userService = new UserService();
    }

    @Get("/test_api")
    @UseBefore(passport.authenticate("oauth-bearer", {session: false})) //調べよ
    public async getTest(@CurrentUser({ required: true }) user: User): Promise<User> {
        return user
    }

    @Get("/profiles/:userId")
    @UseBefore(passport.authenticate("oauth-bearer", {session: false}))
    public getProfile(
      @Param("userId") userId: string
    ): Promise<User | null> {
      if(!userId){
        throw new Error("userId is undefined!")
      }
      return this.userService.findUserDetail(userId);
    }
}