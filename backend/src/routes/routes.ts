import express from "express";
import { taskDetail, gettaskDetail, deletTtask } from "../controllers/users";
const router = express.Router();

router.post('/task', taskDetail)
router.get('/task', gettaskDetail)
router.post('/task:id', deletTtask)


export {
    router
}