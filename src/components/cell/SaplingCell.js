import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, TouchableOpacity, Text, View, Image
} from 'react-native'

import ImageView from '../common/ImageView'
import Color from '../../resources/constants/Color'
import Icons from '../../resources/constants/Icons'

const SaplingCell = ({ data, onPress }) => (
  <TouchableOpacity style={styles.container}
    onPress={onPress}
  >
    <View style={{ flexDirection: 'row', margin: 5 }}>
      <ImageView style={styles.avatar}
        imageUrl={data.profile.avatar}
      />
      <View style={styles.textContent}>
        <Text style={{ fontWeight: 'bold' }}>{data.profile.name}</Text>
        <Text style={{ color: 'grey' }}>{data.profile.username}</Text>
      </View>
    </View>
    <View style={styles.image}>
      <ImageView style={styles.image}
        imageUrl={data.url}
        resizeMode="center"
      />
    </View>
    <View style={styles.content}>
      <View>
        <Text style={styles.name}>{data.name}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.heart}>
          <Image source={data.saved ? Icons.activeHeart : Icons.inactiveHeart} />
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
)

SaplingCell.propTypes = {
  data: PropTypes.object,
  onPress: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.cell,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 10
  },
  name: {
    fontSize: 14,
    marginLeft: 10
  },
  image: {
    height: 200,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  content: {
    flexDirection: 'row',
    height: 40,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  heart: {
    height: '10%',
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10
  }
})

export default SaplingCell
