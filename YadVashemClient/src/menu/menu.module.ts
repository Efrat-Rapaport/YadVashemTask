import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { DetailsComponent } from './details/details.component';
import { HierarchialTreeComponent } from './hierarchial-tree/hierarchial-tree.component';
import { MapComponent } from './map/map.component';

import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    TabsComponent,
    DetailsComponent,
    HierarchialTreeComponent,
    MapComponent
  ],
  imports: [
    CommonModule, MatCardModule, MatTabsModule, MatTreeModule, MatIconModule
  ],
  exports: [TabsComponent, MatTreeModule, MatIconModule]
})
export class MenuModule { }
