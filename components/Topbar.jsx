import * as React from "react";
import { Appbar } from "react-native-paper";

const Topbar = () => (
  <Appbar.Header>
    <Appbar.Content title="Generador y lector de Qr" />
    <Appbar.Action icon="camera" disabled onPress={() => {}} />
  </Appbar.Header>
);

export default Topbar;
