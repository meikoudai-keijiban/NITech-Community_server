import { Repository, getConnection } from "typeorm";
import { User } from "../models/User";

export class UserService {
    private readonly userRepository: Repository<User>;

    constructor() {
        this.userRepository = getConnection("nicDatabase").getRepository(User);
    }

}