import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nameTemp = new FormControl('');

  updateName() {
    this.nameTemp.setValue('Nancy');
  }

}
