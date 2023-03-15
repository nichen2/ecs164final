import React from 'react';
import WorkoutLogScreen from './screens/WorkoutLogScreen';
import ExerciseLibraryScreen from './screens/ExerciseLibraryScreen';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('./assets/fitlife_logo.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Workout Log"
          onPress={() => navigation.navigate('WorkoutLog')}
          style={styles.button}
        />
        <Button
          title="Exercise Library"
          onPress={() => navigation.navigate('ExerciseLibrary')}
          style={styles.button}
        />
        <Button
          title="AI Coach"
          onPress={() => navigation.navigate('AICoach')}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const AICoach = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>To soon be implemented</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WorkoutLog" component={WorkoutLogScreen} />
        <Stack.Screen name="ExerciseLibrary" component={ExerciseLibraryScreen} />
        <Stack.Screen name="AICoach" component={AICoach} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 5, // add some space at the bottom of the logo
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 5, // reduce the space at the top of the buttons
  },
  button: {
    width: 200,
    marginBottom: 50, // add some space between buttons
  },
});

export default App;
