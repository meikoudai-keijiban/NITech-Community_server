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
exports.Posting = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const Category_1 = require("./Category");
let Posting = class Posting {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Posting.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Posting.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => User_1.User),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", User_1.User)
], Posting.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => Category_1.Category),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Category_1.Category)
], Posting.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", String)
], Posting.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Posting.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "simple-array",
    }),
    __metadata("design:type", Array)
], Posting.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Posting.prototype, "favorite", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "simple-array",
    }),
    __metadata("design:type", Array)
], Posting.prototype, "accesslog", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Posting.prototype, "popular", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Posting.prototype, "isHidden", void 0);
Posting = __decorate([
    (0, typeorm_1.Entity)()
], Posting);
exports.Posting = Posting;
