import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, Text, FlatList, Keyboard } from 'react-native';

import AddInput from './components/AppInput'
import TodoList from './components/TodoList'

export default function App() {
  const [data, setData] = useState([]);

  const submitHandler = (value) => {
    if (value === undefined || value === '') {
      return alert("Task shouldn't be emtpy!")
    }
    setData((prevTodo) => {
      return [
        {
          value: value,
          key: Math.random().toString()
        },
        ...prevTodo
      ]
    });
    Keyboard.dismiss();
  }

  const deleteItem = (key) => {
    setData((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Tasks</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <TodoList item={item} deleteItem={deleteItem} />}
        showsVerticalScrollIndicator={false}
      />
      <AddInput style={styles.input} submitHandler={submitHandler} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#355AB8',
    paddingHorizontal: 35,
    paddingVertical: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    paddingTop: 40,
    paddingBottom: 10
  }
});
