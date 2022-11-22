import { Controller, Param, Body, Get, Post, Put, Delete, JsonController, UseBefore } from "routing-controllers";
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
    @UseBefore(passport.authenticate("oauth-bearer", {session: false}))
    public async getTest(): Promise<any> {
        return { message: "Hello World!" }
    }
}