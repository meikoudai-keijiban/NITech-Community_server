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
    @UseBefore(passport.authenticate("oauth-bearer", {session: false})) // eslint-disable-line @typescript-eslint/no-unsafe-argument
    public getTest(@CurrentUser({ required: true }) user: User): User {
        return user
    }

    @Get("/profiles/:userId")
    @UseBefore(passport.authenticate("oauth-bearer", {session: false})) // eslint-disable-line @typescript-eslint/no-unsafe-argument
    public getProfile(
      @Param("userId") userId: string
    ): Promise<User | undefined> {
      if(!userId){
        throw new Error("userId is undefined!")
      }
      return this.userService.findUserDetail(userId);
    }
}