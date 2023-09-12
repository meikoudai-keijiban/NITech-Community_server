import { AzureADUser } from "../models/AzureADUser";
import { User } from "../models/User";
import { UserService } from "../services/UserService";

export class UserMaker {
    private readonly userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public async make(azureADUser: AzureADUser): Promise<User> {
        const isUser: User | undefined = await this.userService.userExists(azureADUser.officeLocation);

        if (isUser) {
            return isUser;
        } else {
            const user: User = {
                id: azureADUser.officeLocation,
                name: azureADUser.displayName,
                department: azureADUser.department
            };
            return this.userService.save(user);
        }
    }
}