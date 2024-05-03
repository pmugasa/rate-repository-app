import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import Text from './Text'

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    padding: 20
  }
  // ...
})

const AppBar = () => {
  return (
    <View style={styles.flexContainer}>
      <Text style={{ color: 'white' }} fontSize='subheading' fontWeight='bold'>
        Repositories
      </Text>
    </View>
  )
}

export default AppBar
