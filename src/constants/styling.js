import { Dimensions } from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const COLORS = {
    searchBg: '#e5e7e9',
    black: '#212529',
    gray: '#495057',
    lightgray: '#6c757d',
    white: 'rgba(255, 255, 255, 1)',
    text: '#9a56d4',
    text1: '#98A2B3',

    text2: '#8F8F8F',
    text3: '#7C7C7C',
    green: '#14AE5C',
    red: '#FF0004',
    inputBorderColor: '#ccc',
    inputPlaceholderColor: '#6c757d',
    errorRed: '#e74c3c',
};

export const dimensions = {
    screenHeight,
    screenWidth,
};

