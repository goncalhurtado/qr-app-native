import * as React from "react";
import { Appbar } from "react-native-paper";

const Topbar = () => (
  <Appbar.Header>
    <Appbar.Content title="Qr Tool" />
    <Appbar.Action title="Scan" icon="camera" onPress={() => {}} />
  </Appbar.Header>
);

export default Topbar;
