import {TestBed} from '@angular/core/testing';
import {BudgetCsvService} from './budget-csv.service';

describe('BudgetCsvService', () => {
    let service: BudgetCsvService;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [],
            providers: []
        });
        service = TestBed.inject(BudgetCsvService);
    });

    it('should create', () => {
        expect(service).toBeTruthy();
    });
});
