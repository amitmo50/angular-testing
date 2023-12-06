import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';

export interface DownloadBudgetCsvFormData {
    timeFrame: {startDate: Date; endDate: Date};
    active?: boolean;
    inactive?: boolean;
    archived?: boolean;
    platforms?: DropdownOption[];
    campaigns?: DropdownOption[];
    titles?: DropdownOption[];
    countries?: DropdownOption[];
}
export interface DownloadBudgetQueryParamsDTO {
    order: string;
    direction: string;
    startDate: Date | string;
    endDate: Date | string;
    active?: boolean;
    inactive?: boolean;
    archived?: boolean;
    campaigns?: number[];
    platforms?: string;
    titleIds?: number[];
}
export enum StreamFileStatus {
    START,
    ERROR,
    END
}
export interface Campaign {
    id: number;
    name?: string;
    campaignOptimizationType?: number;
    titleId?: number;
    deviceIdRequired?: boolean;
    campaignType?: number;
    flags?: any;
    active?: boolean;
    archived?: boolean;
    editable?: boolean;
    status?: string;
    statusEditable?: boolean;
    type?: number;
    paymentModel?: number;
    crossPromotionType?: DropdownOption[];
    updateCounter?: number; // not for UI
    startDate?: string | null;
    endDate?: string | null;
    timezone?: string; // will change to timezone type later
    currency?: string; // will change to currency type later
    comments?: string; // may be will use later
    adUnits?: number[];
    platform?: number;
    deviceType?: number[];
    countries?: string[]; // countries - code
    /* tracking service data */
    trackingService?: number;
    offerUrl?: string;
    impressionUrl?: string;
    /* bidding && capping */
    payout?: number;
    globalDaily?: number;
    globalTotal?: number;
    multiBid?: any[];
    creatives?: {id: number}[];
    creativeIds?: number[];
    origin?: number;
    creationDate?: string;
    dailyCapTime?: string;
    deliveryStatus?: string;
    deliveryStatusId?: number;
    deliveryStatusReason?: number;
    expirationDate?: string;
    activationDate?: string;
    titleIcon?: string;
    titleName?: string;
    editableByDsi2?: boolean;
    osVersions?: {id: number; is_latest: boolean}[];
    osLastVersion?: number;
    category_genre_id?: number;
    isSkan?: boolean;
    isSkanReady?: boolean;
    bidType?: number;
    finishCooldownOn?: string;
    userDailyCompletionsLimit?: number;
    userTotalCompletionsLimit?: number;
    minHoursBetweenCompletions?: number;
    ignoreBudgetInflight?: boolean;
    geoSets?: any[];
    budgetType?: number;
    advancedTargeting?: any;
    geoSetsCapped?: any[];
    underReview?: boolean;
    ignoreDsLearning?: boolean;
    storeId?: number;
    directUrl?: string | null;
    openInExternalBrowser?: boolean;
    activityType?: number;
    technicalSuspended?: number;
    optimizer?: {
        setupGoal: number;
        age: number;
        setupGoalPerCountry: {[country: string]: number};
        maxBidPerCountry: {[country: string]: number};
        action?: number;
        actionValue?: number;
    };
}
export const MOCK_CAMPAIGNS = {
    campaigns: [
        {
            name: 'DISC_T1_ADR_VID',
            id: 8342405,
            titleId: 549553,
            activationDate: '2020-03-12T08:41:00.000Z',
            expirationDate: null,
            creationDate: '2020-03-12T08:41:40.000Z',
            active: 0,
            archived: 0,
            dailyCapTime: '0000-00-00 00:00:00',
            origin: 5,
            updateCounter: 45,
            editableByDsi2: 1,
            globalTotal: 0,
            globalDaily: 30000,
            payout: 0.25,
            paymentModel: 1,
            deliveryStatus: 'Inactive',
            deliveryStatusId: 1,
            deliveryStatusReason: null,
            platform: 2,
            titleIcon: 'https://platform.ssacdn.com/demand-creatives/icons/icon_5a6520b58a4c2838f1d13ffe7450dffc_transformed_800459.jpeg'
        },
        {
            name: 'DISC_US_ADR_PLA',
            id: 8342309,
            titleId: 549553,
            activationDate: '2020-03-11T20:40:00.000Z',
            expirationDate: null,
            creationDate: '2020-03-11T20:40:47.000Z',
            active: 0,
            archived: 0,
            dailyCapTime: '0000-00-00 00:00:00',
            origin: 5,
            updateCounter: 35,
            editableByDsi2: 1,
            globalTotal: 0,
            globalDaily: 40000,
            payout: 1,
            paymentModel: 1,
            deliveryStatus: 'Inactive',
            deliveryStatusId: 1,
            deliveryStatusReason: null,
            platform: 2,
            titleIcon: 'https://platform.ssacdn.com/demand-creatives/icons/icon_5a6520b58a4c2838f1d13ffe7450dffc_transformed_800459.jpeg'
        },
        {
            name: 'DISC_US_ADR_VID',
            id: 8342285,
            titleId: 549553,
            activationDate: '2020-03-11T17:44:00.000Z',
            expirationDate: null,
            creationDate: '2020-03-11T17:44:30.000Z',
            active: 0,
            archived: 0,
            dailyCapTime: '0000-00-00 00:00:00',
            origin: 5,
            updateCounter: 81,
            editableByDsi2: 1,
            globalTotal: 0,
            globalDaily: 40000,
            payout: 1,
            paymentModel: 1,
            deliveryStatus: 'Inactive',
            deliveryStatusId: 1,
            deliveryStatusReason: null,
            platform: 2,
            titleIcon: 'https://platform.ssacdn.com/demand-creatives/icons/icon_5a6520b58a4c2838f1d13ffe7450dffc_transformed_800459.jpeg'
        },
        {
            name: 'DISC_US_IOS_VID',
            id: 8341917,
            titleId: 548771,
            activationDate: '2020-03-10T09:23:00.000Z',
            expirationDate: null,
            creationDate: '2020-03-10T09:23:44.000Z',
            active: 0,
            archived: 0,
            dailyCapTime: '0000-00-00 00:00:00',
            origin: 5,
            updateCounter: 88,
            editableByDsi2: 1,
            globalTotal: 0,
            globalDaily: 100000,
            payout: 0.7,
            paymentModel: 1,
            deliveryStatus: 'Inactive',
            deliveryStatusId: 1,
            deliveryStatusReason: null,
            platform: 1,
            titleIcon: 'https://platform.ssacdn.com/demand-creatives/icons/icon_9868eb4a4c7017b193d5498b526da565_45296.jpeg'
        },
        {
            name: 'SORT_US_IOS_VID (RV)',
            id: 8339815,
            titleId: 540651,
            activationDate: '2020-03-03T11:03:00.000Z',
            expirationDate: null,
            creationDate: '2020-03-03T11:03:15.000Z',
            active: 0,
            archived: 0,
            dailyCapTime: null,
            origin: 5,
            updateCounter: 10,
            editableByDsi2: 1,
            globalTotal: 0,
            globalDaily: 5000,
            payout: 0.8,
            paymentModel: 1,
            deliveryStatus: 'Inactive',
            deliveryStatusId: 1,
            deliveryStatusReason: null,
            platform: 1,
            titleIcon: 'https://platform.ssacdn.com/demand-creatives/icons/icon_6f835d8754f88128dd168b59613b8055_39477.jpeg'
        },
        {
            name: 'SORT_US_ADR_VID (high)',
            id: 8339161,
            titleId: 540687,
            activationDate: '2020-02-09T21:14:00.000Z',
            expirationDate: null,
            creationDate: '2020-02-27T17:00:38.000Z',
            active: 0,
            archived: 0,
            dailyCapTime: null,
            origin: 5,
            updateCounter: 17,
            editableByDsi2: 1,
            globalTotal: 0,
            globalDaily: 50000,
            payout: 0.71,
            paymentModel: 1,
            deliveryStatus: 'Inactive',
            deliveryStatusId: 1,
            deliveryStatusReason: null,
            platform: 2,
            titleIcon: 'https://platform.ssacdn.com/demand-creatives/icons/icon_42b0d98f24aac2b4bb8c417ee0225edc_transformed_187142.jpeg'
        },
        {
            name: 'SORT_US_ADR_VID (mid)',
            id: 8339157,
            titleId: 540687,
            activationDate: '2020-02-09T21:14:00.000Z',
            expirationDate: null,
            creationDate: '2020-02-27T16:59:05.000Z',
            active: 0,
            archived: 0,
            dailyCapTime: null,
            origin: 5,
            updateCounter: 24,
            editableByDsi2: 1,
            globalTotal: 0,
            globalDaily: 50000,
            payout: 0.74,
            paymentModel: 1,
            deliveryStatus: 'Inactive',
            deliveryStatusId: 1,
            deliveryStatusReason: null,
            platform: 2,
            titleIcon: 'https://platform.ssacdn.com/demand-creatives/icons/icon_42b0d98f24aac2b4bb8c417ee0225edc_transformed_187142.jpeg'
        },
        {
            name: 'SORT_US_IOS_VID (low)',
            id: 8339151,
            titleId: 540651,
            activationDate: '2020-02-05T22:54:00.000Z',
            expirationDate: null,
            creationDate: '2020-02-27T16:50:50.000Z',
            active: 0,
            archived: 0,
            dailyCapTime: null,
            origin: 5,
            updateCounter: 24,
            editableByDsi2: 1,
            globalTotal: 0,
            globalDaily: 100000,
            payout: 0.65,
            paymentModel: 1,
            deliveryStatus: 'Inactive',
            deliveryStatusId: 1,
            deliveryStatusReason: null,
            platform: 1,
            titleIcon: 'https://platform.ssacdn.com/demand-creatives/icons/icon_6f835d8754f88128dd168b59613b8055_39477.jpeg'
        },
        {
            name: 'SORT_US_IOS_VID (high)',
            id: 8339149,
            titleId: 540651,
            activationDate: '2020-02-05T22:54:00.000Z',
            expirationDate: null,
            creationDate: '2020-02-27T16:30:50.000Z',
            active: 0,
            archived: 0,
            dailyCapTime: null,
            origin: 5,
            updateCounter: 41,
            editableByDsi2: 1,
            globalTotal: 0,
            globalDaily: 100000,
            payout: 0.9,
            paymentModel: 1,
            deliveryStatus: 'Inactive',
            deliveryStatusId: 1,
            deliveryStatusReason: null,
            platform: 1,
            titleIcon: 'https://platform.ssacdn.com/demand-creatives/icons/icon_6f835d8754f88128dd168b59613b8055_39477.jpeg'
        },
        {
            name: 'SORT_WW_ADR_VID',
            id: 8335999,
            titleId: 540687,
            activationDate: '2022-10-12T09:04:59.000Z',
            expirationDate: null,
            creationDate: '2020-02-10T08:44:30.000Z',
            active: 0,
            archived: 0,
            dailyCapTime: '0000-00-00 00:00:00',
            origin: 5,
            updateCounter: 79,
            editableByDsi2: 1,
            globalTotal: 0,
            globalDaily: 5000,
            payout: 0.01,
            paymentModel: 1,
            deliveryStatus: 'Inactive',
            deliveryStatusId: 1,
            deliveryStatusReason: null,
            platform: 2,
            titleIcon: 'https://platform.ssacdn.com/demand-creatives/icons/icon_42b0d98f24aac2b4bb8c417ee0225edc_transformed_187142.jpeg'
        },
        {
            name: 'SORT_US_ADR_PLA',
            id: 8335993,
            titleId: 540687,
            activationDate: '2022-10-12T09:19:24.000Z',
            expirationDate: null,
            creationDate: '2020-02-10T08:40:09.000Z',
            active: 0,
            archived: 0,
            dailyCapTime: '0000-00-00 00:00:00',
            origin: 5,
            updateCounter: 101,
            editableByDsi2: 1,
            globalTotal: 0,
            globalDaily: 5000,
            payout: 0.45,
            paymentModel: 1,
            deliveryStatus: 'Inactive',
            deliveryStatusId: 1,
            deliveryStatusReason: null,
            platform: 2,
            titleIcon: 'https://platform.ssacdn.com/demand-creatives/icons/icon_42b0d98f24aac2b4bb8c417ee0225edc_transformed_187142.jpeg'
        },
        {
            name: 'SORT_T1_ADR_VID',
            id: 8335991,
            titleId: 540687,
            activationDate: '2023-01-03T17:06:12.000Z',
            expirationDate: null,
            creationDate: '2020-02-10T08:39:12.000Z',
            active: 0,
            archived: 0,
            dailyCapTime: '2023-02-19T19:02:26.000Z',
            origin: 5,
            updateCounter: 106,
            editableByDsi2: 1,
            globalTotal: 0,
            globalDaily: 100,
            payout: 0.33,
            paymentModel: 1,
            deliveryStatus: 'Inactive',
            deliveryStatusId: 1,
            deliveryStatusReason: null,
            platform: 2,
            titleIcon: 'https://platform.ssacdn.com/demand-creatives/icons/icon_42b0d98f24aac2b4bb8c417ee0225edc_transformed_187142.jpeg'
        },
        {
            name: 'SORT_US_ADR_VID (low)',
            id: 8335911,
            titleId: 540687,
            activationDate: '2020-02-09T21:14:00.000Z',
            expirationDate: null,
            creationDate: '2020-02-09T21:14:22.000Z',
            active: 0,
            archived: 0,
            dailyCapTime: '0000-00-00 00:00:00',
            origin: 5,
            updateCounter: 85,
            editableByDsi2: 1,
            globalTotal: 0,
            globalDaily: 50000,
            payout: 0.01,
            paymentModel: 1,
            deliveryStatus: 'Inactive',
            deliveryStatusId: 1,
            deliveryStatusReason: null,
            platform: 2,
            titleIcon: 'https://platform.ssacdn.com/demand-creatives/icons/icon_42b0d98f24aac2b4bb8c417ee0225edc_transformed_187142.jpeg'
        },
        {
            name: 'Copy of Sort It 3D- Android - US - Video',
            id: 8335909,
            titleId: 540687,
            activationDate: '2020-02-09T20:01:00.000Z',
            expirationDate: null,
            creationDate: '2020-02-09T20:57:45.000Z',
            active: 0,
            archived: 0,
            dailyCapTime: null,
            origin: 5,
            updateCounter: 4,
            editableByDsi2: 1,
            globalTotal: 0,
            globalDaily: 1000,
            payout: 0.6,
            paymentModel: 1,
            deliveryStatus: 'Inactive',
            deliveryStatusId: 1,
            deliveryStatusReason: null,
            platform: 2,
            titleIcon: 'https://platform.ssacdn.com/demand-creatives/icons/icon_42b0d98f24aac2b4bb8c417ee0225edc_transformed_187142.jpeg'
        },
        {
            name: 'Sort It 3D- Android - US - Video',
            id: 8335907,
            titleId: 540687,
            activationDate: '2020-02-09T20:01:00.000Z',
            expirationDate: null,
            creationDate: '2020-02-09T20:01:56.000Z',
            active: 0,
            archived: 0,
            dailyCapTime: null,
            origin: 5,
            updateCounter: 6,
            editableByDsi2: 1,
            globalTotal: 0,
            globalDaily: 1000,
            payout: 0.6,
            paymentModel: 1,
            deliveryStatus: 'Inactive',
            deliveryStatusId: 1,
            deliveryStatusReason: null,
            platform: 2,
            titleIcon: 'https://platform.ssacdn.com/demand-creatives/icons/icon_42b0d98f24aac2b4bb8c417ee0225edc_transformed_187142.jpeg'
        },
        {
            name: 'SORT_WW_IOS_VID',
            id: 8335649,
            titleId: 540651,
            activationDate: '2020-02-06T16:53:00.000Z',
            expirationDate: null,
            creationDate: '2020-02-06T16:53:58.000Z',
            active: 0,
            archived: 0,
            dailyCapTime: '0000-00-00 00:00:00',
            origin: 5,
            updateCounter: 32,
            editableByDsi2: 1,
            globalTotal: 0,
            globalDaily: 10000,
            payout: 0.12,
            paymentModel: 1,
            deliveryStatus: 'Inactive',
            deliveryStatusId: 1,
            deliveryStatusReason: null,
            platform: 1,
            titleIcon: 'https://platform.ssacdn.com/demand-creatives/icons/icon_6f835d8754f88128dd168b59613b8055_39477.jpeg'
        },
        {
            name: 'SORT_T1_IOS_VID',
            id: 8335647,
            titleId: 540651,
            activationDate: '2020-02-06T16:42:00.000Z',
            expirationDate: null,
            creationDate: '2020-02-06T16:42:44.000Z',
            active: 0,
            archived: 0,
            dailyCapTime: '0000-00-00 00:00:00',
            origin: 5,
            updateCounter: 61,
            editableByDsi2: 1,
            globalTotal: 0,
            globalDaily: 50000,
            payout: 0.01,
            paymentModel: 1,
            deliveryStatus: 'Inactive',
            deliveryStatusId: 1,
            deliveryStatusReason: null,
            platform: 1,
            titleIcon: 'https://platform.ssacdn.com/demand-creatives/icons/icon_6f835d8754f88128dd168b59613b8055_39477.jpeg'
        },
        {
            name: 'SORT_US_IOS_VID (mid)',
            id: 8335537,
            titleId: 540651,
            activationDate: '2020-02-05T22:54:00.000Z',
            expirationDate: null,
            creationDate: '2020-02-05T22:54:58.000Z',
            active: 0,
            archived: 0,
            dailyCapTime: '0000-00-00 00:00:00',
            origin: 5,
            updateCounter: 149,
            editableByDsi2: 1,
            globalTotal: 0,
            globalDaily: 100000,
            payout: 0.01,
            paymentModel: 1,
            deliveryStatus: 'Inactive',
            deliveryStatusId: 1,
            deliveryStatusReason: null,
            platform: 1,
            titleIcon: 'https://platform.ssacdn.com/demand-creatives/icons/icon_6f835d8754f88128dd168b59613b8055_39477.jpeg'
        },
        {
            name: 'Sort It - iOS - US - Video',
            id: 8335521,
            titleId: 540651,
            activationDate: '2020-02-05T00:00:00.000Z',
            expirationDate: null,
            creationDate: '2020-02-05T19:11:31.000Z',
            active: 0,
            archived: 0,
            dailyCapTime: null,
            origin: 5,
            updateCounter: 26,
            editableByDsi2: 1,
            globalTotal: 0,
            globalDaily: 1000,
            payout: 1.5,
            paymentModel: 1,
            deliveryStatus: 'Inactive',
            deliveryStatusId: 1,
            deliveryStatusReason: null,
            platform: 1,
            titleIcon: 'https://platform.ssacdn.com/demand-creatives/icons/icon_6f835d8754f88128dd168b59613b8055_39477.jpeg'
        },
        {
            name: 'SORT_US_IOS_PLA',
            id: 8335427,
            titleId: 540651,
            activationDate: '2022-10-12T09:19:04.000Z',
            expirationDate: null,
            creationDate: '2020-02-05T14:46:04.000Z',
            active: 0,
            archived: 0,
            dailyCapTime: '0000-00-00 00:00:00',
            origin: 5,
            updateCounter: 132,
            editableByDsi2: 1,
            globalTotal: 0,
            globalDaily: 5000,
            payout: 0.45,
            paymentModel: 1,
            deliveryStatus: 'Inactive',
            deliveryStatusId: 1,
            deliveryStatusReason: null,
            platform: 1,
            titleIcon: 'https://platform.ssacdn.com/demand-creatives/icons/icon_6f835d8754f88128dd168b59613b8055_39477.jpeg'
        }
    ]
};
