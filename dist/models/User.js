"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const Posting_1 = require("./Posting");
const Comment_1 = require("./Comment");
let User = class User {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "pwd", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "profile", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: "/images/user_page.png",
    }),
    __metadata("design:type", String)
], User.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], User.prototype, "pub", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Posting_1.Posting, posting => posting.author),
    __metadata("design:type", Array)
], User.prototype, "myPostings", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Comment_1.Comment, comment => comment.author),
    __metadata("design:type", Array)
], User.prototype, "myComments", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Posting_1.Posting),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], User.prototype, "favPostings", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Comment_1.Comment),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], User.prototype, "goodComments", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "simple-array",
    }),
    __metadata("design:type", Array)
], User.prototype, "sketch", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: "",
    }),
    __metadata("design:type", String)
], User.prototype, "postingToken", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: ""
    }),
    __metadata("design:type", String)
], User.prototype, "commentToken", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: 0,
    }),
    __metadata("design:type", Number)
], User.prototype, "error", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: false
    }),
    __metadata("design:type", Boolean)
], User.prototype, "isHidden", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: false
    }),
    __metadata("design:type", Boolean)
], User.prototype, "isInactivated", void 0);
User = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
