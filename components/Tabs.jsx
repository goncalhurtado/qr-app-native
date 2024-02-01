import { Tabs, TabScreen, TabsProvider } from "react-native-paper-tabs";
import { View } from "react-native";

function TabsApp({ setMenu }) {
  return (
    <TabsProvider defaultIndex={0}>
      <Tabs uppercase={true} disableSwipe={false}>
        <TabScreen
          label="Url"
          onPress={() => {
            setMenu("url");
          }}
        >
          <></>
        </TabScreen>
        <TabScreen
          label="Whatsapp"
          onPress={() => {
            setMenu("whatsapp");
          }}
        >
          <></>
        </TabScreen>
        <TabScreen
          label="Mail"
          onPress={() => {
            setMenu("mail");
          }}
        >
          <></>
        </TabScreen>
      </Tabs>
    </TabsProvider>
  );
}
export default TabsApp;
