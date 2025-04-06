import { Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { FormComponent } from './form/form.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'task', component: TaskComponent},
    {path: 'news', component: NewsComponent}, 
    { path: 'form', component: FormComponent },  
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];
