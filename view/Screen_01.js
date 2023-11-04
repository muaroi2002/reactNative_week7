import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

export default function Screen_01({ navigation }) {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require("../assets/logo.png")} style={styles.Image} />
      </View>
      <Text style={styles.TextSologan}>MANAGE YOUR TASK</Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.TextInput}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Screen_02", { name : name })}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
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
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    width: 281,
    height: 295,
  },
  TextSologan: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginTop: 20,
  },
  TextInput: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    marginTop: 20,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
  },
});
