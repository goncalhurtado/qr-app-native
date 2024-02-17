import { ScrollView } from "react-native";
import Topbar from "./Topbar";
import TabsApp from "./Tabs";
import { useState, useEffect } from "react";
import Mail from "./generator/Mail";
import Url from "./generator/Url";
import Whatsapp from "./generator/Whatsapp";
import Qr from "./Qr";
import Scan from "./scanner/Scan";

const Main = () => {
  const [menu, setMenu] = useState("url");
  const [data, setData] = useState("");

  useEffect(() => {
    setData("");
  }, [menu]);
  return (
    <ScrollView>
      <Topbar setMenu={setMenu} menu={menu} />
      {menu === "camera" ? <></> : <TabsApp setMenu={setMenu} />}
      {menu === "url" && <Url setData={setData} />}
      {menu === "whatsapp" && <Whatsapp setData={setData} />}
      {menu === "mail" && <Mail setData={setData} />}
      {menu === "camera" && <Scan />}
      <Qr inputData={data} />
    </ScrollView>
  );
};

export default Main;
