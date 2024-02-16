import * as React from "react";
import { Appbar } from "react-native-paper";

const Topbar = ({ setMenu }) => (
  <Appbar.Header>
    <Appbar.Content title="Qr Tool" />
    <Appbar.Action
      title="Scan"
      icon="camera"
      onPress={() => {
        setMenu("camera");
      }}
    />
  </Appbar.Header>
);

export default Topbar;
