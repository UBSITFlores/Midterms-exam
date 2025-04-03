import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import { Resource } from '../models/resource.model';
import { Router } from '@angular/router';  // Import Router for navigation
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resource-category',
  standalone: true,
  templateUrl: './resource-category.component.html',
  styleUrls: ['./resource-category.component.css'],
  imports: [FormsModule, CommonModule]  // Add FormsModule here
})
export class ResourceCategoryComponent implements OnInit {
  selectedCategory: string = 'Programming'; // Default category
  resources: Resource[] = [];
  filteredResources: Resource[] = [];

  constructor(private resourceService: ResourceService, private router: Router) {}

  ngOnInit(): void {
    this.resourceService.getResources().subscribe((data) => {
      this.resources = data;
      this.filterByCategory(); // Apply category filter on component load
    });
  }

  // Filter resources based on category
  filterByCategory(): void {
    this.filteredResources = this.resources.filter(
      (resource) => resource.category === this.selectedCategory
    );
  }

  // Category change handler
  onCategoryChange(): void {
    this.filterByCategory();
  }

  // Add the viewDetails method for navigation
  viewDetails(id: number): void {
    this.router.navigate(['/resource-details', id]);
  }
}
