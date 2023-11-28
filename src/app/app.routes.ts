import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home.component';
import { ContactComponent } from './shared/contact.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { AdminComponent } from './shared/admin.component';
import { ErrorComponent } from './shared/error.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'admin', component: AdminComponent },
    { path: '**', component: ErrorComponent }
];
