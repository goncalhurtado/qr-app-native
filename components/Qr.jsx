import { View } from "react-native";
import QRCode from "react-qr-code";
import style from "../style/styleSheet";

const Qr = ({ inputData }) => {
  const data = inputData || "";

  return (
    <View>
      {data != "" ? (
        <View style={style.qrContainer}>
          <QRCode value={data} />
        </View>
      ) : null}
    </View>
  );
};

export default Qr;
