import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import { Resource } from '../models/resource.model';
import { ActivatedRoute, Router } from '@angular/router';  // Import ActivatedRoute to grab the ID from the URL
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-resource-details',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailsComponent implements OnInit {
  resource!: Resource;  // Initialize an empty resource
  resourceId!: number;

  constructor(
    private resourceService: ResourceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Grab the ID from the URL using ActivatedRoute
    this.resourceId = Number(this.route.snapshot.paramMap.get('id'));

    // Fetch the resource by ID from the service
    this.resourceService.getResource(this.resourceId).subscribe((resource) => {
      if (resource) {
        this.resource = resource;
      } else {
        // Handle case when resource is not found
        this.router.navigate(['/resource-list']);
      }
    });
  }

  // Navigate back to the resource list page
  goBack(): void {
    this.router.navigate(['/resource-list']);
  }
}
