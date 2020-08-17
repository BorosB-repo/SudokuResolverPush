import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { SolverPageComponent } from './solver-page/solver-page.component';
import { ThinkerSerivce } from './services/thinker.service';

@NgModule({
  declarations: [
    AppComponent,
    SolverPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [ThinkerSerivce],
  bootstrap: [AppComponent]
})
export class AppModule { }
