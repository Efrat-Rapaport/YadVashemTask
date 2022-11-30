import { Component } from '@angular/core';
import { Testimony } from 'src/classes/testimony';
import { TestimonyService } from '../testimony.service';

@Component({
  selector: 'app-testimony-presentation',
  templateUrl: './testimony-presentation.component.html',
  styleUrls: ['./testimony-presentation.component.css']
})
export class TestimonyPresentationComponent {
  constructor(private _testimonyService: TestimonyService) { }
  _testimony!: Testimony;
  _testimonyTitle?: string;


  ngOnInit(): void {
    this.loadTestimony();
    // x=this._testimony.transcriptSTR[0].subTitle
  }

  loadTestimony() {
    this._testimonyService.getTestimony().subscribe(
      succ => {
        console.log("get testimony succuss :) ");
        this._testimony = succ;
        console.log(succ);
        this._testimonyTitle = this._testimony.infoText.slice(0, 190);
      },
    )
  }
}
