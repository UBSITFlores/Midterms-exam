import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ResourceFormComponent } from './resource-form/resource-form.component';
import { ResourceCategoryComponent } from './resource-category/resource-category.component';

export const routes: Routes = [
    {path: 'home', redirectTo: 'resource-list', pathMatch: 'full'},
    {path: 'categories', component: ResourceCategoryComponent,
    children: [
        {path: 'programming', component: ResourceCategoryComponent},
        {path: 'design', component: ResourceCategoryComponent},
        {path: 'math', component: ResourceCategoryComponent}
    ]},
    {path:'about', component: AboutComponent},
    {path: 'resource-list',component: ResourceListComponent},
    {path: 'add-resource', component: ResourceFormComponent},
    {path: 'resource-details/:id', component: ResourceDetailsComponent}
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];