import {ChangeDetectionStrategy, Component, EventEmitter, inject, OnDestroy, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {BehaviorSubject, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ButtonModule} from '@ironsource/fusion-ui/components/button';
import {BudgetCsvService} from './budget-csv.service';
import {CsvFormDownloadComponent} from './components/csv-form-download/csv-form-download.component';
import {StreamFileStatus} from './budget-csv.entities';

@Component({
    selector: 'is-budget-csv',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, ButtonModule, CsvFormDownloadComponent],
    providers: [BudgetCsvService],
    templateUrl: './budget-csv.component.html',
    styleUrls: ['./budget-csv.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetCsvComponent implements OnInit, OnDestroy {
    startDate!: Date;
    endDate!: Date;
    returnTo!: string;
    form!: FormGroup;
    loading$ = new BehaviorSubject<boolean>(false);

    private formBuilder = inject(FormBuilder);
    private activatedRoute = inject(ActivatedRoute);
    private budgetCsvService = inject(BudgetCsvService);
    private onDestroy$ = new Subject<void>();

    ngOnInit(): void {
        this.initConfigurations();
        this.form = this.generateFromGroup();
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    onSubmit() {
        this.loading$.next(true);
        this.onDownloadButtonClicked();
    }

    onCancel() {
        console.log('Cancel and Redirect');
    }

    private onDownloadButtonClicked() {
        const data = {...this.form.value};
        this.loading$.next(true);
        this.budgetCsvService
            .downloadBudgetCsvStreamData(data)
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(this.onDownloadCsvFileStart.bind(this), this.onErrorCsvDownload.bind(this));
    }

    private onDownloadCsvFileStart({status}: {status: StreamFileStatus}) {
        if (status === StreamFileStatus.START) {
            this.loading$.next(false);
            console.log('Success download CSV!');
        }
    }

    private onErrorCsvDownload(error: Error) {
        this.loading$.next(false);
        console.error('Download CSV error: ', error);
    }

    private initConfigurations() {
        const {queryParams} = this.activatedRoute.snapshot;
        const {startDate, endDate, returnTo} =
            queryParams?.['startDate'] && queryParams?.['endDate'] ? queryParams : this.getDefaultDateRangeValues();
        this.returnTo = returnTo;
        this.startDate = startDate ? new Date(startDate) : this.startDate;
        this.endDate = endDate ? new Date(endDate) : this.endDate;
    }

    private getDefaultDateRangeValues(): {startDate: string; endDate: string} {
        const today = new Date();
        let before = new Date();
        before.setDate(today.getDate() - 30);
        return {startDate: this.budgetCsvService.formatDate?.(before), endDate: this.budgetCsvService.formatDate?.(today)};
    }

    private generateFromGroup(): FormGroup {
        return this.formBuilder.group({
            timeFrame: [null],
            countries: [null],
            titles: [null],
            campaigns: [null],
            platforms: [null],
            active: [false],
            inactive: [false],
            archived: [false]
        });
    }
}
