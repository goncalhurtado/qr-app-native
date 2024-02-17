import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Alert,
  ActivityIndicator,
} from "react-native";
import ColorPicker from "react-native-wheel-color-picker";

const Color = ({ setColor, color }) => {
  return (
    <View>
      <ColorPicker
        row={true}
        color={color}
        onColorChange={setColor}
        wheelLodingIndicator={<ActivityIndicator size={40} />}
        sliderLodingIndicator={<ActivityIndicator size={20} />}
        useNativeDriver={false}
        useNativeLayout={false}
      />
    </View>
  );
};

export default Color;
