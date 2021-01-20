import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

const App = () => {

  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (goalTitle) => {
    //console.log(enteredGoal)

    setCourseGoals(currentGoals => {
        //spread operator. adds the new item to a new array
        return [...currentGoals, { id: Math.random().toString(), value: goalTitle }]
    })

    //remove modal after adding a goal
    setIsAddMode(false)
  }

  const removeGoalHandler = (goalID) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalID)
    })
  }

  const showModal = () => {
    setIsAddMode(true)
  }

  const cancelGoalAddHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.containerOuter}>
      <StatusBar style="auto" />
      <Button onPress={showModal} title="Add new goal"></Button>
      <GoalInput onCancel={cancelGoalAddHandler} visible={isAddMode} onAddGoal={addGoalHandler}></GoalInput>
      <View>
      <FlatList keyExtractor={(item, index) => item.id} data={courseGoals} renderItem={itemData =>  (
        // data from array of object in the state
        <GoalItem onDelete={removeGoalHandler} id={itemData.item.id} title={itemData.item.value}></GoalItem>
      )}>
      </FlatList>
      {/*
      <ScrollView>
        {courseGoals.map((goal, index) => {
          return (
              <View key={index} style={styles.listItem}>
                <Text>{goal}</Text>
              </View>
          )
        })}
        </ScrollView>
      */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOuter:{
    padding: 50
  }
});

export default App