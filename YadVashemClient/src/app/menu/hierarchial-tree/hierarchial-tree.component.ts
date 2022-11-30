import { Component } from '@angular/core';
import { TestimonyService } from 'src/app/testimony/testimony.service';
import { Testimony } from 'src/classes/testimony';

@Component({
  selector: 'app-hierarchial-tree',
  templateUrl: './hierarchial-tree.component.html',
  styleUrls: ['./hierarchial-tree.component.css']
})
export class HierarchialTreeComponent {

  constructor(private _testimonyService: TestimonyService) {

  }
  _testimony!: Testimony;
  _testimonyTitle?: string;
  _testimonyTitleList: string[] = [];
  _flag: boolean = false;

  ngOnInit(): void {
    this.loadTestimony();
  }
  openList() {
    this._flag = !this._flag;
  }
  loadTestimony() {
    this._testimonyService.getTestimony().subscribe(
      succ => {
        console.log("get testimony succuss :) ");
        this._testimony = succ;
        console.log(succ);
        this._testimonyTitle = this._testimony.infoText.slice(0, 40);
        console.log(this._testimonyTitle);
        this._testimonyTitleList?.push(this._testimonyTitle);
        // console.log("hii" + this._testimonyTitleList);
      },
    )
  }
}
