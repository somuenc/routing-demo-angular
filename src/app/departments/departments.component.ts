import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  public departments = [
    { 'id': 1, 'name': 'Angular' },
    { 'id': 2, 'name': 'DOJO' },
    { 'id': 3, 'name': 'Node' },
    { 'id': 4, 'name': 'Python' },
    { 'id': 5, 'name': 'Ruby' }
  ];
  selectedId: number;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department) {
    this.selectedId = department.id;
    this.router.navigate([this.selectedId], { relativeTo: this.route });
  }

  isSelected(d) {
    return d.id === this.selectedId;
  }
}
