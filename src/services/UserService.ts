import { Repository, getConnection } from "typeorm";
import { User } from "../models/User";

export class UserService {
    private readonly userRepository: Repository<User>;

    constructor() {
        this.userRepository = getConnection("nicDatabase").getRepository(User);
    }

    public save(user: User): Promise<User> {
        return this.userRepository.save(user);
    }

    public findUserDetail(userID: string): Promise<User | null> {
        return this.userRepository.findOne({
            where: {
                id: userID
            },
            select: {
                id: true,
                name: true,
                department: true,
            },
            relations: {
                postings: {
                    id: true,
                    title: true
                },
                comments: {
                    id: true,
                    content: true,
                },
            }
        });
    }

    public userExists(id: string): Promise<User | null> {
        return this.userRepository.findOne({
            where: {
                id: id
            }
        })
    }

    
}