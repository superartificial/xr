import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template/template.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { PageComponent } from './pages/page/page.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { LocalGroupsComponent } from './local-groups/local-groups.component';
import { NewsItemComponent } from './news/news-item/news-item.component';

const routes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: 'pages/:slug', component: PageComponent },
  { path: 'news', component: NewsListComponent },
  { path: 'news/:slug', component: NewsItemComponent },
  { path: 'groups', component: LocalGroupsComponent },

  // { path: '', redirectTo: '/app', pathMatch: 'full'  },
  // { path: 'app', component: TemplateComponent, pathMatch: 'full', children: [
  //   { path: 'events', component: EventListComponent } 
  // ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
