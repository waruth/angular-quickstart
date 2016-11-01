/** step 2 Create your application */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/** step 3 Create a component and add it to your application */
import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
