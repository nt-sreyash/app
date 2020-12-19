import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Student, MarksDTO } from './app.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-app';
  marks: any[];
  selectedEntry!: MarksDTO;
  isEdit: boolean = false;

  constructor(public appService: AppService) {
    this.marks = new Array<any>();
  }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.appService.getAllMarks().subscribe(res => {
      this.marks = res as any[];
      console.log(this.marks);
    });
  }

  onSelect(x: any) {
    console.log(x);
  }
}
