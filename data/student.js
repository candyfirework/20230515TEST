//변수 students를 서언하고 빈 배열을 할당합니다.
let students = [];
//모든 학생 정보를 반환하는 getAllStudents 함수를 정의합니다.
export function getAllStudents() {
    return students;
}
//학생 정보를 추가하는 addStudent함수를 정의합니다.
export function addStudent(student) {
    students.push(student);
}
//학생정보를 업데이트하는 updateStudnet 함수를 정의합니다.
//학생 id와 업데이트된 학생 정보를 받습니다.
export function updateStudent(id, updatedStudent) {
    //기존 학생 정보를 매핑하며, 받은 id와 일치하는 학생의 정보를 업데이트된 정보로 교체합니다. 
    students = students.map(student => {
        if (student.id === id) {
            return { ...student, ...updatedStudent };
        } else {
            return student;
        }
    });
}
//학생 정보를 삭제하는 deleteStudent함수를 정의합니다.
export function deleteStudent(id) {
    //받은 id와 일치하지 않는 학생 정보만 필터링하여 students 배열에 다시 할당합니다. 
    students = students.filter(student => student.id !== id);
}
//학생 id를 받아 해당 학생 정보를 반환하는 getStudentById함수를 정의힙니다.
export function getStudentById(id) {
    return students.find(student => student.id === id);
}
