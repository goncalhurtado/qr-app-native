import { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Alert,
  ActivityIndicator,
} from "react-native";
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

  return (
    <View>
      <ColorPicker
        selectedColor={toogle ? selectedColor.bg : selectedColor.main}
        row={true}
        color={toogle ? qrColor.bg : qrColor.main}
        onColorChangeComplete={(color) => onColorChange(color)}
        wheelLodingIndicator={<ActivityIndicator size={10} />}
        sliderLodingIndicator={<ActivityIndicator size={10} />}
        useNativeDriver={false}
        useNativeLayout={false}
      />
    </View>
  );
};

export default ColorPickerComp;
