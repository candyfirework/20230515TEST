let scores = [];
import { addScore } from '../controller/score.js';

export { addScore as insertScore, updateScore as _updateScore, deleteScore as _deleteScore };

//getAllScore 함수는 현재까지 저장된 점수 배열을 반환
export function getAllScores() {
    return scores;
}
//addScore 함수는 새로운 점수를 score 배열에 추가
export function addNewScore(score) {
    scores.push(score);
}
//updateScore 함수는 해당 학생의 점수를 업데이트
export function updateScore(studentId, updatedScore) {
    //scores 배열을 순회하면서
    scores = scores.map(score => {
        if (score.studentId === studentId) {
            return { ...score, ...updatedScore };
        } else {
            return score;
        }
    });
}
// deleteScore 함수는 해당 학생의 점수를 score 배열에서 삭제합니다.
export function deleteScore(studentId) {
    scores = scores.filter(score => score.studentId !== studentId);
}
//getScoreByStudentId 함수는 해당학생의 점수 객체를 반환합니다.
export function getScoreByStudentId(studentId) {
    return scores.find(score => score.studentId === studentId);
}
//getScoresSortedByAverage 함수는 학생들의 평균 점수를 기준으로 정렬된 배열을 반환합나디.
export function getScoresSortedByAverage() {
    //각 학생별로 총점과 평균을 계산하여 score 배열의 각 객체에 추가합니다.
    const scoresWithAverage = scores.map(score => {
        const total = score.korean + score.english + score.math;
        const average = total / 3;
        return { ...score, total, average };
    });
    //평균 점수를 기준으로 내림차순으로 정렬합니다.
    //평균 점수가 같으면 학생 ID를 기준으로 내림차순으로 정렬합니다. 
    const sortedScores = scoresWithAverage.sort((a, b) => {
        if (a.average > b.average) {
            return -1;
        } else if (a.average < b.average) {
            return 1;
        } else {
            if (a.studentId > b.studentId) {
                return -1;
            } else if (a.studentId < b.studentId) {
                return 1;
            } else {
                return 0;
            }
        }
    });
    return sortedScores;
}

