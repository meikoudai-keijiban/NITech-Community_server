import { Repository, getConnection, LessThanOrEqual } from "typeorm";
import { Posting } from "../models/Posting";

export class PostingService {
    private readonly postingRepository: Repository<Posting>;

    constructor() {
        this.postingRepository = getConnection("nicDatabase").getRepository(Posting);
    }

    public async findOnePostingById(id: number): Promise<Posting | undefined> {
        const posting: Posting | null = await this.postingRepository.findOne(
            {
                where: {
                    id: id
                },
                relations: ["author", "comments", "comments.author"]
                // relations: {author: true, comments: true}
            }
        );

        if (posting) {
            return posting;
        } else {
            return undefined;
        }
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

    public findPostingsBeforeMaxId(n: number, max_id: number): Promise<Posting[]> {
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
                createdAt: true,
                updatedAt: true,

            },
            relations: {
                author: true
            },
            take: n,
        })
    }

    public findPostingsLatest(n: number): Promise<Posting[]> {
        return this.postingRepository.find({
            order: {
                id: "DESC"
            },
            select: {
                id: true,
                title: true,
                createdAt: true,
                updatedAt: true,

            },
            relations: {
                author: true
            },
            take: n,
        })
    }

    public savePosting(posting: Posting): Promise<Posting> {
        return this.postingRepository.save(posting);
    }

}