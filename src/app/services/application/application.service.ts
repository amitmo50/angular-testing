import {Injectable} from '@angular/core';
import {Application, TITLES_MOCK} from './application.entities';
import {Observable, of} from 'rxjs';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/v1';

@Injectable({
    providedIn: 'root'
})
export class ApplicationService {
    constructor() {}

    getApplications(): Observable<(Application | DropdownOption)[]> {
        return of(TITLES_MOCK.applications);
    }
}
