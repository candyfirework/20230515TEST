//express모듈에서 Router 가져오기
import { Router } from "express";
//Router 인스턴스 생성
const router = Router();
//controller 모듈에서 필요한 함수들 가져오기
import { createStudent, getStudents, updateStudent, deleteStudent, getStudentById } from "../controller/student.js";

// 학생 등록 API-POST/student
router.post("/", createStudent);

// 학생 목록 조회 API-GET/student
router.get("/", getStudents);

// 학생 정보 수정 API-PUT/student/:id
router.put("/:id", updateStudent.id);

// 학생 정보 삭제 API-DELETE/student/:id
router.delete("/:id", deleteStudent.id);

// 학번으로 학생 검색 API-GET/student/:id
router.get("/:id", getStudentById);

//외부에서 이 파일을 import할때, Router인스턴스를 반환하도록 설정
export default router;
