import { Text, View } from "react-native";
import Topbar from "./Topbar";
import TabsApp from "./Tabs";
import { useState } from "react";
import Mail from "./generator/Mail";
import Url from "./generator/Url";
import Whatsapp from "./generator/Whatsapp";

const Main = () => {
  const [menu, setMenu] = useState("url");
  return (
    <View>
      <Topbar />
      <TabsApp setMenu={setMenu} />
      {menu === "url" && <Url />}
      {menu === "whatsapp" && <Whatsapp />}
      {menu === "mail" && <Mail />}
    </View>
  );
};

export default Main;
