import { View, ScrollView, TouchableOpacity, Text, Alert } from "react-native";
import QRCode from "react-qr-code";
import style from "../style/styleSheet";
import ViewShot from "react-native-view-shot";
import { captureRef } from "react-native-view-shot";
import { useEffect, useRef, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import { Button } from "react-native-paper";

const Qr = ({ inputData }) => {
  const [download, setDownload] = useState(false);
  const data = inputData || "";
  const viewShotRef = useRef();

  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

  const onCapture = async () => {
    try {
      setDownload(true);
      const uri = await captureRef(viewShotRef, {
        format: "jpg",
        quality: 0.8,
      });
      console.log("Image saved to", uri);
      const asset = await MediaLibrary.createAssetAsync(uri);
      await MediaLibrary.createAlbumAsync("Qr Tool", asset, false);
      setDownload(false);
      Alert.alert("Saved", "Your QR has been saved on gallery");
    } catch (error) {
      console.error("Oops, snapshot failed", error);
      setDownload(false);
      Alert.alert("Error", "Something went wrong, try again");
    }
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
      <Button
        style={style.saveBtn}
        mode="outlined"
        onPress={onCapture}
        loading={download}
      >
        Save on Gallery
      </Button>
    </View>
  );
};

export default Qr;
