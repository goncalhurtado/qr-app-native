import { useEffect, useState } from "react";
import { View, Dimensions, ActivityIndicator } from "react-native";
import ColorPicker from "react-native-wheel-color-picker";

const ColorPickerComp = ({ setQrColor, qrColor, toogle }) => {
  const [selectedColor, setSelectedColor] = useState({
    main: qrColor.main,
    bg: qrColor.bg,
  });

  function onColorChange(color) {
    if (toogle) {
      setQrColor({ ...qrColor, bg: color });
    }
    if (!toogle) {
      setQrColor({ ...qrColor, main: color });
    }
  }

  const screenWidth = Dimensions.get("window").width;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        paddingBottom: 10,
      }}
    >
      <ColorPicker
        selectedColor={toogle ? selectedColor.bg : selectedColor.main}
        row={false}
        color={toogle ? qrColor.bg : qrColor.main}
        onColorChangeComplete={(color) => onColorChange(color)}
        wheelLodingIndicator={<ActivityIndicator size={10} />}
        sliderLodingIndicator={<ActivityIndicator size={10} />}
        useNativeDriver={false}
        useNativeLayout={false}
        thumbSize={40}
        palette={[
          "#000000",
          "#FFFFFF",
          "#ed1c24",
          "#d11cd5",
          "#1633e6",
          "#00aeef",
          "#00c85d",
          "#57ff0a",
          "#ffde17",
          "#f26522",
        ]}
        style={{ width: screenWidth * 0.8 }}
        // swatchesLast={false}
      />
    </View>
  );
};

export default ColorPickerComp;
