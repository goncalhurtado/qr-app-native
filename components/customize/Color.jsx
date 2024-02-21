import { useEffect, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import ColorPickerComp from "./ColorPickerComp";
import { colorComp } from "../../style/styleSheet";
import { Button, IconButton } from "react-native-paper";

const Color = ({ setQrColor, qrColor }) => {
  const [toogle, setToogle] = useState(false);
  const [clean, setClean] = useState(false);

  const clearColors = () => {
    setQrColor({ main: "#000000", bg: "#ffffff" });
    setClean(false);
  };

  useEffect(() => {
    if (qrColor.main !== "#000000" || qrColor.bg !== "#ffffff") {
      setClean(true);
    }
  }, [qrColor]);
  return (
    <>
      <View style={colorComp.container}>
        <TouchableOpacity
          onPress={() => setToogle(false)}
          style={colorComp.touchable}
        >
          <View
            style={[colorComp.colorBox, { backgroundColor: qrColor.main }]}
          />
          <Text
            style={[
              colorComp.text,
              { textDecorationLine: !toogle ? "underline" : "none" },
            ]}
          >
            Color Principal
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setToogle(true)}
          style={colorComp.touchable}
        >
          <View style={[colorComp.colorBox, { backgroundColor: qrColor.bg }]} />
          <Text
            style={[
              colorComp.text,
              { textDecorationLine: toogle ? "underline" : "none" },
            ]}
          >
            Color Fondo
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => clearColors()}
          style={[colorComp.touchable, { opacity: clean ? 1 : 0 }]}
        >
          <Text style={colorComp.clean}>Limpiar</Text>
        </TouchableOpacity>
      </View>
      <View style={colorComp.colorPicker}>
        <ColorPickerComp
          setQrColor={setQrColor}
          qrColor={qrColor}
          toogle={toogle}
        />
      </View>
    </>
  );
};

export default Color;
