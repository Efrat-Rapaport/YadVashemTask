import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonyPresentationComponent } from './testimony-presentation/testimony-presentation.component';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  declarations: [
    TestimonyPresentationComponent,


  ],
  imports: [
    CommonModule, MatIconModule, HttpClientModule, MatCardModule, MatTabsModule
  ],
  exports: [TestimonyPresentationComponent, MatTabsModule, MatIconModule, HttpClientModule, MatCardModule]
})
export class TestimonyModule { }
