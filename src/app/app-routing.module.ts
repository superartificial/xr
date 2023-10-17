import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template/template.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { PageComponent } from './pages/page/page.component';

const routes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: 'pages/:page', component: PageComponent },
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
