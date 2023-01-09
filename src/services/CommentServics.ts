import { Repository, getConnection } from "typeorm";
import { Comment } from "../models/Comment";

export class CommentService {
    private readonly commentRepository: Repository<Comment>;

    constructor() {
        this.commentRepository = getConnection("nicDatabase").getRepository(Comment);
    }

    public saveComment(comment: Comment): Promise<Comment> {
        return this.commentRepository.save(comment);
    }
    
}