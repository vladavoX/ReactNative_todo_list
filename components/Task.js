import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const Task = (props) => {
  const [done, setDone] = useState(false);

  const handleOnPress = React.useCallback(() => {
    setDone(v => !v);
  }, []);

  return (
    <TouchableOpacity style={styles.item} onPress={() => handleOnPress()}>
      <View style={styles.itemLeft}>
        <View style={styles.square}><Text style={styles.check}>{done ? <Icon name='check' color={'#0A901F'} size={20} /> : ''}</Text></View>
        <Text style={!done ? styles.itemText : styles.itemTextCrossed}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    width: '100%',
    height: 60,
    paddingHorizontal: 28,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF666',
    opacity: 1,
    borderRadius: 5,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  check: {
    opacity: 1
  },
  itemText: {
    maxWidth: '80%',
  },
  itemTextCrossed: {
    maxWidth: '80%',
    textDecorationLine: 'line-through'
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5
  }
});

export default Task