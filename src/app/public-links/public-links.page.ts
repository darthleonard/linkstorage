import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-links',
  templateUrl: './public-links.page.html'
})
export class PublicLinksPage implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }

  onAddClick() {
    this.router.navigate(['link-detail']);
  }

}
