import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutmeComponent } from 'src/app/aboutme/aboutme.component';
import { PortfolioComponent } from 'src/app/portfolio/portfolio.component';
import { BlogComponent } from 'src/app/blog/blog.component';
import { ContactmeComponent } from 'src/app/contactme/contactme.component';
import { ResumeComponent } from 'src/app/resume/resume.component';
import { ServicesComponent } from 'src/app/services/services.component';

const routes: Routes = [{
  path: 'about-me',
  component: AboutmeComponent
},{
  path: 'portfolio',
  component: PortfolioComponent
},{
  path: 'services',
  component: ServicesComponent
},{
  path: 'resume',
  component: ResumeComponent
},{
  path: 'blog',
  component: BlogComponent
},{
  path: 'contact',
  component: ContactmeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
