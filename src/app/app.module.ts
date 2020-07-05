import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArchiveComponent } from './archive/archive.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthAdminRoleGuardService } from './services/auth-admin-role-guard.service';
import { PermissionDeniendComponent } from './permission-deniend/permission-deniend.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ArchiveComponent,
    LoginComponent,
    AdminComponent,
    PermissionDeniendComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path :'' , component: LoginComponent},
      { path :'home' , component: HomeComponent},
      { path: 'login', component: LoginComponent },
      { path: 'admin', component: AdminComponent , canActivate :[AuthGuard,AuthAdminRoleGuardService] },
      { path :'archive/:year/:month' , component: ArchiveComponent},
      { path :'permissionDeniend' , component: PermissionDeniendComponent},
      { path :'**' , component: NotFoundComponent}
    ])
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
