import { Repository } from "typeorm";
import { Comment } from "../models/Comment";
import { nitechCommunityDataSource } from "../nitechCommunityDataSource";

export class CommentService {
    private readonly commentRepository: Repository<Comment>;

    constructor() {
        this.commentRepository = nitechCommunityDataSource.getRepository(Comment);
    }

    public saveComment(comment: Comment): Promise<Comment> {
        return this.commentRepository.save(comment);
    }
    
}