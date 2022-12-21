import { Get, JsonController, UseBefore } from "routing-controllers";
import { Repository, getConnection } from "typeorm";
import passport from "passport";

import { User } from "../models/User";

@JsonController()
export class UserController {
    private readonly userRepository: Repository<User>;

    constructor() {
        this.userRepository = getConnection("nicDatabase").getRepository(User);
    }

    @Get("/test_api")
    @UseBefore(passport.authenticate("oauth-bearer", {session: false})) //調べよ
    public async getTest(): Promise<any> {
        return { message: "Hello World!" }
    }
}