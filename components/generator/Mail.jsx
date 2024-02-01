import React, { useState } from "react";
import { View, Keyboard } from "react-native";
import { TextInput, HelperText, Button } from "react-native-paper";
import style from "../../style/styleSheet";
import { validationEmail } from "../../helpers/validations";
import { createMailLink } from "../../helpers/createMailLink";

const Mail = ({ setData }) => {
  const [input, setInput] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState({
    boolean: false,
    type: "",
    message: "",
  });

  const handleChange = (name, value) => {
    setError({ boolean: false, type: "", message: "" });
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmmit = () => {
    if (!validationEmail(input, setError)) {
      return;
    }
    Keyboard.dismiss();
    setData(createMailLink(input));
  };

  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        label="Email"
        value={input.email}
        onChangeText={(value) => handleChange("email", value)}
        mode="outlined"
        error={error.boolean}
      />
      <HelperText type="error" visible={error.boolean}>
        {error.type === "email" ? error.message : ""}
      </HelperText>
      <TextInput
        style={style.input}
        label="Asunto"
        value={input.subject}
        onChangeText={(value) => handleChange("subject", value)}
        mode="outlined"
        error={error.boolean}
      />
      <HelperText type="error" visible={error.boolean}>
        {error.type === "subject" ? error.message : ""}
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
    </View>
  );
};

export default Mail;
