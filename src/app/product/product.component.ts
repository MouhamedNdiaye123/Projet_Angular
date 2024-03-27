import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  products: any[] = [
    {
      id:'p001', 
      prodName:'chemise', 
      description:'lorem teg amet njhb jbhb bhbhhbhb vgb bhbh', 
      price:'3000',
      imageUrl: '/assets/prod.jpeg'
    },
    {
      id:'p002', 
      prodName:'chemise', 
      description:'lorem teg amet njhb jbhb bhbhhbhb vgb bhbh', 
      price:'3000',
      imageUrl: '/assets/prod.jpeg'
    },
    {
      id:'p003', 
      prodName:'chemise', 
      description:'lorem teg amet njhb jbhb bhbhhbhb vgb bhbh', 
      price:'3000',
      imageUrl: '/assets/prod.jpeg'
    },
    {
      id:'p004', 
      prodName:'chemise', 
      description:'lorem teg amet njhb jbhb bhbhhbhb vgb bhbh', 
      price:'3000',
      imageUrl: '/assets/prod.jpeg'
    },
    {
      id:'p005', 
      prodName:'chemise', 
      description:'lorem teg amet njhb jbhb bhbhhbhb vgb bhbh', 
      price:'3000',
      imageUrl: '/assets/prod.jpeg'
    },
    {
      id:'p006', 
      prodName:'chemise', 
      description:'lorem teg amet njhb jbhb bhbhhbhb vgb bhbh', 
      price:'3000',
      imageUrl: '/assets/prod.jpeg'
    },
    {
      id:'p007', 
      prodName:'chemise', 
      description:'lorem teg amet njhb jbhb bhbhhbhb vgb bhbh', 
      price:'3000',
      imageUrl: '/assets/prod.jpeg'
    },
      
  ];
}
