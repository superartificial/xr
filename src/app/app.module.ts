import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { TemplateComponent } from './template/template/template.component';
import { PageComponent } from './pages/page/page.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsItemComponent } from './news/news-item/news-item.component';
import { LocalGroupsComponent } from './local-groups/local-groups.component';
import { LocalGroupComponent } from './local-groups/local-group/local-group.component';
import { NewItemSummaryComponent } from './news/new-item-summary/new-item-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EventListComponent,
    TemplateComponent,
    PageComponent,
    NewsListComponent,
    NewsItemComponent,
    LocalGroupsComponent,
    LocalGroupComponent,
    NewItemSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
