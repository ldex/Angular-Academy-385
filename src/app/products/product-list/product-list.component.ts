import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.interface';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  title: string = 'Products'
  selectedProduct: Product
  private router = inject(Router)
  private productService = inject(ProductService)
  products$: Observable<Product[]> = this.productService.products$

  // Pagination
  pageNumber = 1
  pageSize = 5
  start = 0
  end = this.pageSize

  previousPage() {
    this.pageNumber--
    this.start -= this.pageSize
    this.end -= this.pageSize
    this.selectedProduct = undefined
  }

  nextPage() {
    this.pageNumber++
    this.start += this.pageSize
    this.end += this.pageSize
    this.selectedProduct = undefined
  }


  onSelect(product: Product): void {
    this.router.navigateByUrl('/products/' + product.id)
  }
}
