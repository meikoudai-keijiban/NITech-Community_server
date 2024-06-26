import passport from "passport";
import { Post, JsonController, UseBefore, CurrentUser, HttpCode, Param, Body, NotFoundError } from "routing-controllers";

import { Comment } from "../models/Comment";
import { Posting } from "../models/Posting";
import { RawComment } from "../models/RawComment";
import { User } from "../models/User";
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

    @HttpCode(204)
    @Post("/postings/:postingId/comments")
    @UseBefore(passport.authenticate("oauth-bearer", { session: false })) // eslint-disable-line @typescript-eslint/no-unsafe-argument
    public async postComment(
        @CurrentUser({ required: true }) user: User,
        @Param("postingId") postingId: number,
        @Body() rawComment: RawComment
    ): Promise<Comment> {

        const posting: Posting | undefined = await this.postingService.findOnePostingById(postingId);

        if (!posting) {
            throw new NotFoundError("can't find the posting by the postingID");
        }

        const comment: Comment = {
            posting: posting,
            author: user,
            postDate: new Date(),
            content: rawComment.content,
        };

        return this.commentService.saveComment(comment);
    }
}