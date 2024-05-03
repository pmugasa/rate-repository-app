import { FlatList, View, Text, Image, StyleSheet } from 'react-native'
import { Button } from 'react-native'

const styles = StyleSheet.create({
  separator: {
    height: 10
  },
  img: {
    width: 50,
    height: 50
  },
  container: {
    display: 'flex'
  }
})

const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4'
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4'
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4'
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4'
  }
]

const formatNumber = (num) => {
  if (num >= 1000) {
    const numberInK = num / 1000
    const roundedNum = Math.round(numberInK * 10) / 10

    return `${roundedNum}k`
  }
  return num.toString()
}

const ItemSeparator = () => <View style={styles.separator} />

const Repository = ({ item }) => {
  return (
    <>
      <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
        <View style={{ flexDirection: 'row', flex: 1, gap: 16 }}>
          <View>
            <Image
              style={{
                width: 60,
                height: 60,
                borderRadius: 4
              }}
              source={{
                uri: item.ownerAvatarUrl
              }}
            />
          </View>
          <View style={{ flexShrink: 1, gap: 4 }}>
            <Text style={{ flexGrow: 1, fontSize: 20, fontWeight: '700' }}>
              {item.fullName}
            </Text>
            <Text
              style={{
                flexGrow: 1,
                fontSize: 16,
                fontWeight: 'normal',
                color: '#586069'
              }}
            >
              {item.description}
            </Text>
            <View
              style={{
                backgroundColor: '#0366d6',
                marginTop: 8,
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 4,
                alignSelf: 'flex-start'
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'normal',
                  color: '#fff'
                }}
              >
                {item.language}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 24,
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}
        >
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: '700', fontSize: 16 }}>
              {formatNumber(item.stargazersCount)}
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: 'normal', color: '#586069' }}
            >
              Stars
            </Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: '700', fontSize: 16 }}>
              {formatNumber(item.forksCount)}
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: 'normal', color: '#586069' }}
            >
              Forks
            </Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: '700', fontSize: 16 }}>
              {item.reviewCount}
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: 'normal', color: '#586069' }}
            >
              Reviews
            </Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: '700', fontSize: 16 }}>
              {item.ratingAverage}
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: 'normal', color: '#586069' }}
            >
              Ratings
            </Text>
          </View>
        </View>
      </View>
    </>
  )
}

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <Repository item={item} />}
    />
  )
}

export default RepositoryList
