import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { CardComponent } from './component/card/card.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { SectionComponent } from './component/section/section.component';


@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    FooterComponent,
    CardComponent,
    CarouselComponent,
    SectionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
