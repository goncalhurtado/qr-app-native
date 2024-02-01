import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import style from "../../style/styleSheet";

const Url = () => {
  const [text, setText] = useState("");
  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        label="Url"
        value={text}
        onChangeText={(text) => setText(text)}
        mode="outlined"
      />
      <Button
        mode="contained"
        onPress={() => console.log("Pressed")}
        style={style.button}
      >
        Generar QR
      </Button>
    </View>
  );
};

export default Url;
