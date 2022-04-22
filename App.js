import React, { useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import Task from './components/Task'

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const handleDelete = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>My Tasks</Text>

        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <View style={styles.item} key={index}>
                  <Task text={item}/>
                  <TouchableOpacity style={styles.delete} onPress={() => handleDelete(index)}>
                    <Text><Icon name='trash' size={24} color={'#D10000'} /></Text>
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write your task...'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#355AB8',
  },
  tasksWrapper: {
    paddingTop: 60,
    paddingHorizontal: 35
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  items: {
    marginTop: 30,
  },
  item: {
    flexDirection: 'row'
  },
  delete: {
    position: 'absolute',
    right: 28,
    top: 18
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 35
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    width: 230,
    textAlign: 'center'
  },
  addWrapper: {
    width: 64,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addText: {
    fontSize: 24,
    color: '#A7B600'
  },
});
