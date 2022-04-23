import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function AppInput({ submitHandler }) {
  const [value, setValue] = useState('');

  const onChangeText = (text) => {
    setValue(text);
  }

  return (
    <View style={styles.inputWrapper}>
      <TextInput id='input' style={styles.inputText} placeholder='Add Task...' onChangeText={onChangeText} value={value} />
      <TouchableOpacity style={styles.inputButton} onPress={() => { setValue(submitHandler(value)); setValue(undefined) }}>
        <Icon name='plus' size={24} color={'#A7B600'} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputWrapper: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  inputText: {
    backgroundColor: '#fff',
    height: 60,
    width: 230,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 15
  },
  inputButton: {
    backgroundColor: '#fff',
    height: 60,
    width: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  }
})