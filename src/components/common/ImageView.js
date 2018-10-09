import React from 'react'
import { View, Image, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import FastImage from 'react-native-fast-image'

import Images from '../../resources/constants/Images'

export default class ImageView extends React.Component {
  state = {
    onLoadError: false,
    onLoadEnd: false,
    dimensions: undefined
  }

  onLoadError = () => {
    this.setState({ onLoadError: true })
  }

  onLoadEnd = () => {
    this.setState({ onLoadEnd: true })
  }

  onLayout = (event) => {
    const { dimensions } = this.state
    if (dimensions) return
    const { width, height } = event.nativeEvent.layout
    this.setState({ dimensions: { width, height } })
  }

  getResizeMode = () => {
    const { resizeMode } = this.props
    return resizeMode || FastImage.resizeMode.cover
  }

  renderView = () => {
    const { style, imageUrl, indicatorSize } = this.props
    const { dimensions, onLoadError, onLoadEnd } = this.state
    const size = indicatorSize || 'large'
    const indicatorWidth = size === 'large' ? 15 : 10
    const indicatorLeft = (dimensions.width / 2) - indicatorWidth
    const indicatorTop = (dimensions.height / 2) - indicatorWidth
    const isImageUrl = imageUrl && imageUrl !== ''
    return (
      <View style={style}
        onLayout={this.onLayout}
      >
        {
          (!onLoadEnd || onLoadError || !isImageUrl)
          && (
          <Image source={Images.placeHolder}
            style={[style, { width: '100%', height: '100%' }]}
            resizeMode="cover"
          />
          )
        }
        {
          !onLoadEnd && isImageUrl
            ? (
              <ActivityIndicator style={{ position: 'absolute', top: indicatorTop, left: indicatorLeft }}
                size={indicatorSize}
                color="white"
              />
            )
            : null
        }
        {
          isImageUrl ? (
            <FastImage style={[style, onLoadEnd ? {} : { width: 0, height: 0 }]}
              source={{
                uri: imageUrl,
                priority: FastImage.priority.normal
              }}
              resizeMode={this.getResizeMode()}
              onLoadEnd={this.onLoadEnd}
              onError={this.onLoadError}
            />
          ) : null
        }
      </View>
    )
  }

  render() {
    const { style } = this.props
    const { dimensions } = this.state
    if (dimensions) {
      return this.renderView()
    }
    return (
      <View style={style}
        onLayout={this.onLayout}
      />
    )
  }
}

ImageView.propTypes = {
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  imageUrl: PropTypes.string,
  resizeMode: PropTypes.string,
  indicatorSize: PropTypes.string
}
