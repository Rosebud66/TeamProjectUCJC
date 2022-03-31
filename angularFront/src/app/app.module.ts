import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { MainComponent } from './core/main/main.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PersonalPageComponent } from './pages/personal-page/personal-page/personal-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookDataComponent } from './book-data/book-data.component';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {PaginatorModule} from 'primeng/paginator';
import {ChartModule} from 'primeng/chart';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ChartComponent } from './shared/chart/chart.component';
import { DropdownMenuComponent } from './shared/dropdown-menu/dropdown-menu.component';
import {PasswordModule} from 'primeng/password';
import { DividerModule } from "primeng/divider";
import {InputTextModule} from 'primeng/inputtext';
import { HomeComponent } from './core/home/home.component';
import {MenubarModule} from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';
import { TabmenuComponent } from './tabmenu/tabmenu.component';
import {DockModule} from 'primeng/dock';
import { DockComponent } from './dock/dock.component';
import {InputSwitchModule} from 'primeng/inputswitch';
import { PrimemenuComponent } from './primemenu/primemenu.component';
import { SubjectPageComponent } from './pages/subject-page/subject-page.component';
import { AreaPageComponent } from './pages/area-page/area-page.component';
import { TemaryPageComponent } from './pages/temary-page/temary-page.component';
import { TemaryDetailPageComponent } from './pages/temary-page/pages/temary-detail-page/temary-detail-page.component';
import { GalleryComponent } from './shared/gallery/gallery.component';
import {CardModule} from 'primeng/card';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {ScrollPanelModule} from 'primeng/scrollpanel';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    NavbarComponent,
    PersonalPageComponent,
    BookDataComponent,
    SettingsPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ChartComponent,
    DropdownMenuComponent,
    HomeComponent,
    TabmenuComponent,
    DockComponent,
    PrimemenuComponent,
    SubjectPageComponent,
    AreaPageComponent,
    TemaryPageComponent,
    TemaryDetailPageComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    TabViewModule,
    PaginatorModule,
    ChartModule,
    PasswordModule,
    DividerModule,
    InputTextModule,
    MenubarModule,
    TabMenuModule,
    DockModule,
    InputSwitchModule,
    CardModule,
    OverlayPanelModule,
    MessagesModule,
    MessageModule,
    VirtualScrollerModule,
    ScrollPanelModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
