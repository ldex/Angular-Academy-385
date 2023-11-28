import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home.component';
import { ContactComponent } from './shared/contact.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { AdminComponent } from './shared/admin.component';
import { ErrorComponent } from './shared/error.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'products', children: [
        { path: '', component: ProductListComponent },
        { path: ':id', component: ProductDetailComponent }
    ]},
    { path: 'admin', component: AdminComponent },
    { path: 'error', component: ErrorComponent },
    { path: '**', redirectTo: '/error' }
];
