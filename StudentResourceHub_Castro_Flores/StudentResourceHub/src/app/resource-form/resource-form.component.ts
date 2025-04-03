import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import { Resource } from '../models/resource.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resource-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.css']
})
export class ResourceFormComponent implements OnInit {
  resource: Resource = {
    id: 0,
    title: '',
    description: '',
    url: '',
    category: 'Programming',
    author: '',
    publicationDate: new Date()
  };

  categories = ['Programming', 'Design', 'Math'];

  constructor(private resourceService: ResourceService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.resource.id === 0) {
      // Add new resource
      this.resourceService.addResource(this.resource).subscribe(() => {
        this.router.navigate(['/resource-list']);
      });
    } else {
      // Update existing resource
      this.resourceService.updateResource(this.resource).subscribe(() => {
        this.router.navigate(['/resource-list']);
      });
    }
  }
}
