import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BudgetCsvComponent} from './budget-csv.component';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Observable, of} from 'rxjs';
import {BudgetCsvService} from './budget-csv.service';
import {Injectable} from '@angular/core';
import {ApplicationService} from '../../services/application/application.service';
import {ConfigService} from '../../services/config/config.service';

class BudgetCsvServiceMock {
    sendBudgetCsvEvent(event: string) {}
    downloadBudgetCsvStreamData(): Observable<any> {
        return of({});
    }
    formatDate(date: string | Date) {
        return '';
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

describe('BudgetCsvComponent', () => {
    let component: BudgetCsvComponent;
    let fixture: ComponentFixture<BudgetCsvComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BudgetCsvComponent],
            providers: [
                FormBuilder,
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {queryParams: of({})}
                    }
                },
                {provide: BudgetCsvService, useValue: BudgetCsvServiceMock},
                {provide: ApplicationService, useValue: {}},
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
});
