import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

// ScrollView Renders all elements thats not good for super long lists
// A better solution is the FlatList
// Flatlist
export default function App() {
  const [modalIsVisible, setModalIsvisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    // setCourseGoals((currentGoals) => [
    //   ...currentGoals,
    //   { text: enteredGoalText, key: Math.random().toString() },
    // ]);
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== id)
    );
  };

  const showModalHandler = () => {
    setModalIsvisible(!modalIsVisible);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={showModalHandler}
        />
        <GoalInput
          addGoalHandler={addGoalHandler}
          visible={modalIsVisible}
          onCancel={showModalHandler}
        />
        <View style={styles.goalsContainer}>
          {/* <ScrollView>
          {courseGoals.map((goal, i) => (
            <View key={i} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  itemData={itemData}
                  onDeleteGoal={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    // Left and Right
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});

/* 
flex: 1
flexDirection: 'column' | 'row'
justifyContent: 'flex-start' | 'space-between'
alighItems: 'flex-start' | 'space-between'
*/
