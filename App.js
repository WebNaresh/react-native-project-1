import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import InputField from "./components/InputField";

export default function App() {
  const [arrayOfText, setArrayOfText] = useState([]);
  const [open, setOpen] = useState(false);
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" onPress={() => setOpen(true)} />
        <InputField {...{ setArrayOfText, open, setOpen }} />
        <FlatList
          data={arrayOfText}
          renderItem={({ index, item }) => (
            <GoalItem {...{ index, item, setArrayOfText }} />
          )}
          style={{ gap: 10, marginVertical: 10 }}
        ></FlatList>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
});
