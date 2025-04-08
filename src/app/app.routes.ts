import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ArticleComponent } from './article/article.component';
import {LoginFormComponent} from "./login-form/login-form.component";
import {authGuard} from "./guards/auth.guard";
import {roleGuard} from "./guards/role.guard";
import {visitorOnlyGuard} from "./guards/visitor-only.guard";
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {ProfilePageComponent} from "./profile-page/profile-page.component";

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'article/:id', component: ArticlePageComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'signup', component: SignupFormComponent, canActivate: [visitorOnlyGuard] },
  { path: 'login', component: LoginFormComponent, canActivate: [visitorOnlyGuard] },
  { path: 'profile', component: ProfilePageComponent, canActivate: [authGuard]},
  { path: 'admin', component: AdminPageComponent, canActivate: [roleGuard('admin')]},
  { path: '**', component: NotFoundComponent }
];
