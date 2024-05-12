// nx-welcome.module.ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [NxWelcomeComponent],
  imports: [CommonModule],
  exports: [NxWelcomeComponent]
})
export class NxWelcomeModule { }
