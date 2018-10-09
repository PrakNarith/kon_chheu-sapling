import React from 'react'
import {
  StyleSheet, View, Text, TouchableOpacity, Image
} from 'react-native'
import PropTypes from 'prop-types'

import ImageView from '../components/common/ImageView'
import SizeUtils from '../utils/SizeUtils'
import Icons from '../resources/constants/Icons'

class SaplingDetailScreen extends React.PureComponent {
  render() {
    const { navigation } = this.props
    const { item } = navigation.state.params
    const { avatar, name, username } = item.profile
    return (
      <View style={styles.container}>
        <ImageView style={styles.image}
          imageUrl={item.url}
        />
        <View style={styles.content}>
          <ImageView style={styles.avatar}
            imageUrl={avatar}
          />
          <View style={styles.textContent}>
            <Text style={{ fontWeight: 'bold' }}>{name}</Text>
            <Text style={{ color: 'grey' }}>{username}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.close}
          onPress={() => navigation.goBack()}
        >
          <Image source={Icons.cross} />
        </TouchableOpacity>
      </View>
    )
  }
}

SaplingDetailScreen.propTypes = {
  navigation: PropTypes.object
}

export default SaplingDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    height: '100%',
    width: '100%'
  },
  content: {
    position: 'absolute',
    top: SizeUtils.getPaddingTop(20),
    left: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10
  },
  close: {
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    borderColor: 'red',
    borderWidth: 1.5,
    top: SizeUtils.getPaddingTop(20),
    right: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
