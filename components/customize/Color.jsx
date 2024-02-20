import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import ColorPickerComp from "./ColorPickerComp";

const Color = ({ setQrColor, qrColor }) => {
  const [toogle, setToogle] = useState(false);

  return (
    <>
      <View
        style={{ flexDirection: "row", justifyContent: "center", margin: 10 }}
      >
        <TouchableOpacity
          onPress={() => setToogle(false)}
          style={{ flexDirection: "row", alignItems: "center" }}
          onTouc
        >
          <View
            style={{
              margin: 5,
              padding: 0,
              width: 20,
              height: 20,
              borderWidth: 1,
              borderColor: "black",
              backgroundColor: qrColor.main,
            }}
          />
          <Text
            style={{
              margin: 0,
              padding: 0,
              marginBottom: 1,
              textDecorationLine: !toogle ? "underline" : "none",
            }}
          >
            Color Principal
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setToogle(true)}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <View
            style={{
              margin: 5,
              marginLeft: 20,
              padding: 0,
              width: 20,
              height: 20,
              borderWidth: 1,
              borderColor: "black",
              backgroundColor: qrColor.bg,
            }}
          />
          <Text
            style={{
              margin: 0,
              padding: 0,
              textDecorationLine: toogle ? "underline" : "none",
            }}
          >
            Color Fondo
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ margin: 5 }}>
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
