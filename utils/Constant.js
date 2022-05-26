import { Dimensions, Platform } from 'react-native';



export const kScreenWidth = Dimensions.get('window').width;
export const kScreenHeiht = Dimensions.get('window').height;
export const kScale =  Dimensions.get('window').scale;

export const kMarin = 8;


export function isIOS() {
    return Platform.OS === 'ios'
}

export function isAndroid() {
    return Platform.OS === 'android'
}