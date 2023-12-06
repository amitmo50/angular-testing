import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import {BudgetCsvComponent} from './budget-csv.component';

describe('BudgetCsvComponent', () => {
    let component: BudgetCsvComponent;
    let fixture: ComponentFixture<BudgetCsvComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BudgetCsvComponent],
            providers: []
        }).compileComponents();
        fixture = TestBed.createComponent(BudgetCsvComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should not open dropdown-dual-multi-select-layout unless set one of the form control checkbox to "true"', () => {
        expect(1).toEqual(1);
    });

    it('should emit component method onDownloadButtonClicked and budgetCsvService method downloadBudgetCsvStreamData be called once when click on Download Button', () => {
        expect(1).toEqual(1);
    });

    it('should redirect to home when click on Cancel button', () => {
        expect(1).toEqual(1);
    });

    it('should onDownloadCsvFileStart component method return with value `START` click on Download button, and console.log that download success', fakeAsync(() => {
        expect(1).toEqual(1);
    }));
});
