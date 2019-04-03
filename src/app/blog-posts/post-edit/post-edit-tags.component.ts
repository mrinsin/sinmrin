import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './post-edit-tags.component.html'
})
export class PostEditTagsComponent implements OnInit {
  errorMessage: string;
  newTags = '';
  post = { id: 1, category: 'test', tags: ['test'] };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // Add the defined tags
  addTags(): void {
    if (!this.newTags) {
      this.errorMessage = 'Enter the search keywords separated by commas and then press Add';
    } else {
      const tagArray = this.newTags.split(',');
      this.post.tags = this.post.tags ? this.post.tags.concat(tagArray) : tagArray;
      this.newTags = '';
      this.errorMessage = '';
    }
  }

  // Remove the tag from the array of tags.
  removeTag(idx: number): void {
    this.post.tags.splice(idx, 1);
  }
}
