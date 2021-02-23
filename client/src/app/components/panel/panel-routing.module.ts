import { ProjectsComponent } from './layout/projects/projects.component';
import { PapersComponent } from './layout/papers/papers.component';
import { InvestigatorsComponent } from './layout/investigators/investigators.component';
import { NewsComponent } from './layout/news/news.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './layout/users/users.component';
import { AdminGuard } from '../../guards/admin.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',

    component: PanelComponent,

    children: [
      { path: 'usuarios', component: UsersComponent },
      { path: 'novedades', component: NewsComponent },
      { path: 'investigadores', component: InvestigatorsComponent },
      { path: 'publicaciones', component: PapersComponent },
      { path: 'proyectos', component: ProjectsComponent }
    ],

    canActivateChild: [AdminGuard],
    canActivate: [AdminGuard]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
