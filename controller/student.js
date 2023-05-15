// 'student'데이터에 대한 CRUD동작을 수행하는 함수들을 정의한 모듈로써 '../data/student.js' 파일에서 제공되는 함수들을 활용하고 있음
import { getAllStudents as _getAllStudents, addStudent as _addStudent, updateStudent as _updateStudent, deleteStudent as _deleteStudent, getStudentById as _getStudentById } from '../data/student.js';
//createStudent 함수 내용
export function createStudent(req,res){
}
//함수 구현
export function getStudents(){
}

//모든 학생 정보를 조회하는 함수
export function getAllStudents() {
    return _getAllStudents();
}
//새로운 학생 정보를 추가하는 함수
export function addStudent(student) {
    _addStudent(student);
}
// 특정 학생 정보를 수정하는 함수
export function updateStudent(id, updatedStudent) {
    _updateStudent(id, updatedStudent);
}
//특정 학생 정보를 삭제하는 함수
export function deleteStudent(id) {
    _deleteStudent(id);
}
// 특정 학생의 정보를 조회하는 함수
// 이 함수는 학생 ID를 입력받아 해당 학생 정보를 반환
export function getStudentById(id) {
    return _getStudentById(id);
}
