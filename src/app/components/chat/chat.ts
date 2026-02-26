import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'chat',
  templateUrl: './chat.html',
})
export class Chat {
  route = inject(ActivatedRoute);

  selectedLanguage = this.route.snapshot.queryParamMap.get('language') ?? 'Unknown language';
}
