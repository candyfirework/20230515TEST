// Express 모듈을 가져옴
import express, { json } from 'express';

// Express 앱을 생성함
const app = express();

// JSON 데이터를 파싱할 수 있도록 Body Parser 미들웨어를 등록함
app.use(json());

// student 모듈을 가져옴
import student from './router/student.js';

// score 모듈을 가져옴
import score from './router/score.js';

// /student 경로에 대한 요청은 studentRouter에서 처리함
app.use('/student', student);

// /score 경로에 대한 요청은 scoreRouter에서 처리함
app.use('/score', score);

// 서버를 시작함
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
