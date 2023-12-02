import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';

export const MIN_DATE = '2022-01-01';

export const DATERANGE_OPTIONS = {
    calendarAmount: 2,
    allowFutureSelection: false,
    maxDaysInSelectedRange: 120
};

export const SEARCH_BY_PROPERTIES = ['id', 'displayText'];

export interface CampaignDropdownOption extends DropdownOption {
    advertiserId: number;
    titleId: number;
    editableByDsi2?: boolean;
    technicalSuspended?: number;
}
