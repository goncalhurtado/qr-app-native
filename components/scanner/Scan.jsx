import { Camera, CameraType } from "expo-camera";
import { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import { TextInput, HelperText, Button } from "react-native-paper";

const Scan = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  console.log(permission?.granted);
  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <View>
      {permission?.granted ? (
        <>
          <Camera style={{ height: 500 }} type={type} />
          <TouchableOpacity onPress={toggleCameraType}>
            <Button icon="camera-flip"></Button>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={{ textAlign: "center", margin: 5 }}>
            No access to camera
          </Text>
          <Button
            mode="contained"
            onPress={() => requestPermission()}
            // style={style.button}
          >
            Allow Access
          </Button>
        </>
      )}
    </View>
  );
};
export default Scan;
