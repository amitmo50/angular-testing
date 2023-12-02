import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BudgetCsvComponent} from './components/budget-csv/budget-csv.component';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BudgetCsvComponent,
        RouterModule.forRoot([]),
        SvgModule.forRoot({assetsPath: 'https://ui-demand.ssacdn.com/demand/icons'})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
