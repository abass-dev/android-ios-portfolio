import { StyleSheet, ScrollView } from 'react-native'
import { ExternalLink } from '../../components/ExternalLink'
import { Text, View } from '../../components/Themed'
import { Image } from 'react-native'
import { Dimensions } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Style from '../../style'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Item = ({imgTop, techText, title, desc}) => {
  return (
        <View style={Style.card}>
        <Image resizeMode='contain' style={Style.cardImgTop} source={imgTop} />
        <View style={styles.tech}>
        <FontAwesome size={20} name='code'/>
        <Text style={styles.techText}>{techText}</Text>
        </View>
        <Text style={Style.title}>{title}</Text>
        <Text style={Style.afterTitle}></Text>
        <Text style={Style.smText}>{desc}</Text>
      </View>
    )
}

export default function Projects() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={Style.container}
    >
    
    <Item 
      title='NigaPHP Framework'
      imgTop={require('../../assets/images/php_code.webp')}
      techText='PHP, JavaScript, SASS, Shell & Twig'
      desc='NigaPHP is a lightweight PHP web application framework designed to simplify and speed up the development process for PHP developers. It was initially created by Abass Dev and has since been maintained and contributed to by a community of developers. With its user-friendly interface and powerful features, NigaPHP has become a popular choice for building scalable and secure web applications.'
    />
    
    <Item 
      title='Form builder'
      imgTop={require('../../assets/images/project-nigatedev.webp')}
      techText='PHP, HTML, Bootstrap'
      desc='Looking for a user-friendly solution for building HTML forms? Check out Form Builder, an open-source project created by Abass Dev. The project is built with PHP and styled using Bootstrap CSS, making it simple to create custom forms with ease.'
    />
    
    <Item 
      title='Fakaray'
      imgTop={require('../../assets/images/fakaray.webp')}
      techText='React, Firebase & SASS'
      desc='Fakaray is a user-friendly chat application that enables seamless communication between friends and family. With its intuitive interface and robust features, Fakaray offers a chat experience that is comparable to that of other popular chat apps on the market.'
    />
    
    <Item 
      title='My portfolio (abassdev.com)'
      imgTop={require('../../assets/images/project-portfolio.webp')}
      techText='React, NodeJs, Express & Firebase'
      desc='This portfolio was build using ReactJs. By using ReactJs, the developer can create reusable UI components that can be used across the entire application, making it easier to maintain and update. ReactJs also provides a virtual DOM (Document Object Model) that allows for faster updates to the user interface compared to traditional web development techniques.'
    />
    
    <Item 
      title='Dynacard'
      imgTop={require('../../assets/images/php_code.webp')}
      techText='JavaScript'
      desc='Dynacard is a React Native library that enables developers to effortlessly design visually stunning cards for their applications. This open-source library provides a flexible and customizable platform for creating beautiful cards within your React Native project.'
    />
    
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  tech: {
    marginTop: 15,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  
  techText: {
    color: '#00000090'
  }
})
