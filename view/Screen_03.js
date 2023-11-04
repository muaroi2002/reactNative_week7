import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Screen_03({ navigation, route }) {
  const { taskToEdit, onAddTask, onEditTask } = route.params;
  const [task, setTask] = useState("");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (taskToEdit) {
      // Nếu có task để chỉnh sửa, bật chế độ chỉnh sửa
      setEditMode(true);
      setTask(taskToEdit.name);
    }
  }, [taskToEdit]);

  const handleFinish = () => {
    if (editMode) {
      // Xử lý chỉnh sửa nhiệm vụ
      onEditTask({ ...taskToEdit, name: task });
    } else {
      // Xử lý thêm mới nhiệm vụ
      if (task.trim() !== "") {
        onAddTask({ name: task, description: "" });
      }
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{editMode ? "Edit your job" : "Add your job"}</Text>
      <TextInput
        style={styles.input}
        placeholder="Your job"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Finish" onPress={handleFinish} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
});
