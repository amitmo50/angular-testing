import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import {BudgetCsvComponent} from './budget-csv.component';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {delay, Observable, of} from 'rxjs';
import {BudgetCsvService} from './budget-csv.service';
import {Injectable} from '@angular/core';
import {ApplicationService} from '../../services/application/application.service';
import {ConfigService} from '../../services/config/config.service';
import {CsvFormDownloadComponent} from './components/csv-form-download/csv-form-download.component';
import {Campaign, DownloadBudgetCsvFormData, DownloadBudgetQueryParamsDTO, MOCK_CAMPAIGNS, StreamFileStatus} from './budget-csv.entities';
import {By} from '@angular/platform-browser';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/v1';
import {ButtonModule} from '@ironsource/fusion-ui/components/button';
import {Application} from '../../services/application/application.entities';

@Injectable()
class BudgetCsvServiceMock {
    downloadBudgetCsvStreamData(data: any): Observable<any> {
        return of(StreamFileStatus.START).pipe(delay(5000));
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
        return undefined;
    }

    getDatesPreset(): {endDate: Date; label: string; startDate: Date}[] {
        return undefined;
    }

    private prepareDataForBudgetCsvDownload(data: DownloadBudgetCsvFormData): DownloadBudgetQueryParamsDTO {
        return undefined;
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

    it('should return with value START when trigger onDownloadCsvFileStart', () => {
        spyOn<any>(component, 'onDownloadCsvFileStart').and.callThrough();
        spyOn<any>(window.console, 'log').and.callThrough();
        spyOn<any>(component['budgetCsvService'], 'downloadBudgetCsvStreamData').and.returnValue(of(StreamFileStatus.START));
        component['form'].get('campaigns').setValue([MOCK_CAMPAIGNS.campaigns[0]]);
        fixture.debugElement.query(By.css('.action-buttons-container fusion-button.primary')).nativeElement.click();
        fixture.detectChanges();
        expect(window.console.log).toHaveBeenCalledWith('Success download CSV!');
        expect(component['onDownloadCsvFileStart']).toHaveBeenCalledWith(StreamFileStatus.START);
    });

    it('should change form control and data to downloadBudgetCsvStreamData service method', () => {
        spyOn<any>(component['budgetCsvService'], 'downloadBudgetCsvStreamData').and.callThrough();
        component['form'].get('campaigns').setValue([MOCK_CAMPAIGNS.campaigns[0]]);
        fixture.debugElement.query(By.css('.action-buttons-container fusion-button.primary')).nativeElement.click();
        fixture.detectChanges();
        expect(component['budgetCsvService'].downloadBudgetCsvStreamData).toHaveBeenCalledTimes(1);
    });
});
