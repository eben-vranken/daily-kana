import { Component, Input, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.html',
  host: { class: 'block' },
})
export class CarouselComponent implements AfterContentInit {
  @Input() itemCount: number = 0;
  currentIndex: number = 0;

  private touchStartX: number = 0;
  private touchEndX: number = 0;
  private readonly swipeThreshold: number = 50;

  ngAfterContentInit() {}

  get items(): number[] {
    return Array.from({ length: this.itemCount }, (_, i) => i);
  }

  goTo(index: number): void {
    this.currentIndex = index;
  }

  next(): void {
    if (this.currentIndex < this.itemCount - 1) {
      this.currentIndex++;
    }
  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent): void {
    this.touchEndX = event.touches[0].clientX;
  }

  onTouchEnd(): void {
    const swipeDistance = this.touchStartX - this.touchEndX;

    if (Math.abs(swipeDistance) > this.swipeThreshold) {
      if (swipeDistance > 0) {
        this.next();
      } else {
        this.prev();
      }
    }

    this.touchStartX = 0;
    this.touchEndX = 0;
  }
}
