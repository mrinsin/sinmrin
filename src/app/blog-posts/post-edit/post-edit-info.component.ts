import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './post-edit-info.component.html'
})
export class PostEditInfoComponent implements OnInit {
  @ViewChild(NgForm) postForm: NgForm;

  errorMessage: string;
  post = { id: 1, postTitle: 'test', postCode: 'test' };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
}
