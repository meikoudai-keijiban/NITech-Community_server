import express from 'express';

const router = express.Router();

// Getリクエスト
router.get('/', (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json({ userId: "U001", userName: "Conan Wen" });
    } catch (error) {
        res.status(400).json({ messsage: 'エラー' });
    }
});

// Postリクエスト
router.post('/', (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json({ message: "登録しました" });
    } catch (error) {
        res.status(400).json({ message: 'エラー' });
    }
});

export default router;