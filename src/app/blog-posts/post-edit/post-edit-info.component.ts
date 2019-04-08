import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Post } from '../post';

@Component({
  templateUrl: './post-edit-info.component.html'
})
export class PostEditInfoComponent implements OnInit {
  @ViewChild(NgForm) postForm: NgForm;

  errorMessage: string;
  post : Post;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent.data.subscribe(data => {
      const resolvedData = data['post'];
      this.errorMessage = resolvedData.errorMessage;
      this.post = resolvedData.post
    })
  }
}
