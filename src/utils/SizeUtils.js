import DeviceUtils from './DeviceUtils'

export default class SizeUtils {
  /**
   * Returns size with normal or smaller size
   * @param {number} normalSize
   * @param {number} decreaseTo
   * @static
   */
  static getSize = (normalSize, decreaseTo) => {
    if (DeviceUtils.isIphone5()) {
      return decreaseTo
    }
    return DeviceUtils.isAndroidSmallScreen ? decreaseTo : normalSize
  }

  /**
   * Returns padding top number by platform
   * @param {number} ios - padding number for ios
   * @param {number} android - padding number for android
   * @returns {number} padding top number
   * @static
   */
  static getPaddingTop = (ios, android) => {
    if (DeviceUtils.isIPhone()) {
      return DeviceUtils.isIphoneX() ? ios + 20 : ios
    }
    return android || 0
  }
}
