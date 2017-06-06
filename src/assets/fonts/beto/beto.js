import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'fontFace': {
    'fontFamily': ''beto'',
    'src': 'url('./beto.eot')',
    'src': 'url('./beto.eot') format('embedded-opentype'),
    url('./beto.ttf') format('truetype'),
    url('./beto.woff') format('woff'),
    url('./beto.svg') format('svg')',
    'fontWeight': 'normal',
    'fontStyle': 'normal'
  },
  '[class^="icon-"]': {
    // use !important to prevent issues with browser extensions that change fonts
    'fontFamily': ''beto' !important',
    'speak': 'none',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'fontVariant': 'normal',
    'textTransform': 'none',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    // Better Font Rendering ===========
    'WebkitFontSmoothing': 'antialiased',
    'MozOsxFontSmoothing': 'grayscale'
  },
  '[class*=" icon-"]': {
    // use !important to prevent issues with browser extensions that change fonts
    'fontFamily': ''beto' !important',
    'speak': 'none',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'fontVariant': 'normal',
    'textTransform': 'none',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    // Better Font Rendering ===========
    'WebkitFontSmoothing': 'antialiased',
    'MozOsxFontSmoothing': 'grayscale'
  },
  'icon-close:before': {
    'content': '"\e906"'
  },
  'icon-menu:before': {
    'content': '"\e904"'
  },
  'icon-menu2:before': {
    'content': '"\e905"'
  },
  'icon-github:before': {
    'content': '"\e903"'
  },
  'icon-twitter:before': {
    'content': '"\e900"'
  },
  'icon-linkedin:before': {
    'content': '"\e901"'
  },
  'icon-facebook:before': {
    'content': '"\e902"'
  }
});
