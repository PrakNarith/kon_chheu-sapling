import { Platform, Dimensions } from 'react-native'

export default class DeviceUtils {
  static isIPhone = () => Platform.OS === 'ios'

  static isAndroid = () => Platform.OS === 'android'

  static screenWidth = () => Dimensions.get('window').width

  static screenHeight = () => Dimensions.get('window').height

  static isIphone5 = () => (DeviceUtils.isIPhone && DeviceUtils.screenHeight() === 568)

  static isIphoneX = () => (DeviceUtils.isIPhone && DeviceUtils.screenHeight() === 812.0)
}
