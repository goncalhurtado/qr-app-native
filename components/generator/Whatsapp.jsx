import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";

const Whatsapp = () => {
  const [text, setText] = useState({
    number: "",
    message: "",
  });

  const handleChange = (name, value) => {
    setText((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        label="Numero de Whatsapp"
        value={text.number}
        onChangeText={(value) => handleChange("number", value)}
        mode="outlined"
      />
      <TextInput
        label="Mensaje (opcional)"
        value={text.message}
        multiline={true}
        numberOfLines={4}
        onChangeText={(value) => handleChange("message", value)}
        mode="outlined"
      />
    </View>
  );
};

export default Whatsapp;
