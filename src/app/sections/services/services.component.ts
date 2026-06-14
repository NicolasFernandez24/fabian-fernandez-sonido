import { Component } from '@angular/core';
import { LucideAngularModule, MicVocal, Lightbulb, PartyPopper } from 'lucide-angular';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './services.component.html'
})
export class ServicesComponent {

  readonly MicVocal = MicVocal;
  readonly Lightbulb = Lightbulb;
  readonly PartyPopper = PartyPopper;

}