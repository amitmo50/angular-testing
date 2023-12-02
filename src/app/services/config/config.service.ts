import {inject, Injectable} from '@angular/core';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/v1';
import {CapitalizePipe} from '@ironsource/fusion-ui/pipes/string';
import {isObject, isNullOrUndefined} from '@ironsource/fusion-core/utils';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    private _config = {
        PLATFORM_TYPE: {
            UNKNOWN: {
                ID: 0,
                SUPPLY_APPLICATION_ID: 0,
                BI_DISPLAY_NAME: 'Unknown',
                NAME: 'unknown'
            },
            IOS: {
                ID: 1,
                SUPPLY_APPLICATION_ID: 2,
                BI_DISPLAY_NAME: 'iOS',
                NAME: 'ios'
            },
            ANDROID: {
                ID: 2,
                SUPPLY_APPLICATION_ID: 3,
                BI_DISPLAY_NAME: 'Android',
                NAME: 'android'
            }
        },
        COUNTRIES: {
            AD: {
                TITLE: 'Andorra',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            AE: {
                TITLE: 'United Arab Emirates',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            AF: {
                TITLE: 'Afghanistan',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            AG: {
                TITLE: 'Antigua and Barbuda',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            AI: {
                TITLE: 'Anguilla',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            AL: {
                TITLE: 'Albania',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            AM: {
                TITLE: 'Armenia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            AO: {
                TITLE: 'Angola',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            AQ: {
                TITLE: 'Antarctica',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            AR: {
                TITLE: 'Argentina',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            AS: {
                TITLE: 'American Samoa',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            AT: {
                TITLE: 'Austria',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 1'
            },
            AU: {
                TITLE: 'Australia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 1'
            },
            AW: {
                TITLE: 'Aruba',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            AX: {
                TITLE: 'Aland Islands',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            AZ: {
                TITLE: 'Azerbaijan',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            BA: {
                TITLE: 'Bosnia and Herzegovina',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            BB: {
                TITLE: 'Barbados',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            BD: {
                TITLE: 'Bangladesh',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            BE: {
                TITLE: 'Belgium',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            BF: {
                TITLE: 'Burkina Faso',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            BG: {
                TITLE: 'Bulgaria',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            BH: {
                TITLE: 'Bahrain',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            BI: {
                TITLE: 'Burundi',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            BJ: {
                TITLE: 'Benin',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            BL: {
                TITLE: 'Saint Barthelemy',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            BM: {
                TITLE: 'Bermuda',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            BN: {
                TITLE: 'Brunei Darussalam',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            BO: {
                TITLE: 'Bolivia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            BQ: {
                TITLE: 'Caribbean Netherlands',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            BR: {
                TITLE: 'Brazil',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            BS: {
                TITLE: 'Bahamas',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            BT: {
                TITLE: 'Bhutan',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            BV: {
                TITLE: 'Bouvet Island',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            BW: {
                TITLE: 'Botswana',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            BY: {
                TITLE: 'Belarus',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            BZ: {
                TITLE: 'Belize',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            CA: {
                TITLE: 'Canada',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 1'
            },
            CC: {
                TITLE: 'Cocos (Keeling) Islands',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            CD: {
                TITLE: 'Congo, The Democratic Republic of the',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            CF: {
                TITLE: 'Central African Republic',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            CG: {
                TITLE: 'Congo',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            CH: {
                TITLE: 'Switzerland',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 1'
            },
            CI: {
                TITLE: "Cote D'Ivoire",
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            CK: {
                TITLE: 'Cook Islands',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            CL: {
                TITLE: 'Chile',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            CM: {
                TITLE: 'Cameroon',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            CN: {
                TITLE: 'China',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            CO: {
                TITLE: 'Colombia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            CR: {
                TITLE: 'Costa Rica',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            CV: {
                TITLE: 'Cape Verde',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            CW: {
                TITLE: 'Curacao',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            CX: {
                TITLE: 'Christmas Island',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            CY: {
                TITLE: 'Cyprus',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            CZ: {
                TITLE: 'Czech Republic',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            DE: {
                TITLE: 'Germany',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 1'
            },
            DJ: {
                TITLE: 'Djibouti',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            DK: {
                TITLE: 'Denmark',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 1'
            },
            DM: {
                TITLE: 'Dominica',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            DO: {
                TITLE: 'Dominican Republic',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            DZ: {
                TITLE: 'Algeria',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            EC: {
                TITLE: 'Ecuador',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            EE: {
                TITLE: 'Estonia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            EG: {
                TITLE: 'Egypt',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            EH: {
                TITLE: 'Western Sahara',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            ER: {
                TITLE: 'Eritrea',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            ES: {
                TITLE: 'Spain',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            ET: {
                TITLE: 'Ethiopia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            FI: {
                TITLE: 'Finland',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            FJ: {
                TITLE: 'Fiji',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            FK: {
                TITLE: 'Falkland Islands (Malvinas)',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            FM: {
                TITLE: 'Micronesia, Federated States of',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            FO: {
                TITLE: 'Faroe Islands',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            FR: {
                TITLE: 'France',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 1'
            },
            GA: {
                TITLE: 'Gabon',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            GB: {
                TITLE: 'United Kingdom',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 1'
            },
            GD: {
                TITLE: 'Grenada',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            GE: {
                TITLE: 'Georgia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            GF: {
                TITLE: 'French Guiana',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            GG: {
                TITLE: 'Guernsey',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            GH: {
                TITLE: 'Ghana',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            GI: {
                TITLE: 'Gibraltar',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            GL: {
                TITLE: 'Greenland',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            GM: {
                TITLE: 'Gambia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            GN: {
                TITLE: 'Guinea',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            GP: {
                TITLE: 'Guadeloupe',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            GQ: {
                TITLE: 'Equatorial Guinea',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            GR: {
                TITLE: 'Greece',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            GS: {
                TITLE: 'South Georgia and the South Sandwich Islands',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            GT: {
                TITLE: 'Guatemala',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            GU: {
                TITLE: 'Guam',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            GW: {
                TITLE: 'Guinea-Bissau',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            GY: {
                TITLE: 'Guyana',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            HK: {
                TITLE: 'Hong Kong',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            HM: {
                TITLE: 'Heard Island and McDonald Islands',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            HN: {
                TITLE: 'Honduras',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            HR: {
                TITLE: 'Croatia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            HT: {
                TITLE: 'Haiti',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            HU: {
                TITLE: 'Hungary',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            ID: {
                TITLE: 'Indonesia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            IE: {
                TITLE: 'Ireland',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            IL: {
                TITLE: 'Israel',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            IM: {
                TITLE: 'Isle of Man',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            IN: {
                TITLE: 'India',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            IO: {
                TITLE: 'British Indian Ocean Territory',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            IQ: {
                TITLE: 'Iraq',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            IS: {
                TITLE: 'Iceland',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            IT: {
                TITLE: 'Italy',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            JE: {
                TITLE: 'Jersey',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            JM: {
                TITLE: 'Jamaica',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            JO: {
                TITLE: 'Jordan',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            JP: {
                TITLE: 'Japan',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 1'
            },
            KE: {
                TITLE: 'Kenya',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            KG: {
                TITLE: 'Kyrgyzstan',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            KH: {
                TITLE: 'Cambodia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            KI: {
                TITLE: 'Kiribati',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            KM: {
                TITLE: 'Comoros',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            KN: {
                TITLE: 'Saint Kitts and Nevis',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            KR: {
                TITLE: 'Korea, Republic of',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 1'
            },
            KW: {
                TITLE: 'Kuwait',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            KY: {
                TITLE: 'Cayman Islands',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            KZ: {
                TITLE: 'Kazakhstan',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            LA: {
                TITLE: "Lao People's Democratic Republic",
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            LC: {
                TITLE: 'Saint Lucia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            LI: {
                TITLE: 'Liechtenstein',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            LK: {
                TITLE: 'Sri Lanka',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            LR: {
                TITLE: 'Liberia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            LS: {
                TITLE: 'Lesotho',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            LT: {
                TITLE: 'Lithuania',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            LU: {
                TITLE: 'Luxembourg',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            LV: {
                TITLE: 'Latvia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            LY: {
                TITLE: 'Libya',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            MA: {
                TITLE: 'Morocco',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            MC: {
                TITLE: 'Monaco',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            MD: {
                TITLE: 'Moldova, Republic of',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            ME: {
                TITLE: 'Montenegro',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            MF: {
                TITLE: 'Saint Martin',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            MG: {
                TITLE: 'Madagascar',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            MH: {
                TITLE: 'Marshall Islands',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            MK: {
                TITLE: 'Macedonia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            ML: {
                TITLE: 'Mali',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            MM: {
                TITLE: 'Myanmar',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            MN: {
                TITLE: 'Mongolia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            MO: {
                TITLE: 'Macau',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            MP: {
                TITLE: 'Northern Mariana Islands',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            MQ: {
                TITLE: 'Martinique',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            MR: {
                TITLE: 'Mauritania',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            MS: {
                TITLE: 'Montserrat',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            MT: {
                TITLE: 'Malta',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            MU: {
                TITLE: 'Mauritius',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            MV: {
                TITLE: 'Maldives',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            MW: {
                TITLE: 'Malawi',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            MX: {
                TITLE: 'Mexico',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            MY: {
                TITLE: 'Malaysia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            MZ: {
                TITLE: 'Mozambique',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            NA: {
                TITLE: 'Namibia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            NC: {
                TITLE: 'New Caledonia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            NE: {
                TITLE: 'Niger',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            NF: {
                TITLE: 'Norfolk Island',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            NG: {
                TITLE: 'Nigeria',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            NI: {
                TITLE: 'Nicaragua',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            NL: {
                TITLE: 'Netherlands',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            NO: {
                TITLE: 'Norway',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 1'
            },
            NP: {
                TITLE: 'Nepal',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            NR: {
                TITLE: 'Nauru',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            NU: {
                TITLE: 'Niue',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            NZ: {
                TITLE: 'New Zealand',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 1'
            },
            OM: {
                TITLE: 'Oman',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            PA: {
                TITLE: 'Panama',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            PE: {
                TITLE: 'Peru',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            PF: {
                TITLE: 'French Polynesia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            PG: {
                TITLE: 'Papua New Guinea',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            PH: {
                TITLE: 'Philippines',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            PK: {
                TITLE: 'Pakistan',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            PL: {
                TITLE: 'Poland',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            PM: {
                TITLE: 'Saint Pierre and Miquelon',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            PN: {
                TITLE: 'Pitcairn',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            PR: {
                TITLE: 'Puerto Rico',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            PS: {
                TITLE: 'Palestine, State of',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            PT: {
                TITLE: 'Portugal',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            PW: {
                TITLE: 'Palau',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            PY: {
                TITLE: 'Paraguay',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            QA: {
                TITLE: 'Qatar',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            RE: {
                TITLE: 'Reunion',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            RO: {
                TITLE: 'Romania',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            RS: {
                TITLE: 'Serbia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            RU: {
                TITLE: 'Russian Federation',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            RW: {
                TITLE: 'Rwanda',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            SA: {
                TITLE: 'Saudi Arabia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            SB: {
                TITLE: 'Solomon Islands',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            SC: {
                TITLE: 'Seychelles',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            SE: {
                TITLE: 'Sweden',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 1'
            },
            SG: {
                TITLE: 'Singapore',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            SH: {
                TITLE: 'Saint Helena',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            SI: {
                TITLE: 'Slovenia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            SJ: {
                TITLE: 'Svalbard and Jan Mayen',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            SK: {
                TITLE: 'Slovakia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            SL: {
                TITLE: 'Sierra Leone',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            SM: {
                TITLE: 'San Marino',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            SN: {
                TITLE: 'Senegal',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            SO: {
                TITLE: 'Somalia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            SR: {
                TITLE: 'Suriname',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            SS: {
                TITLE: 'South Sudan',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            ST: {
                TITLE: 'Sao Tome and Principe',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            SV: {
                TITLE: 'El Salvador',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            SX: {
                TITLE: 'Sint Maarten',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            SZ: {
                TITLE: 'Swaziland',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            TC: {
                TITLE: 'Turks and Caicos Islands',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            TD: {
                TITLE: 'Chad',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            TF: {
                TITLE: 'French Southern Territories',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            TG: {
                TITLE: 'Togo',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            TH: {
                TITLE: 'Thailand',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            TJ: {
                TITLE: 'Tajikistan',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            TK: {
                TITLE: 'Tokelau',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            TL: {
                TITLE: 'East Timor',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            TM: {
                TITLE: 'Turkmenistan',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            TN: {
                TITLE: 'Tunisia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            TO: {
                TITLE: 'Tonga',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            TR: {
                TITLE: 'Turkey',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            TT: {
                TITLE: 'Trinidad and Tobago',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            TV: {
                TITLE: 'Tuvalu',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            TW: {
                TITLE: 'Taiwan',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 1'
            },
            TZ: {
                TITLE: 'Tanzania, United Republic of',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            UA: {
                TITLE: 'Ukraine',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            UG: {
                TITLE: 'Uganda',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            UM: {
                TITLE: 'United States Minor Outlying Islands',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            US: {
                TITLE: 'United States',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 1'
            },
            UY: {
                TITLE: 'Uruguay',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            UZ: {
                TITLE: 'Uzbekistan',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            VA: {
                TITLE: 'Holy See (Vatican City State)',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            VC: {
                TITLE: 'Saint Vincent and the Grenadines',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            VE: {
                TITLE: 'Venezuela',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            VG: {
                TITLE: 'Virgin Islands, British',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            VI: {
                TITLE: 'Virgin Islands, U.S.',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            VN: {
                TITLE: 'Vietnam',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 3'
            },
            VU: {
                TITLE: 'Vanuatu',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            WF: {
                TITLE: 'Wallis and Futuna',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            WS: {
                TITLE: 'Samoa',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            XK: {
                TITLE: 'Kosovo',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            YE: {
                TITLE: 'Yemen',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            YT: {
                TITLE: 'Mayotte',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            ZA: {
                TITLE: 'South Africa',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 2'
            },
            ZM: {
                TITLE: 'Zambia',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            },
            ZW: {
                TITLE: 'Zimbabwe',
                AVAILABLE_ON_IOS: 1,
                AVAILABLE_ON_ANDROID: 1,
                COUNTRY_GROUP: 'Tier 4'
            }
        },
        REGIONS: {
            '1252881': {
                TITLE: 'West Bengal',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1253626': {
                TITLE: 'Uttar Pradesh',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1254169': {
                TITLE: 'Tripura',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1254788': {
                TITLE: 'Telangana',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1255053': {
                TITLE: 'Tamil Nadu',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1256312': {
                TITLE: 'Sikkim',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1258899': {
                TITLE: 'Rajasthan',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1259223': {
                TITLE: 'Punjab',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1259424': {
                TITLE: 'Puducherry',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1261029': {
                TITLE: 'Odisha',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1262271': {
                TITLE: 'Nagaland',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1262963': {
                TITLE: 'Mizoram',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1263207': {
                TITLE: 'Meghalaya',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1263706': {
                TITLE: 'Manipur',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1264418': {
                TITLE: 'Maharashtra',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1264542': {
                TITLE: 'Madhya Pradesh',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1265206': {
                TITLE: 'Lakshadweep',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1267254': {
                TITLE: 'Kerala',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1267701': {
                TITLE: 'Karnataka',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1269320': {
                TITLE: 'Jammu and Kashmir',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1270101': {
                TITLE: 'Himachal Pradesh',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1270260': {
                TITLE: 'Haryana',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1270770': {
                TITLE: 'Gujarat',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1271157': {
                TITLE: 'Goa',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1273293': {
                TITLE: 'Delhi',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1274744': {
                TITLE: 'Chandigarh',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1275715': {
                TITLE: 'Bihar',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1278253': {
                TITLE: 'Assam',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1278341': {
                TITLE: 'Arunachal Pradesh',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1278629': {
                TITLE: 'Andhra Pradesh',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1278647': {
                TITLE: 'Andaman and Nicobar',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1444364': {
                TITLE: 'Chhattisgarh',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1444365': {
                TITLE: 'Jharkhand',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '1444366': {
                TITLE: 'Uttarakhand',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '2058645': {
                TITLE: 'Western Australia',
                COUNTRY: 'AU',
                IS_MAXMIND_SUPPORTED: 1
            },
            '2061327': {
                TITLE: 'South Australia',
                COUNTRY: 'AU',
                IS_MAXMIND_SUPPORTED: 1
            },
            '2064513': {
                TITLE: 'Northern Territory',
                COUNTRY: 'AU',
                IS_MAXMIND_SUPPORTED: 1
            },
            '2145234': {
                TITLE: 'Victoria',
                COUNTRY: 'AU',
                IS_MAXMIND_SUPPORTED: 1
            },
            '2147291': {
                TITLE: 'Tasmania',
                COUNTRY: 'AU',
                IS_MAXMIND_SUPPORTED: 1
            },
            '2152274': {
                TITLE: 'Queensland',
                COUNTRY: 'AU',
                IS_MAXMIND_SUPPORTED: 1
            },
            '2155400': {
                TITLE: 'New South Wales',
                COUNTRY: 'AU',
                IS_MAXMIND_SUPPORTED: 1
            },
            '2177478': {
                TITLE: 'Australian Capital Territory',
                COUNTRY: 'AU',
                IS_MAXMIND_SUPPORTED: 1
            },
            '2634895': {
                TITLE: 'Wales',
                COUNTRY: 'GB',
                IS_MAXMIND_SUPPORTED: 1
            },
            '2638360': {
                TITLE: 'Scotland',
                COUNTRY: 'GB',
                IS_MAXMIND_SUPPORTED: 1
            },
            '2641364': {
                TITLE: 'Northern Ireland',
                COUNTRY: 'GB',
                IS_MAXMIND_SUPPORTED: 1
            },
            '4099753': {
                TITLE: 'Arkansas',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '4138106': {
                TITLE: 'Washington, D.C.',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '4142224': {
                TITLE: 'Delaware',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '4155751': {
                TITLE: 'Florida',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '4197000': {
                TITLE: 'Georgia',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '4273857': {
                TITLE: 'Kansas',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '4331987': {
                TITLE: 'Louisiana',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '4361885': {
                TITLE: 'Maryland',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '4398678': {
                TITLE: 'Missouri',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '4436296': {
                TITLE: 'Mississippi',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '4482348': {
                TITLE: 'North Carolina',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '4544379': {
                TITLE: 'Oklahoma',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '4597040': {
                TITLE: 'South Carolina',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '4662168': {
                TITLE: 'Tennessee',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '4736286': {
                TITLE: 'Texas',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '4826850': {
                TITLE: 'West Virginia',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '4829764': {
                TITLE: 'Alabama',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '4831725': {
                TITLE: 'Connecticut',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '4862182': {
                TITLE: 'Iowa',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '4896861': {
                TITLE: 'Illinois',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '4921868': {
                TITLE: 'Indiana',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '4971068': {
                TITLE: 'Maine',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5001836': {
                TITLE: 'Michigan',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5037779': {
                TITLE: 'Minnesota',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5073708': {
                TITLE: 'Nebraska',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5090174': {
                TITLE: 'New Hampshire',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5101760': {
                TITLE: 'New Jersey',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5128638': {
                TITLE: 'New York',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5165418': {
                TITLE: 'Ohio',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5224323': {
                TITLE: 'Rhode Island',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5242283': {
                TITLE: 'Vermont',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5279468': {
                TITLE: 'Wisconsin',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5332921': {
                TITLE: 'California',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5417618': {
                TITLE: 'Colorado',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5481136': {
                TITLE: 'New Mexico',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5509151': {
                TITLE: 'Nevada',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5549030': {
                TITLE: 'Utah',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5551752': {
                TITLE: 'Arizona',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5596512': {
                TITLE: 'Idaho',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5667009': {
                TITLE: 'Montana',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5690763': {
                TITLE: 'North Dakota',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5744337': {
                TITLE: 'Oregon',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5769223': {
                TITLE: 'South Dakota',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5815135': {
                TITLE: 'Washington',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5843591': {
                TITLE: 'Wyoming',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5855797': {
                TITLE: 'Hawaii',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5879092': {
                TITLE: 'Alaska',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5883102': {
                TITLE: 'Alberta',
                COUNTRY: 'CA',
                IS_MAXMIND_SUPPORTED: 1
            },
            '5909050': {
                TITLE: 'British Columbia',
                COUNTRY: 'CA',
                IS_MAXMIND_SUPPORTED: 1
            },
            '6065171': {
                TITLE: 'Manitoba',
                COUNTRY: 'CA',
                IS_MAXMIND_SUPPORTED: 1
            },
            '6087430': {
                TITLE: 'New Brunswick',
                COUNTRY: 'CA',
                IS_MAXMIND_SUPPORTED: 1
            },
            '6091069': {
                TITLE: 'Northwest Territories',
                COUNTRY: 'CA',
                IS_MAXMIND_SUPPORTED: 1
            },
            '6091530': {
                TITLE: 'Nova Scotia',
                COUNTRY: 'CA',
                IS_MAXMIND_SUPPORTED: 1
            },
            '6091732': {
                TITLE: 'Nunavut',
                COUNTRY: 'CA',
                IS_MAXMIND_SUPPORTED: 1
            },
            '6093943': {
                TITLE: 'Ontario',
                COUNTRY: 'CA',
                IS_MAXMIND_SUPPORTED: 1
            },
            '6113358': {
                TITLE: 'Prince Edward Island',
                COUNTRY: 'CA',
                IS_MAXMIND_SUPPORTED: 1
            },
            '6115047': {
                TITLE: 'Quebec',
                COUNTRY: 'CA',
                IS_MAXMIND_SUPPORTED: 1
            },
            '6141242': {
                TITLE: 'Saskatchewan',
                COUNTRY: 'CA',
                IS_MAXMIND_SUPPORTED: 1
            },
            '6185811': {
                TITLE: 'Yukon',
                COUNTRY: 'CA',
                IS_MAXMIND_SUPPORTED: 1
            },
            '6254925': {
                TITLE: 'Kentucky',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '6254926': {
                TITLE: 'Massachusetts',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '6254927': {
                TITLE: 'Pennsylvania',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '6254928': {
                TITLE: 'Virginia',
                COUNTRY: 'US',
                IS_MAXMIND_SUPPORTED: 1
            },
            '6269131': {
                TITLE: 'England',
                COUNTRY: 'GB',
                IS_MAXMIND_SUPPORTED: 1
            },
            '6354959': {
                TITLE: 'Newfoundland and Labrador',
                COUNTRY: 'CA',
                IS_MAXMIND_SUPPORTED: 1
            },
            '12096464': {
                TITLE: 'Ladakh',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            },
            '12165662': {
                TITLE: 'Dadra and Nagar Haveli and Daman and Diu',
                COUNTRY: 'IN',
                IS_MAXMIND_SUPPORTED: 1
            }
        }
    };
    private _capitalizePipe = inject(CapitalizePipe);
    constructor() {}

    public get config() {
        return this._config;
    }

    /**
     * Get config key by value
     * @returns any
     * @param config
     * @param value
     */
    public getKey(config: string, value: number | string) {
        const keyArr = Object.keys(this.config[config]).filter(
            configKey =>
                (isObject(this.config[config][configKey]) && this.config[config][configKey].ID === value) ||
                this.config[config][configKey] === value
        );
        if (keyArr && keyArr[0]) {
            return keyArr[0];
        } else {
            console.log(`Error: value: ${value} not found in config: ${config}`);
            return '';
        }
    }

    public getDropdownOptions(config: string): DropdownOption[] {
        const configOptions = Object.values(this.config[config]) as any[];
        const sortedConfigByDisplayText = configOptions.sort((obj1, obj2) => (obj1['DISPLAY_TEXT'] > obj2['DISPLAY_TEXT'] ? 1 : -1));
        const DROPDOWN_KEY_TRANSFORM_OPTIONS = {
            allWords: true,
            separator: '_',
            combineWords: true,
            firstCharLower: true
        };
        return sortedConfigByDisplayText.map(option => {
            return <DropdownOption>Object.keys(option).reduce((optionWithLoweredCaseKeys, key) => {
                return {
                    ...optionWithLoweredCaseKeys,
                    [this._capitalizePipe.transform(key, DROPDOWN_KEY_TRANSFORM_OPTIONS)]: option[key]
                };
            }, {});
        });
    }
}
