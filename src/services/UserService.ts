import { Repository, getConnection } from "typeorm";
import { User } from "../models/User";
import { Posting } from "../models/Posting";

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
    }

    public userExists(id: string): Promise<User | null> {
        return this.userRepository.findOne({
            where: {
                id: id
            }
        })
    }

    
}