import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { KeyboardAvoidingView, TextInput, Pressable, StyleSheet, Platform } from 'react-native'
import { Text, View } from '../components/Themed'
import emailjs from '@emailjs/browser'

export default function ContactScreen() {
  const [message, setMessage] = useState()
  const [isLoading, setLoading] = useState(false)
  
  const [inputValue, setInputValue] = useState({
    name: null,
    subject: null,
    email: null,
    message: null,
  })

  const handleSend = () => {
    const { name, subject, email, message } = inputValue
    
      const templateParams = {
      user_name: name.trim(),
      to_name: 'Abass Dev',
      from_name: name.trim(),
      from_subject: subject.trim(),
      from_email: email.trim(),
      reply_to: email.trim(),
      message: message.trim(),
    }
    setLoading(true)
    emailjs.send('service_jebasxm', 'template_mduuz2e', templateParams, '9QHGoEPmDaBELUbZn').then(
      (response) => {
        alert('Message sent!')
        inputValue.name = ''
        inputValue.subject = ''
        inputValue.email = ''
        setLoading(false)
      },
      (err) => {
        console.log(err)
        setMessage({ success: null, error: 'Internal server error, technical issues!' })
        setLoading(false)
      },
    )
  
  }

  return (
    <View 
    style={styles.contact}>
    <View style={styles.contactDetails}>
    <Text style={styles.contactDetails.item}>Name: Abass Dev</Text>
    <Text style={styles.contactDetails.item} >Phone: +233 59 820 8469</Text>
    <Text style={styles.contactDetails.item}>Email: abass@abassdev.com</Text>
    </View>
    <KeyboardAvoidingView
    style={{backgroundColor: '#fff', padding: 10, borderRadius: 5, elevation: 1}}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.label}>Name: </Text>
      <TextInput
        onChangeText={(e) => setInputValue((prev) => ({ ...prev, name: e }))}
        placeholder='E.g: John Doe'
        style={styles.input}
      />
      <Text style={styles.label}>Subject: </Text>
      <TextInput
        onChangeText={(e) => setInputValue((prev) => ({ ...prev, subject: e }))}
        placeholder='E.g: Opportunity'
        style={styles.input}
      />
      <Text style={styles.label}>Email: </Text>
      <TextInput
        onChangeText={(e) => setInputValue((prev) => ({ ...prev, email: e }))}
        placeholder='E.g: john@gmail.com'
        style={styles.input}
      />
      <Text style={styles.label}>Message: </Text>
      <TextInput
        onChangeText={(e) => setInputValue((prev) => ({ ...prev, message: e }))}
        multiline={true}
        numberOfLines={2}
        placeholder='Write something...'
        style={styles.input}
      />
      <Pressable
        onPress={handleSend}
        style={({ pressed }) => [
          styles.btnSend,
          {
            opacity: pressed ? 0.5 : 1,
          },
        ]}
      >
        <Text style={styles.btnSendText}>Send</Text>
      </Pressable>
    </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  contact: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000010',
    padding: 15,
  },
  input: {
    padding: 5,
    width: '100%',
    backgroundColor: '#fff',
    fontSize: 26,
    borderRadius: 5,
    borderWidth: 0.8,
    fontFamily: 'UbuntuRegular',
    borderColor: '#00000020',
    color: '#00000090',
    marginBottom: 15,
  },
  
  label: {
    color: 'gray',
    fontFamily: 'UbuntuRegular',
    fontSize: 18,
    marginBottom: 1,
  },
  btnSend: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#00000090',
  },

  btnSendText: {
    textAlign: 'center',
    fontFamily: 'UbuntuRegular',
    fontSize: 24,
    color: '#ffffffee',
  },
  
  contactDetails: {
    marginBottom: 20,
    backgroundColor: 'transparent',
    gap: 15,
    
    item: {
      fontSize: 20,
      fontFamily: 'UbuntuRegular',
      color: '#00000090'
    }
  }
})
