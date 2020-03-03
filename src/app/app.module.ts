import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { CameraComponent } from './camera/camera.component';
import { ResultComponent } from './result/result.component';
import { CodeComponent } from './code/code.component';

import { WebcamModule } from 'ngx-webcam';
import { CompileStringService } from 'src/service/compileString.Service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    CameraComponent,
    ResultComponent,
    CodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CompileStringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
