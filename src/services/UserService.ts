import { Repository } from "typeorm";
import { User } from "../models/User";
import { nitechCommunityDataSource } from "../nitechCommunityDataSource";

export class UserService {
    private readonly userRepository: Repository<User>;

    constructor() {
        this.userRepository = nitechCommunityDataSource.getRepository(User);
    }

    public save(user: User): Promise<User> {
        return this.userRepository.save(user);
    }

    public async findUserDetail(userID: string): Promise<User | undefined> {
        const user: User | null = await this.userRepository.findOne({
            where: {
                id: userID
            },
            relations: {
                postings: true,
                comments: true,
            },
            select: {
                id: true,
                name: true,
                department: true,
                postings: true,
            },
        });

        if (user) {
            return user;
        } else {
            return undefined;
        }
    }

    public async userExists(id: string): Promise<User | undefined> {
        const user: User | null = await this.userRepository.findOne({
            where: {
                id: id
            }
        })

        if (user) {
            return user;
        } else {
            return undefined;
        }
    }
}