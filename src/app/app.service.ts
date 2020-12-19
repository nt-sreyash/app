import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

    user: any;
    baseUrl = 'http://localhost:8080/api';

    constructor(private http: HttpClient) { }

    // Rest Fucntions 
    getAllMarks() {
        return this.http.get(this.baseUrl + '/marks/all');
    }

    getStudentById(id: any) {
        return this.http.get(this.baseUrl + '/' + id);
    }

    addNewStudent(student: any) {
        return this.http.post(this.baseUrl, student);
    }

    updateStudent(studentId: any, student: any) {
        return this.http.put(this.baseUrl + '/' + studentId, student);
    }

    deleteStudent(studentId: any) {
        return this.http.delete(this.baseUrl + '/' + studentId);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    loginUser(username: string, password: string) {
        this.user = {
            strategy: 'local',
            email: username,
            password: password
        };
        return this.http.post('', this.user);
    }
}