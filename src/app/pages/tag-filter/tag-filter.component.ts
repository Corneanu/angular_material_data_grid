import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-filter',
  templateUrl: './tag-filter.component.html',
  styleUrls: ['./tag-filter.component.scss']
})
export class TagFilterComponent implements OnInit {

  ts = `
headings: GridHeading[] = [
  ...
  { fieldName: 'first_name', display: 'First Name', type: 'string', filterType: 'tag' },
]
`;

  constructor() { }

  ngOnInit(): void {
  }

}
