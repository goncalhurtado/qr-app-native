import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";

const Mail = () => {
  const [text, setText] = useState({
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (name, value) => {
    setText((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        label="Email"
        value={text.email}
        onChangeText={(value) => handleChange("email", value)}
        mode="outlined"
      />
      <TextInput
        label="Asunto"
        value={text.asunto}
        onChangeText={(value) => handleChange("asunto", value)}
        mode="outlined"
      />
      <TextInput
        label="Mensaje"
        value={text.mensaje}
        multiline={true}
        numberOfLines={4}
        onChangeText={(value) => handleChange("mensaje", value)}
        mode="outlined"
      />
    </View>
  );
};

export default Mail;
