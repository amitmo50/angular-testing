import {Injectable} from '@angular/core';
import {DatePipe} from '@angular/common';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {delay, Observable, of} from 'rxjs';
import {Campaign, DownloadBudgetCsvFormData, DownloadBudgetQueryParamsDTO, MOCK_CAMPAIGNS, StreamFileStatus} from './budget-csv.entities';
import {DEFUALT_REQUEST_BODY_FIELDS} from './budget-csv.config';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BudgetCsvService {
    constructor() {}

    getCsvBudgetCampaigns(): Observable<Campaign[]> {
        return of(MOCK_CAMPAIGNS).pipe(
            delay(3000),
            map((data: any) => (Array.isArray(data.campaigns) ? data.campaigns : []))
        );
    }

    downloadBudgetCsvStreamData(data: DownloadBudgetCsvFormData): Observable<any> {
        // const preparedData = this.prepareDataForBudgetCsvDownload(data);
        // const fileName = this.generateCsvFileName(data);
        return of(StreamFileStatus.START).pipe(delay(5000));
    }

    formatDate(date: Date): string {
        const datePipe: DatePipe = new DatePipe('en');
        return <string>datePipe.transform(date, 'yyyy-MM-dd');
    }

    getDatesPreset() {
        const d = new Date();
        const now = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
        return [
            {
                label: 'Last 7 days',
                endDate: now,
                startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 6)
            },
            {
                label: 'Last 14 days',
                endDate: now,
                startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 13)
            },
            {
                label: 'Last 30 days',
                endDate: now,
                startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 29)
            },
            {
                label: 'Last 60 days',
                endDate: now,
                startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 59)
            },
            {
                label: 'Last 90 days',
                endDate: now,
                startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 89)
            },
            {
                label: 'Last 120 days',
                endDate: now,
                startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 119)
            }
        ];
    }

    private generateCsvFileName({timeFrame}: DownloadBudgetCsvFormData) {
        const {startDate, endDate} = timeFrame;
        const from = this.formatDate(startDate);
        const to = this.formatDate(endDate);
        return `csv_budget_reporter_${from}_${to}`;
    }

    private prepareDataForBudgetCsvDownload(data: DownloadBudgetCsvFormData): DownloadBudgetQueryParamsDTO {
        const startDate = this.formatDate(data.timeFrame.startDate);
        const endDate = this.formatDate(data.timeFrame.endDate);
        const campaigns = this.getSelectedIds(data.campaigns as DropdownOption[], 'campaignId');
        const titleIds = this.getSelectedIds(data.titles as DropdownOption[]);
        const countries = this.getSelectedIds(data.countries as DropdownOption[]);
        const platforms = this.getSelectedIds(data.platforms as DropdownOption[]);
        const active = data.active ? (data.inactive ? null : true) : data.inactive ? false : null;
        const archived = data.archived ? (!data.active || !data.inactive ? true : null) : data.archived;
        return {
            ...DEFUALT_REQUEST_BODY_FIELDS,
            startDate,
            endDate,
            ...(archived != null ? {archived} : null),
            ...(campaigns?.length ? {campaignIds: campaigns} : null),
            ...(platforms?.length === 1 ? {platforms: platforms.toString()} : null),
            ...(titleIds?.length ? {titleIds} : null),
            ...(countries?.length ? {country: countries} : null),
            ...(active != null ? {active} : null)
        };
    }

    private getSelectedIds(options: DropdownOption[], prop = 'id'): any[] | undefined {
        return options?.map(option => option[prop]);
    }
}
