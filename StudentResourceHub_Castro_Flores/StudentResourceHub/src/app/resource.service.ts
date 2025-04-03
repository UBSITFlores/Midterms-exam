import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resource } from './models/resource.model'; // Import the Resource model

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private resources: Resource[] = [
    {
      id: 1,
      title: 'Angular Basics',
      description: 'An introduction to Angular for beginners.',
      url: 'https://angular.io/guide/what-is-angular',
      category: 'Programming',
      author: 'John Doe',
      publicationDate: new Date('2024-01-01')
    },
    {
      id: 2,
      title: 'CSS Flexbox Guide',
      description: 'Learn how to create responsive layouts with CSS Flexbox.',
      url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
      category: 'Design',
      author: 'Jane Smith',
      publicationDate: new Date('2024-02-15')
    },
    {
      id: 3,
      title: 'Linear Algebra 101',
      description: 'A beginner’s guide to linear algebra concepts and matrices.',
      url: 'https://www.khanacademy.org/math/linear-algebra',
      category: 'Math',
      author: 'Alice Brown',
      publicationDate: new Date('2024-03-01')
    }
  ];

  constructor() {}

  // Get all resources
  getResources(): Observable<Resource[]> {
    return of(this.resources);
  }

  // Get a single resource by ID
  getResource(id: number): Observable<Resource | undefined> {
    const resource = this.resources.find(r => r.id === id);
    return of(resource);
  }

  // Add a new resource
  addResource(resource: Resource): Observable<Resource> {
    const newId = Math.max(...this.resources.map(r => r.id)) + 1;
    const newResource = { ...resource, id: newId };
    this.resources.push(newResource);
    return of(newResource);
  }

  // Update an existing resource
  updateResource(resource: Resource): Observable<Resource> {
    const index = this.resources.findIndex(r => r.id === resource.id);
    if (index !== -1) {
      this.resources[index] = { ...resource };
      return of(this.resources[index]);
    }
    return of(resource); // If not found, return the unchanged resource
  }

  // Delete a resource by ID
  deleteResource(id: number): Observable<boolean> {
    const index = this.resources.findIndex(r => r.id === id);
    if (index !== -1) {
      this.resources.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}
