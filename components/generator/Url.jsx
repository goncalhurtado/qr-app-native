import React, { useState } from "react";
import { View, Keyboard } from "react-native";
import { TextInput, HelperText, Button, Text } from "react-native-paper";
import style from "../../style/styleSheet";
import { validationUrl } from "../../helpers/validations";

const Url = ({ setData }) => {
  const [input, setInput] = useState({
    url: "",
  });
  const [error, setError] = useState({
    boolean: false,
    message: "",
  });

  const handleChange = (name, value) => {
    setError(false);
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmmit = () => {
    if (!validationUrl(input, setError)) {
      return;
    }

    Keyboard.dismiss();
    setData(input.url);
  };

  return (
    <View style={style.container}>
      <View style={style.alert}>
        <Text>
          Recuerda incluir 'http://' o 'https://' al inicio de los enlaces para
          que estos sean válidos.
        </Text>
        {/* <Text>Ejemplo: https://www.ejemplo.com</Text> */}
      </View>

      <TextInput
        style={style.input}
        label="Url"
        value={input.url}
        onChangeText={(value) => handleChange("url", value)}
        mode="outlined"
        error={error.boolean}
      />
      <HelperText type="error" visible={error.boolean}>
        {error.message}
      </HelperText>
      <Button
        mode="contained"
        onPress={() => handleSubmmit()}
        style={style.button}
      >
        Generar QR
      </Button>
    </View>
  );
};

export default Url;
