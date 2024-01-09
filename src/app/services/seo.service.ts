import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  meta = inject(Meta);
  title = inject(Title);

  constructor() { }

  public setMetaDescription(content: string) {
    this.meta.updateTag({
      name: 'description',
      content: content
    });
  }

  public setMetaTitle(title: string) {
    this.title.setTitle(title);
  }

}
