import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginatorComponent } from './paginator.component';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginatorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set fullPagesList when pages input is changed', () => {
    const pages = 10;
    component.pages = pages;
    component.ngOnChanges();
    expect(component.fullPagesList.length).toBe(pages);
  });

  it('should set pagesToShow when definePagesButtons is called', () => {
    const pages = 10;
    const visiblePages = 5;
    const currentPage = 3;
    component.pages = pages;
    component.visiblePages = visiblePages;
    component.currentPage = currentPage;
    component.ngOnChanges();
    component.definePagesButtons(currentPage);
    expect(component.pagesToShow.length).toBe(visiblePages + 1);
  });

  it('should initialize with fullPagesList array of length equal to the number of pages', () => {
    const pages = 5;
    component.pages = pages;
    component.ngOnChanges();
    expect(component.fullPagesList).toEqual([1, 2, 3, 4, 5]);
  });

  it('should set pagesToShow array to fullPagesList if number of pages is less than or equal to visiblePages', () => {
    component.pages = 5;
    component.visiblePages = 10;
    component.ngOnChanges();
    expect(component.pagesToShow).toEqual([1, 2, 3, 4, 5]);
  });

  it('should define pagesToShow array if number of pages is greater than visiblePages', () => {
    const currentPage = 5;
    const visiblePages = 5;
    component.pages = 10;
    component.currentPage = currentPage;
    component.visiblePages = visiblePages;
    component.ngOnChanges();
    expect(component.pagesToShow).toEqual([5, 6, -1, 8, 9, 10]);
  });

  it('should define pagesToShow array correctly when currentPage is close to start', () => {
    component.pages = 10;
    component.currentPage = 2;
    component.visiblePages = 5;
    component.ngOnChanges();
    expect(component.pagesToShow).toEqual([2, 3, -1, 8, 9, 10]);
  });

  it('should define pagesToShow array correctly when currentPage is close to end', () => {
    component.pages = 10;
    component.currentPage = 10;
    component.visiblePages = 5;
    component.ngOnChanges();
    expect(component.pagesToShow).toEqual([]);
  });

  it('should update pagesToShow array correctly when goToPage method is called', () => {
    component.pages = 10;
    component.currentPage = 5;
    component.visiblePages = 5;
    component.ngOnChanges();
    component.goToPage(8);
    expect(component.pagesToShow).toEqual([5, 6, -1, 8, 9, 10]);
  });

  it('should return true if the page is equal to -1', () => {
    const page = -1;
    expect(component.isDots(page)).toBe(true);
  });

  it('should return false if the page is not equal to -1', () => {
    const page = 3;
    expect(component.isDots(page)).toBe(false);
  });
  
  it('should return true when current page is the same as page parameter', () => {
    component.currentPage = 3;
    const result = component.isCurrentPage(3);
    expect(result).toBe(true);
  });

  it('should return false when current page is not the same as page parameter', () => {
    component.currentPage = 3;
    const result = component.isCurrentPage(5);
    expect(result).toBe(false);
  });

  it('should return number if not a dot or current page', () => {
    expect(component.getDisplayNumber(1)).toBe(1);
  });

  it('should return dot if page is a dot', () => {
    expect(component.getDisplayNumber(-1)).toBe(undefined);
  });
});
