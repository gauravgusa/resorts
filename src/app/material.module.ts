import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  imports: [MatCardModule, MatSliderModule, MatButtonModule, MatBadgeModule],
  exports: [MatCardModule, MatSliderModule, MatButtonModule, MatBadgeModule],
})
export class MaterialModule {}
