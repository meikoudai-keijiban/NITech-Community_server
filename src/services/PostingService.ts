import { Repository, getConnection } from "typeorm";
import { Posting } from "../models/Posting";

export class PostingService {
    private readonly postingRepository: Repository<Posting>;

    constructor() {
        this.postingRepository = getConnection("nicDatabase").getRepository(Posting);
    }

    public findAllPostings(): Promise<Posting[]> {
        return this.postingRepository.find({
            order: {
                postDate: "DESC"
            },
            relations: {
                author: {
                    name: true,
                    department: true,
                }
            },
        });
    }

    public findPartPostings(skip: number, take: number): Promise<Posting[]> {
        return this.postingRepository.find({
            order: {
                postDate: "DESC"
            },
            relations: {
                author: {
                    name: true,
                    department: true,
                }
            },
            skip: skip,
            take: take,
        })
    }

    public savePosting(posting: Posting): Promise<Posting> {
        return this.postingRepository.save(posting);
    }
    
}