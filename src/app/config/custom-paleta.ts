import { MatColors } from '@angular/material/core';

export const myCustomPalette: MatColors = {
  primary: {
    50: '#e8eaf6',
    100: '#c5cae9',
    200: '#9fa8da',
    300: '#7986cb',
    400: '#5c6bc0',
    500: '#3f51b5', // usa la variable $primary definida anteriormente
    600: '#3949ab',
    700: '#303f9f',
    800: '#283593',
    900: '#1a237e'
  },
  accent: {
    50: '#fce4ec',
    100: '#f8bbd0',
    200: '#f48fb1',
    300: '#f06292',
    400: '#ec407a',
    500: '#ff4081', // usa la variable $accent definida anteriormente
    600: '#e91e63',
    700: '#d81b60',
    800: '#c2185b',
    900: '#ad1457'
  },
  warn: {
    50: '#fff8e1',
    100: '#ffecb3',
    200: '#ffe082',
    300: '#ffd54f',
    400: '#ffca28',
    500: '#f44336', // usa la variable $warn definida anteriormente
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100'
  },
  background: {
    50: '#fafafa',
    100: '#f5f5f5', // usa la variable $background definida anteriormente
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121'
  },
  text: {
    primary: '#333', // usa la variable $text definida anteriormente
    secondary: '#666'
  }
};