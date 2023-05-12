import { useState, useRef, forwardRef } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { ExternalLink } from '../../components/ExternalLink'
import { Text, View } from '../../components/Themed'
import { TouchableOpacity, Image, Dimensions } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Style from '../../style'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const lists = [
  {
    id: 1,
    title: 'HTML',
    desc: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.'
 },
  {
    id: 2,
    title: 'CSS',
    desc: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.'
  }
]


const Item = ({techTitle, data}) => {
  const [show, setShow] = useState(false)
  
  const dropItem = () => {
    setShow(!show)
  }
  
  return (
        <View  style={styles.card}>
        <Text style={styles.techTitle}>{techTitle}</Text>
        {lists.map((value, index) => {
          return (
          <TouchableOpacity onPress={dropItem} key={value.id}>
            <View style={styles.itemDropDown}>
              <Text style={styles.itemTitle}>{value.title}</Text>
              <FontAwesome  color='#00000090' size={20} style={styles.chevron} name='chevron-down' />
            </View>
            <Text  style={[styles.itemDesc, {display: show ? 'flex' : 'none'}]}>{value.desc}</Text>
          </TouchableOpacity>
          )
        })}
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
    <Item techTitle='Front-End Knowledge' />
    <Item techTitle='Back-End Knowledge' />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginBottom: 25,
    borderRadius: 5
  },
  
  itemDropDown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 3,
    paddingVertical: 15,
    borderBottomColor: '#00000020',
  },
  
 techTitle: {
   fontSize: 30,
   color: '#00000090'
 },
 
 itemTitle: {
   fontSize: 20,
   color: '#00000090'
 },
 
 itemDesc: {
   display: 'none',
   color: '#00000090'
 }
})
