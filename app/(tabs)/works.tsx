import { StyleSheet, ScrollView } from 'react-native'
import { ExternalLink } from '../../components/ExternalLink'
import { Text, View } from '../../components/Themed'
import { Image } from 'react-native'
import { Dimensions } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Style from '../../style'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Item = ({ icon, title, desc }) => {
  return (
    <View style={styles.workCard}>
      <FontAwesome color='#00000090' size={80} name={icon} />
      <Text style={Style.title}>{title}</Text>
      <Text style={[Style.smText, { textAlign: 'center' }]}>{desc}</Text>
    </View>
  )
}

export default function Works() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={Style.container}
    >
      <Item
        icon='globe'
        title='Web development'
        desc='I specialize in providing functional web services that include custom website development, WordPress development, e-commerce solutions, and more.'
      />
      <Item
        icon='bolt'
        title='SEO and security'
        desc='I offer top-notch solutions in both software security and SEO practices that can help boost the quantity and quality of traffic to your website.'
      />

      <Item
        icon='cubes'
        title='Web Design'
        desc='My web design services include creating stunning, intuitive websites that effectively represent your brand and corporate identity through exceptional UI/UX design.'
      />

      <Item
        icon='android'
        title='Mobile App'
        desc='I create beautiful and functional apps for iOS and Android using React Native. With my expertise in this framework, I can bring your app idea to life and deliver top-notch results.'
      />

      <Item
        icon='question'
        title='Problem solving'
        desc='I possess a solid understanding of the problem-solving process and techniques to address issues. My approach is to always strive for the optimal solution to a problem, and I remain receptive to new ideas that could lead to better outcomes.'
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  workCard: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    padding: 15,
    elevation: 5,
    borderRadius: 5,
    marginBottom: 24,
  },
})
