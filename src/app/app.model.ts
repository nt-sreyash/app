export class Student {
    studentId!: number;
    name!: string;
    standard!: number;
    sec!: string;
    rollNo!: number;
}

export class MarksDTO {
    marksId!: number;
    studentId!: number;
    rollNo!: number;
    studentName!: string;
    examSession!: string;
    standard!: number;
    subject!: string;
    marks!: number;
}