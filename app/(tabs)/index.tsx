import { StyleSheet, ScrollView } from 'react-native'
import { ExternalLink } from '../../components/ExternalLink'
import { Text, View } from '../../components/Themed'
import { Image, Pressable } from 'react-native'
import { Dimensions } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Style from '../../style'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default function About() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={Style.container}
    >
      <View style={Style.card}>
        <Image
          resizeMode='contain'
          style={styles.profilePic}
          source={require('../../assets/images/profile-pic2.webp')}
        />
        <Text style={Style.title}>About me</Text>
        <Text style={Style.afterTitle}></Text>
        <Text style={Style.smText}>
          A passionate web and mobile app developer with over 6 years of experience in programming and the internet. In
          my free time, I enjoy writing articles on my blog and contributing to the open-source community. I am also the
          creator of the NigaPHP framework.
        </Text>
        <View style={styles.links}>
          <ExternalLink href='https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'>
            <FontAwesome style={styles.link} name='github' />
          </ExternalLink>
          <ExternalLink href='https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'>
            <FontAwesome style={styles.link} name='facebook' />
          </ExternalLink>
          <ExternalLink href='https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'>
            <FontAwesome style={styles.link} name='twitter' />
          </ExternalLink>
          <ExternalLink href='https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'>
            <FontAwesome style={styles.link} name='inbox' />
          </ExternalLink>
        </View>
        <Pressable
        style={({ pressed }) => [
        styles.resumeButton,
          {
            opacity: pressed ? 0.5 : 1,
          },
        ]}
      > 
        <ExternalLink
        style={{textAlign: 'center'}}
          href='https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
        >
          <Text style={{ color: '#fff', fontFamily: 'UbuntuRegular' }}>
            <FontAwesome color='#fff' name='download' /> RESUME
          </Text>
        </ExternalLink>
        </Pressable>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  profilePic: {
    width: '100%',
    height: 250,
    borderRadius: 5,
  },

  links: {
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'center',
    gap: 15,
  },

  link: {
    fontSize: 24,
    color: '#00000099',
  },

  resumeButton: {
    backgroundColor: '#00000099',
    padding: 15,
    textAlign: 'center',
    borderRadius: 5,
  },
})
