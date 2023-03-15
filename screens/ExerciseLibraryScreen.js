import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExerciseLibraryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercise Library</Text>
      <View style={styles.exerciseContainer}>
        <Text style={styles.exercise}>Bench Press</Text>
        <Text style={styles.exercise}>Squats</Text>
        <Text style={styles.exercise}>Deadlifts</Text>
        <Text style={styles.exercise}>Pull-Ups</Text>
        <Text style={styles.exercise}>Push-Ups</Text>
      </View>
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
  exerciseContainer: {
    alignItems: 'flex-start',
  },
  exercise: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ExerciseLibraryScreen;
