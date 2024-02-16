import * as React from "react";
import { Appbar } from "react-native-paper";

const Topbar = ({ setMenu, menu }) => (
  <Appbar.Header>
    <Appbar.Content title="Qr Tool" />
    {menu !== "camera" ? (
      <Appbar.Action
        title="Scan"
        icon="qrcode-scan"
        onPress={() => {
          setMenu("camera");
        }}
      />
    ) : (
      <Appbar.Action
        title="back"
        icon="close"
        onPress={() => {
          setMenu("url");
        }}
      />
    )}
  </Appbar.Header>
);

export default Topbar;
