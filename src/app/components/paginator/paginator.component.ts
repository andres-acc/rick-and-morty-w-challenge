import { 
  Component, 
  EventEmitter, 
  Input, 
  OnInit, 
  Output 
} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() pages: number = 0;
  @Input() currentPage: number = 0;
  
  @Output() gotToPageEvent = new EventEmitter<number>();

  fullPagesList: number[] = [];
  pagesToShow: number[] = [];

  ngOnInit(): void {
    this.fullPagesList = Array.from({length: this.pages}).map((_, i) => i+1);
    this.definePagesButtons(this.currentPage);
  }

  definePagesButtons(page: number): void {
    if(this.pages > 5) {
      let pagesArray = [...this.fullPagesList];

      pagesArray = [...pagesArray.slice(page - 1, pagesArray.length)];

      if(pagesArray.length > 4) {
        pagesArray = [
          ...pagesArray.splice(0, 2), 
          -1, 
          ...pagesArray.splice(pagesArray.length - 2, pagesArray.length)
        ];
        this.pagesToShow = pagesArray;
      } else if(pagesArray.length === 4) {
        pagesArray = [
          -1, 
          ...pagesArray.splice(0, 2), 
          ...pagesArray.splice(pagesArray.length - 2, pagesArray.length)
        ];
        this.pagesToShow = pagesArray;
      }
    }
  }

  goToPage(page: number): void {
    if(!page) return;
    this.gotToPageEvent.emit(page);
    this.definePagesButtons(page);
  }

  goToPageFromArrow(arrow: 'left' | 'right'): void {
    if(arrow === 'left') {
      this.gotToPageEvent.emit(this.currentPage - 1);
      this.definePagesButtons(this.currentPage - 1);
    } else {
      this.gotToPageEvent.emit(this.currentPage + 1);
      this.definePagesButtons(this.currentPage + 1);
    }    
  }
}
