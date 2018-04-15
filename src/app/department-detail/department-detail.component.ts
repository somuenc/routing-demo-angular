import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  names = ['PRANAVI', 'PRANNU', 'SONU'];

  departmentId: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // tslint:disable-next-line:radix
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrev() {
    let prevId = this.departmentId - 1;
    this.router.navigate(['../', prevId], { relativeTo: this.route });
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['../', nextId], { relativeTo: this.route });
  }

  goBack() {
    this.router.navigate(['../', { id: this.departmentId, test: 'testValue' }], { relativeTo: this.route });
  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }

  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
}
