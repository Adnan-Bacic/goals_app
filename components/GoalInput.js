import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal)

        setEnteredGoal('')
    }

    return(
        //prop from app.js to toggle visibility
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.container}>
                <TextInput onChangeText={goalInputHandler} value={enteredGoal} placeholder="Course goals" style={styles.textInput}></TextInput>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button onPress={props.onCancel} title="Cancel" color="red"></Button>
                    </View>
                    <View style={styles.button}>
                        <Button onPress={addGoalHandler} title="Add"></Button>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      },
      textInput:{
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        marginBottom: 10
      },
      buttonContainer:{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '60%'
      },
      button:{
          width: '40%'
      }
})

export default GoalInput