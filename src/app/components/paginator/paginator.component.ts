import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent implements OnChanges {
  @Input() pages: number = 0;
  @Input() currentPage: number = 0;
  @Input() visiblePages: number = 0;

  @Output() goToPageEvent = new EventEmitter<number>();

  fullPagesList: number[] = [];
  pagesToShow: number[] = [];
  pagesDifferential = 0;

  ngOnChanges(): void {
    this.pagesDifferential = (this.visiblePages / 2);
    this.fullPagesList = Array.from({length: this.pages}).map((_, i) => i+1);
    this.definePagesButtons(this.currentPage);
  }

  getDisplayNumber(page: number): number | undefined {
    return page !== -1 ? page : undefined;
  }

  isDots(page: number): boolean {
    return page === -1;
  }

  isCurrentPage(page: number): boolean {
    return page === this.currentPage;
  }

  definePagesButtons(page: number): void {
    if(this.pages > this.visiblePages) {
      let pagesArray = [...this.fullPagesList];

      pagesArray = [...pagesArray.slice(page - 1, pagesArray.length)];

      if(pagesArray.length > this.visiblePages) {
        pagesArray = [
          ...this.getFirstButtons(pagesArray),
          -1,
          ...this.getLastButtons(pagesArray),
        ];
        this.pagesToShow = pagesArray;
      } else if(pagesArray.length === this.visiblePages) {
        pagesArray = [
          -1,
          ...this.getFirstButtons(pagesArray),
          ...this.getLastButtons(pagesArray),
        ];
        this.pagesToShow = pagesArray;
      }
    } else {
      this.pagesToShow = [...this.fullPagesList];
    }
  }

  goToPage(page: number): void {
    if(!page) return;
    this.goToPageEvent.emit(page);
    this.definePagesButtons(page);
  }

  goToPageFromArrow(go: 'left' | 'right'): void {
    const newPage = go === 'left' ? this.currentPage - 1 : this.currentPage + 1;
    this.goToPageEvent.emit(newPage);
    this.definePagesButtons(newPage);
  }

  private getFirstButtons(pagesArray: number[]): number[] {
    return [...pagesArray.splice(0, this.pagesDifferential)];
  }

  private getLastButtons(pagesArray: number[]): number[] {
    return [...pagesArray.splice(pagesArray.length - this.pagesDifferential, pagesArray.length)];
  }
}
