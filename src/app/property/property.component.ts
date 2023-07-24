import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent {
property:any = {
  "ID":1,
  "Name":"B house",
  "Type":"House",
  "Price":120000
}
}
