export const keys = {
  SERVER_URL:
    process.env.NODE_ENV !== 'production'
      ? process.env.REACT_APP_DEV_URL
      : process.env.REACT_APP_SERVER_URL,
  ROLES: {
    tech: 'tech',
    serviceProvider: 'serviceProvider',
    carRental: 'carRental',
    carRecovery: 'carRecovery',
    insurance: 'insurance',
    sparePart: 'sparePart',
    admin: 'admin',
    showroom: 'showroom',
  },
}

export const countries = [
  {
    key: 'af',
    value: 'Afghanistan',
    flag: 'af',
    text: 'Afghanistan',
  },
  {
    key: 'ax',
    value: 'Åland',
    flag: 'ax',
    text: 'Åland',
  },
  {
    key: 'al',
    value: 'The Republic of Albania',
    flag: 'al',
    text: 'The Republic of Albania',
  },
  {
    key: 'dz',
    value: 'The Peoples Democratic Republic of Algeria',
    flag: 'dz',
    text: 'The Peoples Democratic Republic of Algeria',
  },
  {
    key: 'as',
    value: 'The Territory of American Samoa',
    flag: 'as',
    text: 'The Territory of American Samoa',
  },
  {
    key: 'ad',
    value: 'The Principality of Andorra',
    flag: 'ad',
    text: 'The Principality of Andorra',
  },
  {
    key: 'ao',
    value: 'The Republic of Angola',
    flag: 'ao',
    text: 'The Republic of Angola',
  },
  {
    key: 'ai',
    value: 'Anguilla',
    flag: 'ai',
    text: 'Anguilla',
  },
  {
    key: 'ag',
    value: 'Antigua and Barbuda',
    flag: 'ag',
    text: 'Antigua and Barbuda',
  },
  {
    key: 'ar',
    value: 'The Argentine Republic',
    flag: 'ar',
    text: 'The Argentine Republic',
  },
  {
    key: 'am',
    value: 'The Republic of Armenia',
    flag: 'am',
    text: 'The Republic of Armenia',
  },
  {
    key: 'aw',
    value: 'Aruba',
    flag: 'aw',
    text: 'Aruba',
  },
  {
    key: 'au',
    value: 'The Commonwealth of Australia',
    flag: 'au',
    text: 'The Commonwealth of Australia',
  },
  {
    key: 'at',
    value: 'The Republic of Austria',
    flag: 'at',
    text: 'The Republic of Austria',
  },
  {
    key: 'az',
    value: 'The Republic of Azerbaijan',
    flag: 'az',
    text: 'The Republic of Azerbaijan',
  },
  {
    key: 'bs',
    value: 'The Commonwealth of The Bahamas',
    flag: 'bs',
    text: 'The Commonwealth of The Bahamas',
  },
  {
    key: 'bh',
    value: 'The Kingdom of Bahrainh',
    flag: 'bh',
    text: 'The Kingdom of Bahrain',
  },
  {
    key: 'bd',
    value: 'The Peoples Republic of Bangladesh',
    flag: 'bd',
    text: 'The Peoples Republic of Bangladesh',
  },
  {
    key: 'bb',
    value: 'Barbados',
    flag: 'bb',
    text: 'Barbados',
  },
  {
    key: 'by',
    value: 'The Republic of Belarus',
    flag: 'by',
    text: 'The Republic of Belarus',
  },
  {
    key: 'be',
    value: 'The Kingdom of Belgium',
    flag: 'be',
    text: 'The Kingdom of Belgium',
  },
  {
    key: 'bz',
    value: 'Belize',
    flag: 'bz',
    text: 'Belize',
  },
  {
    key: 'bj',
    value: 'The Republic of Benin',
    flag: 'bj',
    text: 'The Republic of Benin',
  },
  {
    key: 'bm',
    value: 'Bermuda',
    flag: 'bm',
    text: 'Bermuda',
  },
  {
    key: 'bt',
    value: 'The Kingdom of Bhutan',
    flag: 'bt',
    text: 'The Kingdom of Bhutan',
  },
  {
    key: 'bo',
    value: 'The Plurinational State of Bolivia',
    flag: 'bo',
    text: 'The Plurinational State of Bolivia',
  },
  {
    key: 'ba',
    value: 'Bosnia and Herzegovina',
    flag: 'ba',
    text: 'Bosnia and Herzegovina',
  },
  {
    key: 'bw',
    value: 'The Republic of Botswana',
    flag: 'bw',
    text: 'The Republic of Botswana',
  },
  {
    key: 'bv',
    value: 'Bouvet Island',
    flag: 'bv',
    text: 'Bouvet Island',
  },
  {
    key: 'br',
    value: 'The Federative Republic of Brazil',
    flag: 'br',
    text: 'The Federative Republic of Brazil',
  },
  {
    key: 'io',
    value: 'The British Indian Ocean Territory',
    flag: 'io',
    text: 'The British Indian Ocean Territory',
  },
  {
    key: 'bn',
    value: 'The Nation of Brunei, the Abode of Peace',
    flag: 'bn',
    text: 'The Nation of Brunei, the Abode of Peace',
  },
  {
    key: 'bg',
    value: 'The Republic of Bulgaria',
    flag: 'bg',
    text: 'The Republic of Bulgaria',
  },
  {
    key: 'bf',
    value: 'Burkina Faso',
    flag: 'bf',
    text: 'Burkina Faso',
  },
  {
    key: 'bi',
    value: 'The Republic of Burundi',
    flag: 'bi',
    text: 'The Republic of Burundi',
  },
  {
    key: 'cv',
    value: 'The Republic of Cabo Verde',
    flag: 'cv',
    text: 'The Republic of Cabo Verde',
  },
  {
    key: 'kh',
    value: 'The Kingdom of Cambodia',
    flag: 'kh',
    text: 'The Kingdom of Cambodia',
  },
  {
    key: 'cm',
    value: 'The Republic of Cameroon',
    flag: 'cm',
    text: 'The Republic of Cameroon',
  },
  {
    key: 'ca',
    value: 'Canada',
    flag: 'ca',
    text: 'Canada',
  },
  {
    key: 'ky',
    value: 'The Cayman Islands',
    flag: 'ky',
    text: 'The Cayman Islands',
  },
  {
    key: 'cf',
    value: 'The Central African Republic',
    flag: 'cf',
    text: 'The Central African Republic',
  },
  {
    key: 'td',
    value: 'The Republic of Chad',
    flag: 'td',
    text: 'The Republic of Chad',
  },
  {
    key: 'cl',
    value: 'The Republic of Chile',
    flag: 'cl',
    text: 'The Republic of Chile',
  },
  {
    key: 'cn',
    value: 'The Peoples Republic of China',
    flag: 'cn',
    text: 'The Peoples Republic of China',
  },
  {
    key: 'cx',
    value: 'The Territory of Christmas Island',
    flag: 'cx',
    text: 'The Territory of Christmas Island',
  },
  {
    key: 'cc',
    value: 'The Territory of Cocos (Keeling) Islands',
    flag: 'cc',
    text: 'The Territory of Cocos (Keeling) Islands',
  },
  {
    key: 'co',
    value: 'The Republic of Colombia',
    flag: 'co',
    text: 'The Republic of Colombia',
  },
  {
    key: 'km',
    value: 'The Union of the Comoros',
    flag: 'km',
    text: 'The Union of the Comoros',
  },
  {
    key: 'cd',
    value: 'The Democratic Republic of the Congo',
    flag: 'cd',
    text: 'The Democratic Republic of the Congo',
  },
  {
    key: 'cg',
    value: 'The Republic of the Congo',
    flag: 'cg',
    text: 'The Republic of the Congo',
  },
  {
    key: 'ck',
    value: 'The Cook Islands',
    flag: 'ck',
    text: 'The Cook Islands',
  },
  {
    key: 'cr',
    value: 'The Republic of Costa Rica',
    flag: 'cr',
    text: 'The Republic of Costa Rica',
  },
  {
    key: 'ci',
    value: 'The Republic of Côte dIvoire',
    flag: 'ci',
    text: 'The Republic of Côte dIvoire',
  },
  {
    key: 'hr',
    value: 'The Republic of Croatia',
    flag: 'hr',
    text: 'The Republic of Croatia',
  },
  {
    key: 'cu',
    value: 'The Republic of Cuba',
    flag: 'cu',
    text: 'The Republic of Cuba',
  },
  {
    key: 'cy',
    value: 'The Republic of Cyprus',
    flag: 'cy',
    text: 'The Republic of Cyprus',
  },
  {
    key: 'cz',
    value: 'The Czech Republic',
    flag: 'cz',
    text: 'The Czech Republic',
  },
  {
    key: 'dk',
    value: 'The Kingdom of Denmark',
    flag: 'dk',
    text: 'The Kingdom of Denmark',
  },
  {
    key: 'dj',
    value: 'The Republic of Djibouti',
    flag: 'dj',
    text: 'The Republic of Djibouti',
  },
  {
    key: 'dm',
    value: 'The Commonwealth of Dominica',
    flag: 'dm',
    text: 'The Commonwealth of Dominica',
  },
  {
    key: 'do',
    value: 'The Dominican Republic',
    flag: 'do',
    text: 'The Dominican Republic',
  },
  {
    key: 'ec',
    value: 'Ecuador',
    flag: 'ec',
    text: 'Ecuador',
  },
  {
    key: 'eg',
    value: 'Egypt',
    flag: 'eg',
    text: 'Egypt',
  },
  {
    key: 'sv',
    value: 'El Salvador',
    flag: 'sv',
    text: 'El Salvador',
  },
  {
    key: 'gq',
    value: 'Equatorial Guinea',
    flag: 'gq',
    text: 'Equatorial Guinea',
  },
  {
    key: 'er',
    value: 'Eritrea',
    flag: 'er',
    text: 'Eritrea',
  },
  {
    key: 'ee',
    value: 'Estonia',
    flag: 'ee',
    text: 'Estonia',
  },
  {
    key: 'sz',
    value: 'Eswatini',
    flag: 'sz',
    text: 'Eswatini',
  },
  {
    key: 'et',
    value: 'Ethiopia',
    flag: 'et',
    text: 'Ethiopia',
  },
  {
    key: 'fk',
    value: 'Falkland Islands',
    flag: 'fk',
    text: 'Falkland Islands',
  },
  {
    key: 'fo',
    value: 'Faroe Islands',
    flag: 'fo',
    text: 'Faroe Islands',
  },
  {
    key: 'fj',
    value: 'Fiji',
    flag: 'fj',
    text: 'Fiji',
  },
  {
    key: 'fi',
    value: 'Finland',
    flag: 'fi',
    text: '',
  },
  {
    key: 'fr',
    value: 'France',
    flag: 'fr',
    text: 'France',
  },
  {
    key: 'gf',
    value: 'Guyane',
    flag: 'gf',
    text: 'Guyane',
  },
  {
    key: 'pf',
    value: 'French Polynesia',
    flag: 'pf',
    text: 'French Polynesia',
  },
  {
    key: 'tf',
    value: 'French Southern and Antarctic Lands',
    flag: 'tf',
    text: 'French Southern and Antarctic Lands',
  },
  {
    key: 'ga',
    value: 'Gabonese',
    flag: 'ga',
    text: 'Gabonese',
  },
  {
    key: 'gm',
    value: 'Gambia',
    flag: 'gm',
    text: 'Gambia',
  },
  {
    key: 'ge',
    value: 'Georgia',
    flag: 'ge',
    text: 'Georgia',
  },
  {
    key: 'de',
    value: 'Germany',
    flag: 'de',
    text: 'Germany',
  },
  {
    key: 'gh',
    value: 'Ghana',
    flag: 'gh',
    text: 'Ghana',
  },
  {
    key: 'gi',
    value: 'Gibraltar',
    flag: 'gi',
    text: 'Gibraltar',
  },
  {
    key: 'gr',
    value: 'Hellenic',
    flag: 'gr',
    text: '',
  },
  {
    key: 'gl',
    value: 'Kalaallit Nunaat',
    flag: 'gl',
    text: 'Kalaallit Nunaat',
  },
  {
    key: 'gd',
    value: 'Grenada',
    flag: 'gd',
    text: 'Grenada',
  },
  {
    key: 'gp',
    value: 'Guadeloupe',
    flag: 'gp',
    text: 'Guadeloupe',
  },
  {
    key: 'gu',
    value: 'Guam',
    flag: 'gu',
    text: 'Guam',
  },
  {
    key: 'gt',
    value: 'Guatemala',
    flag: 'gt',
    text: 'Guatemala',
  },
  {
    key: 'gn',
    value: 'Guinea',
    flag: 'gn',
    text: 'Guinea',
  },
  {
    key: 'gw',
    value: 'Guinea-Bissau',
    flag: 'gw',
    text: 'Guinea-Bissau',
  },
  {
    key: 'gy',
    value: 'Guyana',
    flag: 'gy',
    text: 'Guyana',
  },
  {
    key: 'ht',
    value: 'Haiti',
    flag: 'ht',
    text: 'Haiti',
  },
  {
    key: 'hm',
    value: 'Heard Island and McDonald Islands',
    flag: 'hm',
    text: 'Heard Island and McDonald Islands',
  },
  {
    key: 'va',
    value: 'Holy See',
    flag: 'va',
    text: 'Holy See',
  },
  {
    key: 'hn',
    value: 'Honduras',
    flag: 'hn',
    text: 'Honduras',
  },
  {
    key: 'hk',
    value: 'Hong Kong Special Administrative Region of China[10]',
    flag: 'hk',
    text: 'Hong Kong Special Administrative Region of China[10]',
  },
  {
    key: 'hu',
    value: 'Hungary',
    flag: 'hu',
    text: 'Hungary',
  },
  {
    key: 'is',
    value: 'Iceland',
    flag: 'is',
    text: 'Iceland',
  },
  {
    key: 'in',
    value: 'India',
    flag: 'in',
    text: 'India',
  },
  {
    key: 'id',
    value: 'Indonesia',
    flag: 'id',
    text: 'Indonesia',
  },
  {
    key: 'ir',
    value: 'Iran',
    flag: 'ir',
    text: 'Iran',
  },
  {
    key: 'iq',
    value: 'Iraq',
    flag: 'iq',
    text: 'Iraq',
  },
  {
    key: 'ie',
    value: 'Ireland',
    flag: 'ie',
    text: 'Ireland',
  },
  {
    key: 'il',
    value: 'Israel',
    flag: 'il',
    text: 'Israel',
  },
  {
    key: 'it',
    value: 'it',
    flag: 'it',
    text: 'Italy',
  },
  {
    key: 'jm',
    value: 'Jamaica',
    flag: 'jm',
    text: 'Jamaica',
  },
  {
    key: 'jp',
    value: 'Japan',
    flag: 'jp',
    text: 'Japan',
  },
  {
    key: 'jo',
    value: 'Jordan',
    flag: 'jo',
    text: 'Jordan',
  },
  {
    key: 'kz',
    value: 'Kazakhstan',
    flag: 'kz',
    text: 'Kazakhstan',
  },
  {
    key: 'ke',
    value: 'Kenya',
    flag: 'ke',
    text: 'Kenya',
  },
  {
    key: 'ki',
    value: 'Kiribati',
    flag: 'ki',
    text: 'Kiribati',
  },
  {
    key: 'kp',
    value: 'kp',
    flag: 'kp',
    text: 'Korea',
  },
  {
    key: 'kr',
    value: 'Korea',
    flag: 'kr',
    text: 'Korea',
  },
  {
    key: 'kw',
    value: 'Kuwait',
    flag: 'kw',
    text: 'Kuwait',
  },
  {
    key: 'kg',
    value: 'Kyrgyz',
    flag: 'kg',
    text: 'Kyrgyz',
  },
  {
    key: 'la',
    value: 'lao',
    flag: 'la',
    text: 'Lao',
  },
  {
    key: 'lv',
    value: 'Latvia',
    flag: 'lv',
    text: 'Latvia',
  },
  {
    key: 'lb',
    value: 'Lebanese',
    flag: 'lb',
    text: 'Lebanese',
  },
  {
    key: 'ls',
    value: 'Lesotho',
    flag: 'ls',
    text: 'Lesotho',
  },
  {
    key: 'lr',
    value: 'Liberia',
    flag: 'lr',
    text: 'Liberia',
  },
  {
    key: 'ly',
    value: 'Libya',
    flag: 'ly',
    text: 'Libya',
  },
  {
    key: 'li',
    value: 'Liechtenstein',
    flag: 'li',
    text: 'Liechtenstein',
  },
  {
    key: 'lt',
    value: 'Lithuania',
    flag: 'lt',
    text: 'Lithuania',
  },
  {
    key: 'lu',
    value: 'Luxembourg',
    flag: 'lu',
    text: 'Luxembourg',
  },
  {
    key: 'mo',
    value: 'Macao',
    flag: 'mo',
    text: 'Macao',
  },
  {
    key: 'mk',
    value: 'Macedonia',
    flag: 'mk',
    text: 'Macedonia',
  },
  {
    key: 'mg',
    value: 'Madagascar',
    flag: 'mg',
    text: 'Madagascar',
  },
  {
    key: 'mw',
    value: 'Malawi',
    flag: 'mw',
    text: 'Malawi',
  },
  {
    key: 'my',
    value: 'Malaysia',
    flag: 'my',
    text: 'Malaysia',
  },
  {
    key: 'mv',
    value: 'Maldives',
    flag: 'mv',
    text: 'Maldives',
  },
  {
    key: 'ml',
    value: 'Mali',
    flag: 'ml',
    text: 'Mali',
  },
  {
    key: 'mt',
    value: 'Malta',
    flag: 'mt',
    text: 'Malta',
  },
  {
    key: 'mh',
    value: 'Marshall Islands',
    flag: 'mh',
    text: 'Marshall Islands',
  },
  {
    key: 'mq',
    value: 'Martinique',
    flag: 'mq',
    text: 'Martinique',
  },
  {
    key: 'mr',
    value: 'Mauritania',
    flag: 'mr',
    text: 'Mauritania',
  },
  {
    key: 'mu',
    value: 'Mauritius',
    flag: 'mu',
    text: 'Mauritius',
  },
  {
    key: 'yt',
    value: 'Mayotte',
    flag: 'yt',
    text: 'Mayotte',
  },
  {
    key: 'mx',
    value: 'Mexico',
    flag: 'mx',
    text: 'Mexico',
  },
  {
    key: 'fm',
    value: 'Micronesia',
    flag: 'fm',
    text: 'Micronesia',
  },
  {
    key: 'md',
    value: 'Moldova',
    flag: 'md',
    text: 'Moldova',
  },
  {
    key: 'mc',
    value: 'Monaco',
    flag: 'mc',
    text: 'Monaco',
  },
  {
    key: 'mn',
    value: 'Mongolia',
    flag: 'mn',
    text: 'Mongolia',
  },
  {
    key: 'me',
    value: 'Montenegro',
    flag: 'me',
    text: 'Montenegro',
  },
  {
    key: 'ms',
    value: 'Montserrat',
    flag: 'ms',
    text: 'Montserrat',
  },
  {
    key: 'ma',
    value: 'Morocco',
    flag: 'ma',
    text: 'Morocco',
  },
  {
    key: 'mz',
    value: 'Mozambique',
    flag: 'mz',
    text: 'Mozambique',
  },
  {
    key: 'mm',
    value: 'Union of Myanmar',
    flag: 'mm',
    text: 'Union of Myanmar',
  },
  {
    key: 'na',
    value: 'Namibia',
    flag: 'na',
    text: 'Namibia',
  },
  {
    key: 'nr',
    value: 'Nauru',
    flag: 'nr',
    text: 'Nauru',
  },
  {
    key: 'np',
    value: 'Nepal',
    flag: 'np',
    text: 'Nepal',
  },
  {
    key: 'nl',
    value: 'Netherlands',
    flag: 'nl',
    text: 'Netherlands',
  },
  {
    key: 'nc',
    value: 'New Caledonia',
    flag: 'nc',
    text: 'New Caledonia',
  },
  {
    key: 'nz',
    value: 'New Zealand',
    flag: 'nz',
    text: 'New Zealand',
  },
  {
    key: 'ni',
    value: 'Nicaragua',
    flag: 'ni',
    text: 'Nicaragua',
  },
  {
    key: 'ne',
    value: 'Niger',
    flag: 'ne',
    text: 'Niger',
  },
  {
    key: 'ng',
    value: 'Nigeria',
    flag: 'ng',
    text: 'Nigeria',
  },
  {
    key: 'nu',
    value: 'Niue',
    flag: 'nu',
    text: 'Niue',
  },
  {
    key: 'nf',
    value: 'Norfolk Island',
    flag: 'nf',
    text: 'Norfolk Island',
  },
  {
    key: 'mp',
    value: 'Northern Mariana Islands',
    flag: 'mp',
    text: 'Northern Mariana Islands',
  },
  {
    key: 'no',
    value: 'Norway',
    flag: 'no',
    text: 'Norway',
  },
  {
    key: 'om',
    value: 'Oman',
    flag: 'om',
    text: 'Oman',
  },
  {
    key: 'pk',
    value: 'Pakistan',
    flag: 'pk',
    text: 'Pakistan',
  },
  {
    key: 'pw',
    value: 'Palau',
    flag: 'pw',
    text: 'Palau',
  },
  {
    key: 'ps',
    value: 'Palestine',
    flag: 'ps',
    text: 'Palestine',
  },
  {
    key: 'pa',
    value: 'Panamá',
    flag: 'pa',
    text: 'Panamá',
  },
  {
    key: 'pg',
    value: 'Papua New Guinea',
    flag: 'pg',
    text: 'Papua New Guinea',
  },
  {
    key: 'py',
    value: 'Paraguay',
    flag: 'py',
    text: 'Paraguay',
  },
  {
    key: 'pe',
    value: 'Perú',
    flag: 'pe',
    text: 'Perú',
  },
  {
    key: 'ph',
    value: 'Philippines',
    flag: 'ph',
    text: 'Philippines',
  },
  {
    key: 'pn',
    value: 'Pitcairn',
    flag: 'pn',
    text: 'Pitcairn',
  },
  {
    key: 'pl',
    value: 'Poland',
    flag: 'pl',
    text: 'Poland',
  },
  {
    key: 'pt',
    value: 'Portugal',
    flag: 'pt',
    text: 'Portugal',
  },
  {
    key: 'pr',
    value: 'Puerto Rico',
    flag: 'pr',
    text: 'Puerto Rico',
  },
  {
    key: 'qa',
    value: 'Qatar',
    flag: 'qa',
    text: 'Qatar',
  },
  {
    key: 're',
    value: 'Réunion',
    flag: 're',
    text: 'Réunion',
  },
  {
    key: 'ro',
    value: 'Romania',
    flag: 'ro',
    text: 'Romania',
  },
  {
    key: 'ru',
    value: 'Russia',
    flag: 'ru',
    text: 'Russia',
  },
  {
    key: 'rw',
    value: 'Rwanda',
    flag: 'rw',
    text: 'Rwanda',
  },
  {
    key: 'sh',
    value: 'Saint Helena',
    flag: 'sh',
    text: 'Saint Helena',
  },
  {
    key: 'kn',
    value: 'Saint Kitts',
    flag: 'kn',
    text: 'Saint Kitts',
  },
  {
    key: 'lc',
    value: 'Saint Lucia',
    flag: 'lc',
    text: 'Saint Lucia',
  },
  {
    key: 'pm',
    value: 'Saint-Pierre',
    flag: 'pm',
    text: 'Saint-Pierre',
  },
  {
    key: 'vc',
    value: 'Saint Vincent',
    flag: 'vc',
    text: 'Saint Vincent',
  },
  {
    key: 'ws',
    value: 'Samoa',
    flag: 'ws',
    text: 'Samoa',
  },
  {
    key: 'sm',
    value: 'San Marino',
    flag: 'sm',
    text: 'San Marino',
  },
  {
    key: 'st',
    value: 'São Tomé',
    flag: 'st',
    text: 'São Tomé',
  },
  {
    key: 'sa',
    value: 'Saudi Arabia',
    flag: 'sa',
    text: 'Saudi Arabia',
  },
  {
    key: 'sn',
    value: 'Senegal',
    flag: 'sn',
    text: 'Senegal',
  },
  {
    key: 'rs',
    value: 'Serbia',
    flag: 'rs',
    text: 'Serbia',
  },
  {
    key: 'sc',
    value: 'Seychelles',
    flag: 'sc',
    text: 'Seychelles',
  },
  {
    key: 'sl',
    value: 'Sierra Leone',
    flag: 'sl',
    text: 'Sierra Leone',
  },
  {
    key: 'sg',
    value: 'Singapore',
    flag: 'sg',
    text: 'Singapore',
  },
  {
    key: 'sk',
    value: 'Slovakia',
    flag: 'sk',
    text: 'Slovakia',
  },
  {
    key: 'si',
    value: 'Slovenia',
    flag: 'si',
    text: 'Slovenia',
  },
  {
    key: 'sb',
    value: 'Solomon Islands',
    flag: 'sb',
    text: 'Solomon Islands',
  },
  {
    key: 'so',
    value: 'Somalia',
    flag: 'so',
    text: 'Somalia',
  },
  {
    key: 'za',
    value: 'South Africa',
    flag: 'za',
    text: 'South Africa',
  },
  {
    key: 'gs',
    value: 'South Georgia and the South Sandwich Islands',
    flag: 'gs',
    text: 'South Georgia and the South Sandwich Islands',
  },
  {
    key: 'es',
    value: 'Spain',
    flag: 'es',
    text: 'Spain',
  },
  {
    key: 'lk',
    value: 'Sri Lanka',
    flag: 'lk',
    text: 'Sri Lanka',
  },
  {
    key: 'sd',
    value: 'Sudan',
    flag: 'sd',
    text: 'Sudan',
  },
  {
    key: 'sr',
    value: 'Suriname',
    flag: 'sr',
    text: 'Suriname',
  },
  {
    key: 'sj',
    value: 'Svalbard',
    flag: 'sj',
    text: 'Svalbard',
  },
  {
    key: 'se',
    value: 'Sweden',
    flag: 'se',
    text: 'Sweden',
  },
  {
    key: 'ch',
    value: 'Swiss',
    flag: 'ch',
    text: 'Swiss',
  },
  {
    key: 'sy',
    value: 'Syria',
    flag: 'sy',
    text: 'Syria',
  },
  {
    key: 'tw',
    value: 'China',
    flag: 'tw',
    text: 'China',
  },
  {
    key: 'tj',
    value: 'Tajikistan',
    flag: 'tj',
    text: 'Tajikistan',
  },
  {
    key: 'tz',
    value: 'Tanzania',
    flag: 'tz',
    text: 'Tanzania',
  },
  {
    key: 'th',
    value: 'Thailand',
    flag: 'th',
    text: 'Thailand',
  },
  {
    key: 'tl',
    value: 'Timor-Leste',
    flag: 'tl',
    text: 'Timor-Leste',
  },
  {
    key: 'tg',
    value: 'Togolese',
    flag: 'tg',
    text: 'Togolese',
  },
  {
    key: 'tk',
    value: 'Tonga',
    flag: 'tk',
    text: 'Tokelau',
  },
  {
    key: 'to',
    value: 'Tonga',
    flag: 'to',
    text: 'Tonga',
  },
  {
    key: 'tt',
    value: 'Trinidad and Tobago',
    flag: 'tt',
    text: 'Trinidad and Tobago',
  },
  {
    key: 'tn',
    value: 'Tunisia',
    flag: 'tn',
    text: 'Tunisia',
  },
  {
    key: 'tr',
    value: 'Turkey',
    flag: 'tr',
    text: 'Turkey',
  },
  {
    key: 'tc',
    value: 'Turks and Caicos Islands',
    flag: 'tc',
    text: 'Turks and Caicos Islands',
  },
  {
    key: 'tv',
    value: 'Tuvalu',
    flag: 'tv',
    text: 'Tuvalu',
  },
  {
    key: 'ug',
    value: 'Uganda',
    flag: 'ug',
    text: '',
  },
  {
    key: 'ua',
    value: 'Ukraine',
    flag: 'ua',
    text: 'Ukraine',
  },
  {
    key: 'ae',
    value: 'United Arab Emirates',
    flag: 'ae',
    text: 'United Arab Emirates',
  },
  {
    key: 'gb',
    value: 'United Kingdom',
    flag: 'gb',
    text: 'United Kingdom',
  },
  {
    key: 'us',
    value: 'United States',
    flag: 'us',
    text: 'United States',
  },
  {
    key: 'uy',
    value: 'Uruguay',
    flag: 'uy',
    text: 'Uruguay',
  },
  {
    key: 'uz',
    value: 'Uzbekistan',
    flag: 'uz',
    text: 'Uzbekistan',
  },
  {
    key: 'vu',
    value: 'Vanuatu',
    flag: 'vu',
    text: 'Vanuatu',
  },
  {
    key: 've',
    value: 'Venezuela',
    flag: 've',
    text: 'Venezuela',
  },
  {
    key: 'vn',
    value: 'Viet Nam',
    flag: 'vn',
    text: 'Viet Nam',
  },
  {
    key: 'ye',
    value: 'Yemen',
    flag: 'ye',
    text: 'Yemen',
  },
  {
    key: 'zm',
    value: 'Zambia',
    flag: 'zm',
    text: 'Zambia',
  },
  {
    key: 'zw',
    value: 'Zimbabwe',
    flag: 'zw',
    text: 'Zimbabwe',
  },
]
