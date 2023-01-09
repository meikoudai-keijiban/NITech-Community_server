import { Get, Post, JsonController, UseBefore, QueryParam, HttpCode, Body, CurrentUser } from "routing-controllers";
import passport from "passport";

import { Posting } from "../models/Posting";
import { RawPosting } from "../models/RawPosting";
import { PostingService } from "../services/PostingService";
import { User } from "../models/User";


@JsonController()
export class PostingController {
    private readonly postingService: PostingService;

    constructor() {
      this.postingService = new PostingService();
    }

    @Get("/postings/all")
    @UseBefore(passport.authenticate("oauth-bearer", {session: false}))
    public async getAllPostings(): Promise<Posting[]> {
        return this.postingService.findAllPostings();
    }

    @Get("/postings/part")
    @UseBefore(passport.authenticate("oauth-bearer", {session: false}))
    public async getPartPostings(
        @QueryParam("skip") skip: number = 0,
        @QueryParam('take') take: number = 10,
    ): Promise<Posting[]> {
        return this.postingService.findPartPostings(skip, take);
    }

    @HttpCode(201)
    @Post("/postings")
    @UseBefore(passport.authenticate("oauth-bearer", { session: false }))
    public postPosting(
      @CurrentUser({ required: true }) user: User,
      @Body() rawPosting: RawPosting,
    ): Promise<Posting> {

      const posting: Posting = {
        title: rawPosting.title,
        author: user,
        postDate: new Date(),
        content: rawPosting.content,
      }
  
      return this.postingService.savePosting(posting);
    }
    
}