import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {BudgetCsvComponent} from './budget-csv.component';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Observable, of} from 'rxjs';
import {BudgetCsvService} from './budget-csv.service';
import {Injectable} from '@angular/core';
import {ApplicationService} from '../../services/application/application.service';
import {ConfigService} from '../../services/config/config.service';
import {CsvFormDownloadComponent} from './components/csv-form-download/csv-form-download.component';
import {Campaign, DownloadBudgetCsvFormData, DownloadBudgetQueryParamsDTO, MOCK_CAMPAIGNS, StreamFileStatus} from './budget-csv.entities';
import {By} from '@angular/platform-browser';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/v1';
import {ButtonModule} from '@ironsource/fusion-ui/components/button';

@Injectable({
    providedIn: 'root'
})
class BudgetCsvServiceMock {
    downloadBudgetCsvStreamData(data: any): Observable<any> {
        return of(StreamFileStatus.START);
    }
    formatDate(date: string | Date) {
        return '';
    }

    private getSelectedIds(options: DropdownOption[], prop = 'id'): any[] | undefined {
        return options?.map(option => option[prop]);
    }

    private generateCsvFileName({timeFrame}: DownloadBudgetCsvFormData): string {
        return '';
    }

    getCsvBudgetCampaigns(): Observable<Campaign[]> {
        return of([]);
    }

    getDatesPreset(): {endDate: Date; label: string; startDate: Date}[] {
        return [];
    }

    private prepareDataForBudgetCsvDownload(data: DownloadBudgetCsvFormData): DownloadBudgetQueryParamsDTO {
        return {order: '', direction: '', startDate: new Date().toISOString(), endDate: new Date().toISOString()};
    }
}
@Injectable()
class MockConfigService {
    get PLATFORM_TYPE() {
        return {
            ANDROID: 1,
            IOS: 2
        };
    }
    getDropdownOptions(tableName: string) {
        return [];
    }
}

@Injectable()
class ApplicationServiceMock {
    getApplications(tableName: string): any[] {
        return [];
    }
}

describe('BudgetCsvComponent', () => {
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
                {provide: BudgetCsvService, useClass: BudgetCsvServiceMock},
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

    it('should change form control and emit onDownloadButtonClicked before download when click on download button', () => {
        spyOn<any>(component, 'onDownloadButtonClicked').and.callThrough();
        component['form'].get('campaigns').setValue([MOCK_CAMPAIGNS.campaigns[0]]);
        fixture.debugElement.query(By.css('.action-buttons-container fusion-button.primary')).nativeElement.click();
        fixture.detectChanges();
        expect(component['onDownloadButtonClicked']).toHaveBeenCalledTimes(1);
    });

    it('should return with value START when trigger onDownloadCsvFileStart', fakeAsync(() => {
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

    it('should change form control and data to downloadBudgetCsvStreamData service method', () => {
        spyOn<any>(component['budgetCsvService'], 'downloadBudgetCsvStreamData').and.callThrough();
        component['form'].get('campaigns').setValue([MOCK_CAMPAIGNS.campaigns[0]]);
        fixture.debugElement.query(By.css('.action-buttons-container fusion-button.primary')).nativeElement.click();
        fixture.detectChanges();
        expect(component['budgetCsvService'].downloadBudgetCsvStreamData).toHaveBeenCalledTimes(1);
    });
});
