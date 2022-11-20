import { Repository, getConnection } from "typeorm";
import { AzureADUser } from "../models/AzureADUser";
import { User } from "../models/User";

export class UserMaker {
    private readonly userRepository: Repository<User>;

    constructor() {
        this.userRepository = getConnection("nicDatabase").getRepository(User);
    }

    public make(azureADUser: AzureADUser): Promise<User> {
        const user: User = {
            id: azureADUser.id,
            nitechUserId: azureADUser.officeLocation,
        };

        return this.userRepository.save(user);
    }
}