import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { GitHubModule } from './github/github.module';
import { LoginModule } from './login/login.module';
import { GitHubRouting } from './github/github.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    GitHubModule,
    GitHubRouting,
    routing
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
