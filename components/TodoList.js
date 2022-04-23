import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function TodoList({ item, deleteItem }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <TouchableOpacity style={styles.item} onPress={() => setIsChecked(!isChecked)}>
      <View style={styles.itemLeft}>
        {isChecked ? (
          <Icon name = 'check-square-o' size = { 24 } color = { '#000' } />
        ) : (
          <Icon name='square-o' size={24} color={'#000'} />
        )}
        <Text style={!isChecked ? styles.itemText : styles.itemTextCrossed}>{item.value}</Text>
      </View>
      <TouchableOpacity style={styles.itemDelete}>
        <Icon name='trash' size={24} color={'#D10000'} onPress={() => deleteItem(item.key)} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    width: '100%',
    height: 60,
    marginVertical: 12.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 28,
    borderRadius: 15
  },
  itemLeft: {
    flexDirection: 'row',
    width: '80%'
  },
  itemText: {
    fontSize: 16,
    marginLeft: 12
  },
  itemTextCrossed: {
    fontSize: 16,
    marginLeft: 12,
    textDecorationLine: 'line-through'
  },
  itemDelete: {

  }
})