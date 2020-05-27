import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkOutAComponent } from './work-out-a/work-out-a.component';
// import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WorkOutAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
