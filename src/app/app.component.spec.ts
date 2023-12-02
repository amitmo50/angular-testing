import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {BudgetCsvComponent} from './components/budget-csv/budget-csv.component';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [BudgetCsvComponent, RouterTestingModule, SvgModule.forRoot({assetsPath: 'https://ui-demand.ssacdn.com/demand/icons'})]
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'angular-testing'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('Angular Testing');
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('.content h1')?.textContent).toContain('Angular Testing Example');
    });
});
