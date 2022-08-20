"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
// Getリクエスト
router.get('/', function (req, res) {
    try {
        res.status(200).json({ userId: "U001", userName: "Conan Wen" });
    }
    catch (error) {
        res.status(400).json({ messsage: 'エラー' });
    }
});
// Postリクエスト
router.post('/', function (req, res) {
    try {
        res.status(200).json({ message: "登録しました" });
    }
    catch (error) {
        res.status(400).json({ message: 'エラー' });
    }
});
exports.default = router;
//# sourceMappingURL=users.js.map