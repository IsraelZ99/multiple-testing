import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestOperationComponent } from './test-operation/test-operation.component';
import { CustomTableIzModule } from "custom-table-iz";
import { TestLibraryComponent } from './test-library/test-library.component';

@NgModule({
  declarations: [
    AppComponent,
    TestOperationComponent,
    TestLibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomTableIzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
