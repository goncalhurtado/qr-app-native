import React, { useState } from "react";
import { View, Keyboard } from "react-native";
import { TextInput, HelperText, Button } from "react-native-paper";
import style from "../../style/styleSheet";
import { validationUrl } from "../../helpers/validations";

const Url = () => {
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
  };

  return (
    <View style={style.container}>
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
