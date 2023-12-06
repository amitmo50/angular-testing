import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {BudgetCsvComponent} from '../components/budget-csv/budget-csv.component';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {BudgetCsvService} from '../components/budget-csv/budget-csv.service';
import {ApplicationService} from '../services/application/application.service';
import {ConfigService} from '../services/config/config.service';
import {CsvFormDownloadComponent} from '../components/budget-csv/components/csv-form-download/csv-form-download.component';
import {MOCK_CAMPAIGNS, StreamFileStatus} from '../components/budget-csv/budget-csv.entities';
import {By} from '@angular/platform-browser';
import {ButtonModule} from '@ironsource/fusion-ui/components/button';
import {ApplicationServiceMock, BudgetCsvServiceMock, MockConfigService} from '../mocks/mock-services';

describe('BudgetCsvComponentExample', () => {
    let component: BudgetCsvComponent;
    let fixture: ComponentFixture<BudgetCsvComponent>;
    let service: BudgetCsvService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BudgetCsvComponent, CsvFormDownloadComponent, ButtonModule],
            providers: [
                FormBuilder,
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {queryParams: of({})}
                    }
                },
                BudgetCsvService,
                {provide: ApplicationService, useClass: ApplicationServiceMock},
                {provide: ConfigService, useClass: MockConfigService}
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(BudgetCsvComponent);
        service = TestBed.inject(BudgetCsvService);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should not open dropdown-dual-multi-select-layout unless set one of the form control checkbox to "true"', () => {
        fixture.debugElement
            .query(By.css('fusion-dropdown-dual-multi-select .dropdown-dual-multi-select-button .dual-select-button'))
            .nativeElement.click();
        let dropdownMultiLayout = fixture.debugElement.query(
            By.css('fusion-dropdown-dual-multi-select .is-dropdown-dual-multi-select .dropdown-dual-multi-select-layout')
        );
        fixture.detectChanges();
        expect(dropdownMultiLayout).toBeNull();
        component['form'].get('active').setValue(true);
        fixture.detectChanges();
        dropdownMultiLayout = fixture.debugElement.query(
            By.css('fusion-dropdown-dual-multi-select .is-dropdown-dual-multi-select .dropdown-dual-multi-select-layout')
        );
        expect(dropdownMultiLayout.nativeElement).toBeDefined();
    });

    it('should emit component method onDownloadButtonClicked and budgetCsvService method downloadBudgetCsvStreamData be called once when click on Download Button', () => {
        spyOn<any>(component, 'onDownloadButtonClicked').and.callThrough();
        spyOn<any>(component['budgetCsvService'], 'downloadBudgetCsvStreamData').and.callThrough();
        component['form'].get('campaigns').setValue([MOCK_CAMPAIGNS.campaigns[0]]);
        fixture.debugElement.query(By.css('.action-buttons-container fusion-button.primary')).nativeElement.click();
        fixture.detectChanges();
        expect(component['onDownloadButtonClicked']).toHaveBeenCalledTimes(1);
        expect(component['budgetCsvService'].downloadBudgetCsvStreamData).toHaveBeenCalledTimes(1);
    });

    it('should redirect to home when click on Cancel button', () => {
        spyOn<any>(window.console, 'log').and.callThrough();
        fixture.debugElement.query(By.css('.action-buttons-container fusion-button.transparent.third')).nativeElement.click();
        fixture.detectChanges();
        expect(window.console.log).toHaveBeenCalledWith('Cancel and Redirect');
    });

    it('should onDownloadCsvFileStart component method return with value `START` click on Download button, and console.log that download success', fakeAsync(() => {
        spyOn<any>(component, 'onDownloadCsvFileStart').and.callThrough();
        spyOn<any>(service, 'downloadBudgetCsvStreamData').and.callThrough();
        spyOn<any>(window.console, 'log').and.callThrough();
        component['form'].get('campaigns').setValue([MOCK_CAMPAIGNS.campaigns[0]]);
        fixture.debugElement.query(By.css('.action-buttons-container fusion-button.primary')).nativeElement.click();
        tick(5000);
        fixture.detectChanges();
        expect(window.console.log).toHaveBeenCalledWith('Success download CSV!');
        expect(component['onDownloadCsvFileStart']).toHaveBeenCalledWith({
            status: StreamFileStatus.START
        });
    }));
});
