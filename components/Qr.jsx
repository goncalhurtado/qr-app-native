import { View, Alert } from "react-native";
import QRCode from "react-qr-code";
import style from "../style/styleSheet";
import ViewShot from "react-native-view-shot";
import { captureRef } from "react-native-view-shot";
import { useEffect, useRef, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import { Button, IconButton } from "react-native-paper";
import Color from "./customize/Color";
import { saveQr } from "../helpers/saveQr";
import { shareOnWp } from "../helpers/shareQr";

const Qr = ({ inputData }) => {
  const [share, setShare] = useState(false);
  const [download, setDownload] = useState(false);
  const [qrColor, setQrColor] = useState({ main: "#000000", bg: "#FFFFFF" });
  const [showMenu, setShowMenu] = useState(false);

  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

  const data = inputData || "";
  const viewShotRef = useRef();

  const createUri = async () => {
    try {
      const uri = await captureRef(viewShotRef, {
        format: "jpg",
        quality: 0.9,
      });
      return uri;
    } catch (error) {
      console.error("Oops, snapshot failed", error);
      Alert.alert("Error", "Something went wrong, try again");
    }
  };

  const onCapture = async () => {
    const uri = await createUri();
    saveQr(uri, setDownload);
  };

  const handleShare = async () => {
    const uri = await createUri();
    shareOnWp(uri, setShare);
  };

  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  useEffect(() => {
    requestPermission();
    if (data === "") {
      setQrColor({ main: "#000000", bg: "#ffffff" });
    }
  }, [data]);

  return (
    <View>
      {data != "" ? (
        <View style={style.qrContainer}>
          <ViewShot
            ref={viewShotRef}
            options={{ format: "jpg" }}
            style={{ padding: 10 }}
          >
            <QRCode value={data} bgColor={qrColor.bg} fgColor={qrColor.main} />
          </ViewShot>
        </View>
      ) : null}
      {data != "" ? (
        <>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Button
              icon="palette"
              style={style.editBtn}
              mode="outlined"
              onPress={() => setShowMenu(!showMenu)}
            >
              Personalizar
            </Button>
            <IconButton
              icon="download"
              mode="contained"
              loading={download}
              iconColor="#FFFFFF"
              containerColor="#663399"
              onPress={onCapture}
            ></IconButton>
            <IconButton
              icon="share"
              mode="contained"
              loading={share}
              iconColor="#FFFFFF"
              containerColor="#663399"
              onPress={handleShare}
            >
              Compartir
            </IconButton>
          </View>
          <View
            style={{
              display: showMenu ? "flex" : "none",
              backgroundColor: "#f0f0f0",
            }}
          >
            <Color qrColor={qrColor} setQrColor={setQrColor} />
          </View>
        </>
      ) : null}
    </View>
  );
};

export default Qr;
