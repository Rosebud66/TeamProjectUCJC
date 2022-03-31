import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { PersonalPageComponent } from './pages/personal-page/personal-page/personal-page.component';
import { BookDataComponent } from './book-data/book-data.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { Footer } from 'primeng/api';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { TabmenuComponent } from './tabmenu/tabmenu.component';
import { DockComponent } from './dock/dock.component';
import { PrimemenuComponent } from './primemenu/primemenu.component';
import { SubjectPageComponent } from './pages/subject-page/subject-page.component';
import { AreaPageComponent } from './pages/area-page/area-page.component';
import { TemaryPageComponent } from './pages/temary-page/temary-page.component';
import { TemaryDetailPageComponent } from './pages/temary-page/pages/temary-detail-page/temary-detail-page.component';
import { GalleryComponent } from './shared/gallery/gallery.component';

const routes: Routes = [
  // Página principal
  { path: '', component: LoginPageComponent },

  { path: 'home', component: HomeComponent },
  // Settings
  { path: 'settings-page', component: SettingsPageComponent },
  // 
  { path: 'subject-page', component: SubjectPageComponent },
    { path: 'area-page', component: AreaPageComponent },
      { path: 'temary-page', component: TemaryPageComponent },
        { path: 'temary-detail-page', component: TemaryDetailPageComponent },
  
  { path: 'books', component: BookDataComponent },
  
  { path: 'login-page', component: LoginPageComponent },  
  { path: 'register-page', component: RegisterPageComponent }, 
  { path: 'personal', component: PersonalPageComponent }, 
  { path: 'test2', component: GalleryComponent }, 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
