//import { addScore, getAllScores, getScoreByStudentId, updateScore as _updateScore, deleteScore as _deleteScore } from '../data/score.js';
import { addScore, getAllScores, getScoreByStudentId, updateScore as _updateScore, deleteScore as _deleteScore } from '../controller/score.js';

import { getStudentById, getAllStudents } from '../data/student.js';
//성적의 평균값을 구하는 함수
const getAverage = (scores) => {
    const totalScore = scores.reduce((acc, cur) => acc + cur, 0);
    return parseFloat((totalScore / scores.length-1).toFixed(2));
};
//성적의 총점을 구하는 함수
const getTotalScore = (scores) => {
    return scores.reduce((acc, cur) => acc + cur, 0);
};
//해당 학생의 성적 순위를 구하는 함수
const getRank = (sortedScores, targetId) => {
    let rank = 1;
    let curScore = sortedScores[0].avgScore;
    for (let i = 0; i < sortedScores.length; i++) {
        if (curScore !== sortedScores[i].avgScore) {
        rank = i + 1;
        curScore = sortedScores[i].avgScore;
    }
    if (sortedScores[i].studentId === targetId) {
        return rank;
    }
    }
    return -1;
};
//성적 등록 API
const registerScore = async (req, res) => {
    const { studentId, scores: ScoreList } = req.body;

    const student = await getStudentById(studentId);
    if (!student) {
        return res.status(404).json({ error: '해당 학생을 찾을 수 없습니다.' });
    }

    const totalScore = getTotalScore(ScoreList);
    const avgScore = getAverage(ScoreList);
    const score = { studentId, score, totalScore, avgScore };
    addScore(score);

    res.status(201).json({ message: '성적이 등록되었습니다.' });
};
//성적 리스트 조회 API
const getScoresByAverage = async (req, res) => {
    const scores = await getAllScores();
    const students = await getAllStudents();
    const sortedScores = scores.sort((a, b) => b.avgScore - a.avgScore);

    const result = [];
    for (let i = 0; i < sortedScores.length; i++) {
    const student = students.find((s) => s.id === sortedScores[i].studentId);
    result.push({
        rank: getRank(sortedScores, sortedScores[i].studentId),
        studentId: sortedScores[i].studentId,
        name: student.name,
        scores: sortedScores[i].scores,
        totalScore: sortedScores[i].totalScore,
        avgScore: sortedScores[i].avgScore,
    });
}

    res.json({ total: result.length, scores: result });
};
//성적 수정 API
export const updateScore = async (req, res) => {
    const { studentId } = req.params;
    const { scores } = req.body;

    const score = await getScoreByStudentId(studentId);
    if (!score) {
        return res.status(404).json({ error: '해당 학생의 성적을 찾을 수 없습니다.' });
    }

    const totalScore = getTotalScore(scores);
    const avgScore = getAverage(scores);
    const updatedScore = { studentId, scores, totalScore, avgScore };
    _updateScore(updatedScore);

    res.json({ message: '성적이 수정되었습니다.' });
};
//성적 삭제 API
export const deleteScore = async (studentId) => {
    try {
        const index = score.findIndex((s) => s.studentId === studentId);
        if (index === -1) {
        throw new Error('해당 학생의 성적을 찾을 수 없습니다.');
        }
        score.splice(index, 1);
    } catch (error) {
        console.error(error.message);
        throw error;
    }
    };

    export const addScore = (newscore) => {
        const score = { studentId: newscore.studentId, scores: newscore.scores, totalScore: newscore.totalScore, avgScore: newscore.avgScore };
        saveScore(score); // 새로운 함수나 메서드를 호출하여 데이터를 저장하도록 변경
    };
    



