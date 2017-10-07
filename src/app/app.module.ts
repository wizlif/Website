import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {
  CovalentDialogsModule, CovalentLayoutModule, CovalentMediaModule, CovalentMenuModule,
  CovalentStepsModule
} from '@covalent/core';
import {CovalentHttpModule} from '@covalent/http';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule,
  MatMenuModule, MatSidenavModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDialogModule,
    CovalentMenuModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentMediaModule,
    CovalentHttpModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
