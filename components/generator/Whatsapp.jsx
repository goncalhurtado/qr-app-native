import React, { useState } from "react";
import { View, Keyboard, ScrollView } from "react-native";
import { TextInput, HelperText, Button } from "react-native-paper";
import style from "../../style/styleSheet";
import { validationWhatsapp } from "../../helpers/validations";
import { createWpLink } from "../../helpers/createWpLink";

const Whatsapp = ({ setData }) => {
  const [input, setInput] = useState({
    number: "",
    message: "",
  });
  const [error, setError] = useState({
    type: "",
    boolean: false,
    message: "",
  });

  const handleChange = (name, value) => {
    setError({
      type: "",
      boolean: false,
      message: "",
    });
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };
  console.log(error);
  const handleSubmmit = () => {
    if (!validationWhatsapp(input, setError)) {
      return;
    }

    Keyboard.dismiss();

    setData(createWpLink(input));
  };

  return (
    <ScrollView style={style.container}>
      <TextInput
        style={style.input}
        label="Numero de Whatsapp"
        value={input.number}
        onChangeText={(value) => handleChange("number", value)}
        mode="outlined"
        error={error.boolean}
        keyboardType="number-pad"
      />
      <HelperText type="error" visible={error.boolean}>
        {error.type === "number" ? error.message : ""}
      </HelperText>
      <TextInput
        style={style.input}
        label="Mensaje"
        value={input.message}
        multiline={true}
        numberOfLines={4}
        onChangeText={(value) => handleChange("message", value)}
        mode="outlined"
        error={error.boolean}
      />
      <HelperText type="error" visible={error.boolean}>
        {error.type === "message" ? error.message : ""}
      </HelperText>
      <Button
        mode="contained"
        onPress={() => handleSubmmit()}
        style={style.button}
      >
        Generar QR
      </Button>
    </ScrollView>
  );
};

export default Whatsapp;
