import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeModule } from './nx-welcome.module';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeModule],
  selector: 'app-cart-entry',
  template: `<app-nx-welcome></app-nx-welcome>`,
})
export class RemoteEntryComponent {}
