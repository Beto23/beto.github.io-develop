import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'header': {
    'position': 'fixed',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'background': 'transparent',
    'height': [{ 'unit': 'em', 'value': 3 }]
  },
  'header header-container': {
    'background': '#191c1f',
    'height': [{ 'unit': 'px', 'value': 0 }],
    'transition': 'height ease-out .3s'
  },
  'header header-container__show': {
    'height': [{ 'unit': 'px', 'value': 150 }]
  },
  'header header-button': {
    'position': 'absolute',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 35 }],
    'background': 'none',
    'cursor': 'pointer'
  },
  'header header-button i': {
    'color': 'white',
    'fontSize': [{ 'unit': 'em', 'value': 2 }]
  },
  'header header-button:focus': {
    'outline': '0'
  }
});
