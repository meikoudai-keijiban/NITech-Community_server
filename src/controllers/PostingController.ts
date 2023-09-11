import passport from "passport";
import { Get, Post, JsonController, UseBefore, Param, QueryParam, HttpCode, Body, CurrentUser } from "routing-controllers";

import { Posting } from "../models/Posting";
import { RawPosting } from "../models/RawPosting";
import { User } from "../models/User";
import { PostingService } from "../services/PostingService";


@JsonController()
export class PostingController {
  private readonly postingService: PostingService;
  private readonly intMAX: number;

  constructor() {
    this.postingService = new PostingService();
    this.intMAX = 2147483647; // データベースのINT型の最大値
  }

  @Get("/postings")
  @UseBefore(passport.authenticate("oauth-bearer", { session: false })) // eslint-disable-line @typescript-eslint/no-unsafe-argument
  public async getPostingByMaxId(
    @QueryParam("max_id") max_id: number = this.intMAX,
    @QueryParam("n") n = 5,
  ): Promise<Posting[]> {
    return this.postingService.findPostingsBeforeMaxId(n, max_id);
  }

  @Get("/postings/:postingId")
  @UseBefore(passport.authenticate("oauth-bearer", { session: false })) // eslint-disable-line @typescript-eslint/no-unsafe-argument
  public async getPostingDetail(
    @Param("postingId") postingId: number
  ): Promise<Posting | undefined> {
    return this.postingService.findOnePostingById(postingId);
  }

  @Get("/postings/all")
  @UseBefore(passport.authenticate("oauth-bearer", { session: false })) // eslint-disable-line @typescript-eslint/no-unsafe-argument
  public async getAllPostings(): Promise<Posting[]> {
    return this.postingService.findAllPostings();
  }

  @Get("/postings/part")
  @UseBefore(passport.authenticate("oauth-bearer", { session: false })) // eslint-disable-line @typescript-eslint/no-unsafe-argument
  public async getPartPostings(
    @QueryParam("skip") skip = 0,
    @QueryParam('take') take = 10,
  ): Promise<Posting[]> {
    return this.postingService.findPartPostings(skip, take);
  }

  @HttpCode(204)
  @Post("/postings")
  @UseBefore(passport.authenticate("oauth-bearer", { session: false })) // eslint-disable-line @typescript-eslint/no-unsafe-argument
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