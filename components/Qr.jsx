import { View, TouchableOpacity, Text } from "react-native";
import QRCode from "react-qr-code";
import style from "../style/styleSheet";
import ViewShot from "react-native-view-shot";
import { captureRef } from "react-native-view-shot";
import { useEffect, useRef, useState } from "react";
import * as MediaLibrary from "expo-media-library";

const Qr = ({ inputData }) => {
  const [capture, setCapture] = useState(false);
  const data = inputData || "";
  const viewShotRef = useRef();

  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

  const onCapture = async () => {
    captureRef(viewShotRef, {
      format: "jpg",
      quality: 0.8,
    }).then(
      async (uri) => {
        console.log("Image saved to", uri);
        const asset = await MediaLibrary.createAssetAsync(uri);
        await MediaLibrary.createAlbumAsync("Download", asset, false);
      },
      (error) => console.error("Oops, snapshot failed", error)
    );
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <View>
      {data != "" ? (
        <ViewShot
          ref={viewShotRef}
          captureMode="mount"
          options={{ format: "jpg" }}
        >
          <View style={style.qrContainer}>
            <QRCode value={data} />
          </View>
        </ViewShot>
      ) : null}
      <TouchableOpacity onPress={onCapture}>
        <Text>Descargar QR como imagen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Qr;
