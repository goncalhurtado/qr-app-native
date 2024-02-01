import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";

const Url = () => {
  const [text, setText] = useState("");
  return (
    <View style={{ padding: 10 }}>
      <TextInput
        label="Url"
        value={text}
        onChangeText={(text) => setText(text)}
        mode="outlined"
      />
    </View>
  );
};

export default Url;
