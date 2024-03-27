import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'product', component: ProductComponent},
    {path: 'product', children:[{path: 'product-detail', component: ProductDetailComponent}]},
    {path: 'blog', component: BlogComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: PageNotFoundComponent},
];
