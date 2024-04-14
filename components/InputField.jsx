import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const InputField = ({ setArrayOfText, open, setOpen }) => {
  const [textValue, setTextValue] = useState("");
  return (
    <Modal visible={open} animationType="slide">
      <View style={styles.modalStyle}>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/images/goal.png")}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <View style={styles.topContainer}>
          <TextInput
            keyboardType="email-address"
            style={styles.inputContainer}
            placeholder="Your course goal!"
            value={textValue}
            onChangeText={(text) => setTextValue(text)}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            height: "40%",
          }}
        >
          <Button
            onPress={(e) => {
              setArrayOfText((prev) => [...prev, textValue]);
              setTextValue("");
              setOpen(false);
            }}
            color={"#a10ef7"}
            title="Add Goal"
          />
          <Button
            color={"#4c006c"}
            onPress={(e) => {
              setOpen(false);
            }}
            title="Cancel"
          />
        </View>
      </View>
    </Modal>
  );
};

export default InputField;

const styles = StyleSheet.create({
  topContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  inputContainer: {
    borderColor: "#484848",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    marginRight: 10,
    color: "#fff",
  },
  modalStyle: {
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    backgroundColor: "#4824cb",
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
