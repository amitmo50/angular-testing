import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, FormGroupDirective, ReactiveFormsModule} from '@angular/forms';
import {DaterangeOptions} from '@ironsource/fusion-ui/components/daterange/entities';
import {CalendarService} from '@ironsource/fusion-ui/components/calendar';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {BehaviorSubject, defer, Observable, of, Subject} from 'rxjs';
import {DATERANGE_OPTIONS, MIN_DATE, SEARCH_BY_PROPERTIES, CampaignDropdownOption} from './csv-form-download.config';
import {catchError, map, startWith, takeUntil, tap} from 'rxjs/operators';
import {CommonModule} from '@angular/common';
import {DaterangeModule} from '@ironsource/fusion-ui/components/daterange';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {DropdownDualMultiSelectModule} from '@ironsource/fusion-ui/components/dropdown-dual-multi-select';
import {ButtonModule} from '@ironsource/fusion-ui/components/button';
import {BudgetCsvService} from '../../budget-csv.service';
import {ConfigService} from '../../../../services/config/config.service';
import {Campaign} from '../../budget-csv.entities';
import {ApplicationService} from '../../../../services/application/application.service';

@Component({
    selector: 'is-csv-form-download',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, DaterangeModule, CheckboxModule, IconModule, DropdownDualMultiSelectModule, ButtonModule],
    providers: [BudgetCsvService],
    templateUrl: './csv-form-download.component.html',
    styleUrls: ['./csv-form-download.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CsvFormDownloadComponent implements OnInit, OnDestroy {
    @Input() startDate: Date = new Date();
    @Input() endDate: Date | null = null;

    searchByProperties = SEARCH_BY_PROPERTIES;
    campaigns$!: Observable<DropdownOption[]>;
    platforms$!: Observable<DropdownOption[]>;
    campaignsLoading$ = new BehaviorSubject<boolean>(false);
    titles$!: Observable<DropdownOption[]>;
    titlesLoading$ = new BehaviorSubject<boolean>(false);
    dateLimitations!: {minStartDate: Date; minEndDate: Date};
    dateRangeOptions!: DaterangeOptions;
    formGroup!: FormGroup;

    private onDestroy$ = new Subject<void>();

    constructor(
        private parentFormContainer: FormGroupDirective,
        private calendarService: CalendarService,
        private budgetCsvService: BudgetCsvService,
        private configService: ConfigService,
        private applicationService: ApplicationService
    ) {}

    ngOnInit(): void {
        this.initConfigurations();
        this.initForm();
        this.initObservables();
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    initForm() {
        this.formGroup = this.parentFormContainer.form as FormGroup;
        // @ts-ignore
        this.formGroup?.get('timeFrame').setValue({startDate: this.startDate, endDate: this.endDate});
    }

    private initObservables() {
        this.campaigns$ = this.getCampaignListObservable();
        this.titles$ = this.getTitleListObservable();
        this.platforms$ = this.getPlatformsDropdownOptions();
    }

    private getCampaignListObservable(): Observable<DropdownOption[]> {
        return defer(() => {
            this.campaignsLoading$.next(true);
            return this.budgetCsvService.getCsvBudgetCampaigns().pipe(
                map(this.parseCampaignsData.bind(this)),
                tap(() => this.campaignsLoading$.next(false)),
                startWith([]),
                catchError(() => {
                    this.campaignsLoading$.next(false);
                    return of([]);
                })
            );
        }).pipe(takeUntil(this.onDestroy$)) as Observable<DropdownOption[]>;
    }

    private getTitleListObservable(): Observable<DropdownOption[]> {
        return defer(() => {
            this.titlesLoading$.next(true);
            return this.applicationService.getApplications().pipe(
                tap(() => this.titlesLoading$.next(false)),
                startWith([])
            );
        }) as Observable<CampaignDropdownOption[]>;
    }

    private parseCampaignsData(campaigns: Campaign[]) {
        return campaigns.map(campaign => {
            const {id, name, titleIcon, platform} = campaign;
            return {
                id: `csv_budget_${id}`,
                campaignId: id,
                displayText: name,
                image: titleIcon,
                subText: {
                    text: id
                },
                icon: platform ? this.configService.getKey('PLATFORM_TYPE', platform).toLowerCase() : null
            };
        });
    }

    private getPlatformsDropdownOptions(): Observable<DropdownOption[]> {
        return of(
            this.configService.getDropdownOptions('PLATFORM_TYPE').reduce((platforms: DropdownOption[], platform: {[key: string]: any}) => {
                if (['android', 'ios'].some(os => platform?.['name'] === os)) {
                    const {id, biDisplayName} = platform;
                    platforms.push({
                        id,
                        displayText: biDisplayName
                    });
                }
                return platforms;
            }, [])
        );
    }

    private initConfigurations() {
        this.dateRangeOptions = {...DATERANGE_OPTIONS, presets: this.budgetCsvService.getDatesPreset?.()};
        const minStartDate = this.calendarService.getDateAsUTC(new Date(MIN_DATE));
        const minEndDate = this.calendarService.getDateAsUTC(new Date(MIN_DATE));
        minEndDate.setDate(minEndDate.getDate() + 1);
        this.dateLimitations = {
            minStartDate,
            minEndDate
        };
    }
}
