import { Camera, CameraType } from "expo-camera";
import { useState, useEffect } from "react";
import { Text, View, Linking, Dimensions, StyleSheet } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { scan, style } from "../../style/styleSheet";

const Scan = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [data, setData] = useState("");

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const screenHeight = Dimensions.get("window").height;

  function handleBarCodeScanned({ data }) {
    setData(data);
  }

  function openUrl(data) {
    Linking.openURL(data);
  }

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <View style={{ height: screenHeight }}>
      {permission?.granted ? (
        <>
          <View style={scan.container}>
            <Camera
              style={scan.camera}
              type={type}
              onBarCodeScanned={handleBarCodeScanned}
              autoFocus="on"
            ></Camera>
            <IconButton
              iconColor="#663399"
              icon="camera-flip"
              style={scan.icon}
              onPress={toggleCameraType}
              size={50}
            ></IconButton>
          </View>
          <View>
            {data != "" ? (
              <Text style={scan.text} onPress={() => openUrl(data)}>
                {data}
              </Text>
            ) : (
              <Text style={scan.placeholder}>Scan a Qr</Text>
            )}
          </View>
        </>
      ) : (
        <>
          <Text style={{ textAlign: "center", margin: 5 }}>
            No access to camera
          </Text>
          <Button
            mode="contained"
            onPress={() => requestPermission()}
            style={style.button}
          >
            Allow Access
          </Button>
        </>
      )}
    </View>
  );
};

export default Scan;
