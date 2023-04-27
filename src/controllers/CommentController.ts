import { Get, Post, JsonController, UseBefore, CurrentUser, HttpCode, Param, Body } from "routing-controllers";
import passport from "passport";

import { User } from "../models/User";
import { Comment } from "../models/Comment";
import { Posting } from "../models/Posting";
import { RawComment } from "../models/RawComment";
import { CommentService } from "../services/CommentServics";
import { PostingService } from "../services/PostingService";

@JsonController()
export class CommentController {
    private readonly commentService: CommentService;
    private readonly postingService: PostingService;

    constructor() {
      this.commentService = new CommentService();
      this.postingService = new PostingService();
    }

    @HttpCode(201)
    @Post("/postings/:postingId/comments")
    @UseBefore(passport.authenticate("oauth-bearer", {session: false}))
    public async postComment(
        @CurrentUser({ required: true }) user: User,
        @Param("postingId") postingId: number,
        @Body() rawComment: RawComment
    ): Promise<Comment> {

        const posting: Posting | null = await this.postingService.findOnePostingById(postingId);

        if(posting) {
            const comment: Comment = {
                posting: posting,
                author: user,
                postDate: new Date(),
                content: rawComment.content,
            }
            return this.commentService.saveComment(comment)
        } else{
            throw new Error("can't find the posting by the postingID")
        }
    }


}