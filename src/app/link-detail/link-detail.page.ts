import { Component, OnInit } from '@angular/core';
import { AppLink } from '../models/app-link';
import { Category } from '../models/category';

@Component({
  selector: 'app-link-detail',
  templateUrl: './link-detail.page.html'
})
export class LinkDetailPage implements OnInit {
  constructor() {}

  appLink = {
    link: '',
    categoryId: '1',
  } as AppLink;

  categories = [
    { id: '1', name: 'Public' } as Category,
    { id: '2', name: 'Private' } as Category,
  ];

  ngOnInit() {}

  onSubmit() {
    console.log('submit', this.appLink);
  }

  onDelete() {
    console.log('delete');
  }
}
