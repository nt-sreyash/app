import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MarksDTO } from "../app.model";
import { AppService } from "../app.service";

@Component({
    selector: 'app-student',
    templateUrl: './student.html'
})

export class StudentComponent implements OnInit {
    marks: any[];
    subjects: any[];
    selectedEntry!: MarksDTO;
    isEdit: boolean = false;
    newStudent: any;

    constructor(public appService: AppService, private router: Router) {
        this.marks = new Array<any>();
        this.subjects = new Array<any>();
    }

    ngOnInit() {
        // if the user is logged in redirect to documents page
        if (!localStorage.getItem('currentUser')) {
            this.router.navigate(['/login']);
        }
        else {
            this.getStudents();
        }
    }

    getStudents() {
        this.appService.getAllMarks().subscribe(res => {
            this.marks = res as any[];
            console.log(this.marks);
        });
    }

    getSubjects() {

        this.filterSubjectsAccordingToClass();
    }

    filterSubjectsAccordingToClass() {

    }

    onSelect(x: any) {
        console.log(x);
    }

    editStudent(student: any) {
        this.isEdit = true;
        this.newStudent = student;
        this.getSubjects();
        this.openNav();
    }

    deleteStudent(student: any) {

    }

    confirmStudent() {
        if (this.isEdit) {
            this.appService.updateStudent(this.newStudent.studentid, this.newStudent).subscribe(
                res => {
                    this.closeNav();
                    this.getStudents();
                },
                err => {
                    alert('Error in updating student');
                });
        }
        else {
            this.appService.addNewStudent(this.newStudent).subscribe(
                res => {
                    this.closeNav();
                    this.getStudents();
                },
                err => {
                    alert('Error in adding student');
                });
        }
    }

    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
    openNav() {
        document.getElementById("mySidenav")!.style.width = "250px";
        document.getElementById("main")!.style.marginLeft = "250px";
    }

    /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
    closeNav() {
        document.getElementById("mySidenav")!.style.width = "0";
        document.getElementById("main")!.style.marginLeft = "0";
    }
}