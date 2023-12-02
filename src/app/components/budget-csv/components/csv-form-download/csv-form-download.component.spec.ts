import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormGroup, FormGroupDirective, FormBuilder, FormControl} from '@angular/forms';
import {CsvFormDownloadComponent} from './csv-form-download.component';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {BudgetCsvService} from '../../budget-csv.service';
import {Application} from '../../../../services/application/application.entities';
import {ApplicationService} from '../../../../services/application/application.service';
import {ConfigService} from '../../../../services/config/config.service';

@Injectable()
class MockApplicationService {
    getApplications(): Observable<Application[]> {
        return of([]);
    }
}

@Injectable()
class ConfigServiceMock {
    getKey(a: any, b: any) {
        return '';
    }
    getDropdownOptions(tableName: string) {
        return [];
    }
}

@Injectable()
class BudgetCsvServiceMock {
    sendOptimizerCsvEvent() {}
    getCsvOptimizerCampaigns(): any {
        return of([]);
    }
}

describe('CsvFormDownloadComponent', () => {
    let component: CsvFormDownloadComponent;
    let fixture: ComponentFixture<CsvFormDownloadComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CsvFormDownloadComponent],
            providers: [
                FormBuilder,
                {provide: BudgetCsvService, useClass: BudgetCsvServiceMock},
                {provide: ApplicationService, useClass: MockApplicationService},
                {provide: ConfigService, useClass: ConfigServiceMock},
                {
                    provide: FormGroupDirective,
                    useValue: {
                        form: new FormGroup({
                            timeFrame: new FormControl([null]),
                            countries: new FormControl([null]),
                            titles: new FormControl([null]),
                            campaigns: new FormControl([null]),
                            platforms: new FormControl([null]),
                            active: new FormControl([null]),
                            inactive: new FormControl([null]),
                            archived: new FormControl([null])
                        })
                    }
                }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CsvFormDownloadComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
