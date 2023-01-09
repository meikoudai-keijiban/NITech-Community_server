import { Get, JsonController, UseBefore, CurrentUser, QueryParam } from "routing-controllers";
import passport from "passport";

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

    @Get("/profiles/:accountID")
    @UseBefore(passport.authenticate("oauth-bearer", {session: false}))
    public getProfile(
      @QueryParam("accountID") accountID: string
    ): Promise<User | null> {
      return this.userService.findUserDetail(accountID);
    }
}