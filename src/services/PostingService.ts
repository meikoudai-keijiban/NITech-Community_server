import { max } from "class-validator";
import { Repository, getConnection, LessThanOrEqual } from "typeorm";
import { Posting } from "../models/Posting";

export class PostingService {
    private readonly postingRepository: Repository<Posting>;

    constructor() {
        this.postingRepository = getConnection("nicDatabase").getRepository(Posting);
    }

    public findOnePostingById(id: number): Promise<Posting | null> {
        return this.postingRepository.findOne(
            {
                where: {
                    id: id
                },
                relations: {
                    comments: true
                }
            }
        )
    }

    public findAllPostings(): Promise<Posting[]> {
        return this.postingRepository.find({
            select: {
                id: true,
                title: true,
            },
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
            select: {
                id: true,
                title: true,
            },
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

    public findPostingsBeforeMaxId(num: number, max_id: number): Promise<Posting[]> {
        return this.postingRepository.find({
            where: {
                id: LessThanOrEqual(max_id),
            },
            order: {
                id: "DESC"
            },
            select: {
                id: true,
                title: true,
                content: true,
                createdAt: true,
                updatedAt: true,
                
            },
            relations: {
                author: true
            },
            take: num,
        })
    }

    public savePosting(posting: Posting): Promise<Posting> {
        return this.postingRepository.save(posting);
    }

}