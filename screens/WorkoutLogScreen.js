import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const WorkoutLogScreen = () => {
  const [exercise, setExercise] = useState('');
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');

  const handleAddWorkout = () => {
    // TODO: add workout to database or log it locally
    console.log(`Logged workout: ${exercise} ${weight} lbs x ${reps} reps`);
    setExercise('');
    setWeight('');
    setReps('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log Your Workout</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Exercise</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setExercise(text)}
          value={exercise}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Weight (lbs)</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setWeight(text)}
          value={weight}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Reps</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setReps(text)}
          value={reps}
        />
      </View>
      <Button
        title="Log Workout"
        onPress={handleAddWorkout}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 10,
    width: '80%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    width: '80%',
  },
});

export default WorkoutLogScreen;
