import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import Text from './Text'
import { Link } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    padding: 20
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 10,
    justifyContent: 'space-between'
  }
  // ...
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} horizontal>
        <Link to='/'>
          <Text
            style={{ color: 'white' }}
            fontSize='subheading'
            fontWeight='bold'
          >
            Repositories
          </Text>
        </Link>

        <Link to='/sign-in'>
          <Text style={{ color: '#0366d6', fontWeight: '500', fontSize: 20 }}>
            Sign in
          </Text>
        </Link>
      </ScrollView>
    </View>
  )
}

export default AppBar
