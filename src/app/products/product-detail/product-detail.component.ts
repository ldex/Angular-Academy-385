import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.interface';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  private productService = inject(ProductService)
  private router = inject(Router)

  product$: Observable<Product>;
  private productId: number;

  deleteProduct() {
    this
      .productService
      .deleteProduct(this.id)
      .subscribe(
        () => {
          console.log('Product deleted on the server.');
          this.productService.resetCache();
          this.router.navigateByUrl('/products');
        }
      )
  }

  get id(): number {
    return this.productId;
  }
  @Input() set id(productId) {
    this.productId = productId;
    this.product$ = this
                      .productService
                      .getProductById(productId)

  }

}
