import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {
    Campaign,
    DownloadBudgetCsvFormData,
    DownloadBudgetQueryParamsDTO,
    StreamFileStatus
} from '../components/budget-csv/budget-csv.entities';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/v1';
import {DatePipe} from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class BudgetCsvServiceMock {
    downloadBudgetCsvStreamData(data: any): Observable<any> {
        return of(StreamFileStatus.START);
    }
    formatDate(date: string | Date) {
        const datePipe: DatePipe = new DatePipe('en');
        return <string>datePipe.transform(date, 'yyyy-MM-dd');
    }
    getCsvBudgetCampaigns(): Observable<Campaign[]> {
        return of([]);
    }
    getDatesPreset(): {endDate: Date; label: string; startDate: Date}[] {
        return [];
    }
    private getSelectedIds(options: DropdownOption[], prop = 'id'): any[] {
        return options.map(option => option[prop]);
    }
    private generateCsvFileName({timeFrame}: DownloadBudgetCsvFormData): string {
        const {startDate, endDate} = timeFrame;
        const from = this.formatDate(startDate);
        const to = this.formatDate(endDate);
        return `csv_budget_reporter_${from}_${to}`;
    }
    private prepareDataForBudgetCsvDownload(data: DownloadBudgetCsvFormData): DownloadBudgetQueryParamsDTO {
        return {order: '', direction: '', startDate: new Date().toISOString(), endDate: new Date().toISOString()};
    }
}
@Injectable({
    providedIn: 'root'
})
export class MockConfigService {
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
@Injectable({
    providedIn: 'root'
})
export class ApplicationServiceMock {
    getApplications(tableName: string): any[] {
        return [];
    }
}
