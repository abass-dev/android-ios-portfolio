import { StyleSheet, ScrollView } from 'react-native'
import { ExternalLink } from '../../components/ExternalLink'
import { Text, View } from '../../components/Themed'
import { Image } from 'react-native'
import { Dimensions } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Style from '../../style'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default function Story() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={Style.container}
    >
      <View style={Style.card}>
        <Image
          resizeMode='contain'
          style={Style.cardImgTop}
          source={require('../../assets/images/abassdev-about.webp')}
        />

        <Text style={Style.title}>Who is Abass Dev?</Text>

        <Text style={Style.afterTitle}></Text>

        <Text style={Style.smText}>
          Abass Ben Cheik, who goes by the name Abass Dev, is a talented full-stack developer with a passion for
          building exceptional web applications. He was born in Niamey, Niger, on February 2, 1994. He is currently 29
          years and 3 months old today.
        </Text>

        <Text style={Style.smText}>
          At a young age of 14 in 2009, Abass Dev became fascinated with the world of web development. However, he had
          no idea where to start. It wasn't until he met a friend on Skyrock, a social networking site, in 2011, that he
          was introduced to the world of blogging and tasked with administering a Wix-created blog. It was this
          experience that sparked his curiosity and ignited his passion for web development.
        </Text>

        <Text style={Style.smText}>
          In 2012, Abass Dev created his own blog on the Blogspot platform, but soon discovered its limitations.
          Determined to expand his knowledge and capabilities, he began to explore the depths of web development using
          languages such as HTML, CSS, JavaScript, PHP, SQL, and others.
        </Text>

        <Text style={Style.smText}>
          With his dedication and hard work, Abass Dev honed his skills and became a self-taught full-stack developer.
          Today, he has an impressive portfolio of work that showcases his expertise in building dynamic, responsive,
          and visually appealing web applications.
        </Text>

        <Text style={Style.smText}>
          In addition to his technical abilities, Abass Dev has a keen eye for design and aesthetics, which allows him
          to create stunning and functional user interfaces. He is always learning and staying up-to-date with the
          latest trends and technologies in the ever-evolving field of web development.
        </Text>

        <Text style={Style.smText}>
          Abass Dev is a true testament to the power of self-education and perseverance. His passion and commitment to
          his craft have led him to become a respected figure in the web development community, and a source of
          inspiration for aspiring developers around the world.
        </Text>
      </View>
    </ScrollView>
  )
}
