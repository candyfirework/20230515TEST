//Express 라우터 모듈 가져오기
import { Router } from 'express';
const router = Router();
//score 모듈에서 export한 함수 가져오기
import { addScore, getScoreList, updateScore, deleteScore, searchScore } from '../controller/score.js';
//score 모듈에서 추가적인 라우터 가져오기
import scoreRouter from './score.js';
//라우터와 핸들러 함수 연결
router.post('/addScore', addScore);
router.get('/getScoreList', getScoreList);
router.put('/updateScore/:id', updateScore);
router.delete('/deleteScore/:id', deleteScore);
router.get('/searchScore/:id', searchScore);

//scoreRouter를 /score 경로에 연결
export default router;
app.use('/score', scoreRouter);
