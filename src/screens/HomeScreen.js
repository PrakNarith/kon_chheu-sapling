import React from 'react'
import {
  View, Animated, StyleSheet, Text, Alert
} from 'react-native'

import Images from '../resources/constants/Images'
import Color from '../resources/constants/Color'
import SaplingCell from '../components/cell/SaplingCell'
import SizeUtils from '../utils/SizeUtils'
import DeviceUtils from '../utils/DeviceUtils'
import FeedService from '../api/FeedService'

export default class HomeScreen extends React.PureComponent {
  state = {
    scrollY: new Animated.Value(0),
    data: []
  }

  componentDidMount() {
    FeedService.getAllFeed().then((response) => {
      if (response.ok) {
        const { data } = response
        this.setState({ data })
      } else {
        Alert.alert('Something went wrong', response.originalError, [
          { text: 'Cancel', style: 'cancel' }
        ])
      }
    })
  }

  renderAnimateHead = () => {
    const { scrollY } = this.state
    return (
      <Animated.Image style={[styles.backgroundImage, {
        opacity: scrollY.interpolate({
          inputRange: [0, 250],
          outputRange: [1, 0]
        })
      }]}
        source={Images.sapling}
      />
    )
  }

  renderItem = ({ item }) => {
    const { navigation } = this.props
    return (
      <SaplingCell data={item}
        onPress={() => navigation.navigate('SaplingDetail', { item })}
      />
    )
  }

  flatListHeader= () => {
    const { scrollY } = this.state
    return (
      <Animated.View style={[styles.header, {
        opacity: scrollY.interpolate({
          inputRange: [0, 250],
          outputRange: [0, 1]
        })
      }]}
      >
        <Text style={styles.title}>Sapling</Text>
      </Animated.View>
    )
  }

  render() {
    const { data, scrollY } = this.state
    return (
      <View style={styles.container}>
        {this.renderAnimateHead()}
        <Animated.FlatList data={data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          scrollEventThrottle={16}
          ListHeaderComponent={this.flatListHeader}
          stickyHeaderIndices={[0]}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { y: scrollY } }
              }
            ],
            { useNativeDriver: true }
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: SizeUtils.getSize(100, 70),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.header,
    marginBottom: SizeUtils.getSize(120, 80)
  },
  backgroundImage: {
    width: DeviceUtils.screenWidth(),
    height: '34%',
    position: 'absolute'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
    marginTop: SizeUtils.getPaddingTop(0)
  }
})
