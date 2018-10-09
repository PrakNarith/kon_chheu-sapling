import React from 'react'
import {
  View, FlatList, StyleSheet, Text, Alert
} from 'react-native'

import Color from '../resources/constants/Color'
import SaplingCell from '../components/cell/SaplingCell'
import SizeUtils from '../utils/SizeUtils'
import FeedService from '../api/FeedService'

export default class SavedScreen extends React.PureComponent {
  state = {
    data: []
  }

  componentDidMount() {
    FeedService.getSavedFeed().then((response) => {
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

  renderItem = ({ item }) => {
    const { navigation } = this.props
    return (
      <SaplingCell data={item}
        onPress={() => navigation.navigate('SaplingDetail', { item })}
      />
    )
  }

  navHeader= () => (
    <View style={styles.header}>
      <Text style={styles.title}>Sapling Saved</Text>
    </View>
  )

  render() {
    const { data } = this.state
    return (
      <View style={styles.container}>
        {this.navHeader()}
        <FlatList style={{ marginTop: 10 }}
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
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
    backgroundColor: Color.header
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
    marginTop: SizeUtils.getPaddingTop(0)
  }
})
