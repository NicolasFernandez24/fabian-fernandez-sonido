import { Component } from '@angular/core';

import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { HeroComponent } from '../../sections/hero/hero.component';
import { ServicesComponent } from '../../sections/services/services.component';
import { PricingComponent } from '../../sections/pricing/pricing.component';
import { GalleryComponent } from '../../sections/gallery/gallery.component';
import { ContactComponent } from '../../sections/contact/contact.component';
import { FooterComponent } from '../../sections/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    PricingComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}