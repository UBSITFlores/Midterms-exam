import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import { Resource } from '../models/resource.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resource-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {
  resources: Resource[] = [];

  constructor(private resourceService: ResourceService, private router: Router) {}

  ngOnInit(): void {
    this.resourceService.getResources().subscribe((data) => {
      this.resources = data;
    });
  }

  // Navigate to resource details
  viewDetails(id: number): void {
    this.router.navigate(['/resource-details', id]);
  }
}
