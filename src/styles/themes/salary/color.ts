import { hexToRgbA } from '../../../functions'

const BRAND_COLORS = {
  primaryColor: '#F95C3A',
  secondaryColor: '#F6F6F6',
  tertiaryColor: '#181818'
}

const BRAND_TINTS = {
  aTint05: '#f5f4f6',
  aTint10: '#ebe9ee',
  aTint20: '#fe9983cf',
  aTint30: '#ff8266bf',
  aTint40: '#b1a8ba',
  aTint50: '#9d92a9',
  aTint60: '#897c97',
  aTint70: '#766686',
  aTint80: '#625175',
  aTint90: '#4f3b63',
  bTint05: '#f8fbfd',
  bTint10: '#f2f7fc',
  bTint20: '#e4eef8',
  bTint30: '#d7e6f5',
  bTint40: '#cadef2',
  bTint50: '#bdd6ef',
  bTint60: '#afcdeb',
  bTint70: '#a2c5e8',
  bTint80: '#95bde5',
  bTint90: '#87b4e1',
  cTint05: '#f7fcfd',
  cTint10: '#eff9fa',
  cTint20: '#dff2f5',
  cTint30: '#d0ecf0',
  cTint40: '#c0e5eb',
  cTint50: '#b0dfe7',
  cTint60: '#a0d9e2',
  cTint70: '#90d2dd',
  cTint80: '#81ccd8',
  cTint90: '#71c5d3',
  dTint05: '#f7f6fb',
  dTint10: '#f0edf8',
  dTint20: '#e0dcf1',
  dTint30: '#d1cae9',
  dTint40: '#c2b9e2',
  dTint50: '#b3a7db',
  dTint60: '#a395d4',
  dTint70: '#9484cd',
  dTint80: '#8572c5',
  dTint90: '#7561be'
}

const BRAND_SHADES = {
  aShade05: '#030204',
  aShade10: '#060408',
  aShade20: '#0c0710',
  aShade30: '#120b19',
  aShade40: '#180f21',
  aShade50: '#1e1329',
  aShade60: '#231631',
  aShade70: '#291a39',
  aShade80: '#2f1e42',
  aShade90: '#35214a',
  bShade05: '#06090b',
  bShade10: '#0c1116',
  bShade20: '#18222c',
  bShade30: '#253443',
  bShade40: '#314559',
  bShade50: '#3d566f',
  bShade60: '#496785',
  bShade70: '#55789b',
  bShade80: '#628ab2',
  bShade90: '#6e9bc8',
  cShade05: '#050a0a',
  cShade10: '#0a1315',
  cShade20: '#132629',
  cShade30: '#1d393e',
  cShade40: '#274c52',
  cShade50: '#316067',
  cShade60: '#3a737c',
  cShade70: '#448690',
  cShade80: '#4e99a5',
  cShade90: '#57acb9',
  dShade05: '#050409',
  dShade10: '#0a0812',
  dShade20: '#141025',
  dShade30: '#1f1837',
  dShade40: '#292049',
  dShade50: '#33285c',
  dShade60: '#3d2f6e',
  dShade70: '#473780',
  dShade80: '#523f92',
  dShade90: '#5c47a5'
}

const ACCENTS_COLORS = {
  accentGreen01: '#7CBA8A',
  accentGreen02: '#79B738',
  accentGreen03: '#33AB77',
  accentOrange: '#F3670F',
  accentRed: '#D00000',
  accentYellow: '#F9B60A'
}

const TEXT_AND_BACKGROUND_COLORS = {
  bgBlack: '#000000',
  bgDarkGray: '#BABABA',
  bgInputs: '#F6F6F6',
  bgLightBlue: '#FBFDFF',
  bgLightGray: '#F7F7F7',
  bgLightPurple: '#F5F6FC',
  bgLightRed: '#FEF8F8',
  bgMidBlue: '#E8EDF4',
  bgWhite: '#FFFFFF',
  textBody: '#232735',
  textLink: '#3399FF',
  textSecondary: '#5D637A',
  textTertiary: '#A1A4B1'
}

const MENUS_AND_HOVER_STATES_COLORS = {
  btnHover01: '#F13910',
  btnHover02: '#F4532E',
  menuHover: '#D94625',
  menuItem: '#947B95'
}

const TINTS_COLORS = {
  darkBlueTint03: '#ECEDEF',
  darkBlueTint07: '#E4E8EC',
  darkBlueTint15: '#D8DEE3',
  darkBlueTint25: '#AFB9C5',
  darkBlueTint50: '#798FA4',

  aquaTint07: '#F4FBFC',
  aquaTint15: '#E7F5F8',
  aquaTint25: '#D7EFF3',
  aquaTint35: '#C8E9EE',
  aquaTint50: '#B0DFE6',
  aquaTint80: '#81CCD8',

  greenTint07: '#F1F6F4',
  greenTint15: '#E7F0EB',
  greenTint25: '#DBEAE0',
  greenTint35: '#CEE4D4',
  greenTint50: '#BBDAC3',
  greenTint80: '#95C7A1',

  orangeTint07: '#FEF4EE',
  orangeTint15: '#FDE8DB',
  orangeTint25: '#FCD9C3',
  orangeTint35: '#FBCAAB',
  orangeTint50: '#F9B387',
  orangeTint80: '#F4843E',

  yellowTint07: '#FFFAEE',
  yellowTint15: '#FEF4DA',
  yellowTint25: '#FDEDC2',
  yellowTint35: '#FDE5A9',
  yellowTint50: '#FCDA84',
  yellowTint80: '#F9C43A'
}

const MISCELLANEOUS_COLORS = {
  inherit: 'inherit',
  msExcel: '#217346',
  msPowerPoint: '#D24726',
  msWord: '#2B579A'
}

const TRANSLUCENT_COLORS = {
  black05: hexToRgbA(TEXT_AND_BACKGROUND_COLORS.bgBlack, 5),
  black07: hexToRgbA(TEXT_AND_BACKGROUND_COLORS.bgBlack, 7),
  black08: hexToRgbA(TEXT_AND_BACKGROUND_COLORS.bgBlack, 8),
  black10: hexToRgbA(TEXT_AND_BACKGROUND_COLORS.bgBlack, 10),
  black12: hexToRgbA(TEXT_AND_BACKGROUND_COLORS.bgBlack, 12),
  black15: hexToRgbA(TEXT_AND_BACKGROUND_COLORS.bgBlack, 15),
  black24: hexToRgbA(TEXT_AND_BACKGROUND_COLORS.bgBlack, 24),
  black25: hexToRgbA(TEXT_AND_BACKGROUND_COLORS.bgBlack, 25),
  black30: hexToRgbA(TEXT_AND_BACKGROUND_COLORS.bgBlack, 30),
  black90: hexToRgbA(TEXT_AND_BACKGROUND_COLORS.bgBlack, 90),
  textBody05: hexToRgbA(TEXT_AND_BACKGROUND_COLORS.textBody, 5),
  textBody10: hexToRgbA(TEXT_AND_BACKGROUND_COLORS.textBody, 10),
  textBody15: hexToRgbA(TEXT_AND_BACKGROUND_COLORS.textBody, 15),
  textBody30: hexToRgbA(TEXT_AND_BACKGROUND_COLORS.textBody, 30),
  white70: hexToRgbA(TEXT_AND_BACKGROUND_COLORS.bgWhite, 70),
  white90: hexToRgbA(TEXT_AND_BACKGROUND_COLORS.bgWhite, 90)
}

const COLORS = {
  ...BRAND_COLORS,
  ...BRAND_TINTS,
  ...BRAND_SHADES,
  ...ACCENTS_COLORS,
  ...TEXT_AND_BACKGROUND_COLORS,
  ...MENUS_AND_HOVER_STATES_COLORS,
  ...TINTS_COLORS,
  ...TRANSLUCENT_COLORS,
  ...MISCELLANEOUS_COLORS
}

const SHADOWS = {
  'card-bleed': `0px 2px 2px ${COLORS.bgInputs}`,
  'card-highlight': `0px 3px 6px ${COLORS.bgMidBlue}, 0px 0px 2px ${COLORS.black15}`,
  'card-lighter': `0px 0px 2px ${COLORS.black25}`,
  'card-simple': `0px 1px 4px ${COLORS.black25}`,
  'text-editor': `0px -3px 6px ${COLORS.bgMidBlue}, 0px 0px 2px ${COLORS.black15}`,
  dropShadow: `0px 0px 8px ${COLORS.textBody05}, 0px 0px 6px ${COLORS.textBody10}, 0px 0px 3px ${COLORS.textBody15}, 0px 0px 1px ${COLORS.textBody30}`,
  elevationOne: `0px 2px 2px ${COLORS.black07}`,
  filterButton: `0px 0px 8px ${COLORS.black08}, 0px 0px 2px ${COLORS.black30}`,
  switchActiveShadow: `0 0 0 2px ${COLORS.bTint10}`,
  switchShadow: `0px 0px 2px ${COLORS.black12}, 0px 2px 2px ${COLORS.black24}`
}

const ELEVATIONS = {
  DP01: `0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)`,
  DP02: `0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)`,
  DP03: `0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.2)`,
  DP04: `0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)`,
  DP06: `0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2)`,
  DP08: `0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)`,
  DP09: `0px 9px 12px rgba(0, 0, 0, 0.14), 0px 3px 16px rgba(0, 0, 0, 0.12), 0px 5px 6px rgba(0, 0, 0, 0.2)`,
  DP12: `0px 12px 17px rgba(0, 0, 0, 0.14), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2)`,
  DP16: `0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2)`,
  DP24: `0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2)`
}

export {
  COLORS,
  BRAND_COLORS,
  BRAND_TINTS,
  BRAND_SHADES,
  TRANSLUCENT_COLORS,
  SHADOWS,
  ELEVATIONS
}
