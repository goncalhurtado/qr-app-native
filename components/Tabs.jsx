import { Tabs, TabScreen, TabsProvider } from "react-native-paper-tabs";
import Url from "../components/generator/Url";
import Whatsapp from "../components/generator/Whatsapp";
import Mail from "../components/generator/Mail";
import { View } from "react-native";

function TabsApp() {
  return (
    <TabsProvider
      defaultIndex={2}
      // onChangeIndex={handleChangeIndex} optional
    >
      <Tabs
        uppercase={true} // true/false | default=true (on material v2) | labels are uppercase
        // showTextLabel={false} // true/false | default=false (KEEP PROVIDING LABEL WE USE IT AS KEY INTERNALLY + SCREEN READERS)
        // iconPosition // leading, top | default=leading
        // style={{ backgroundColor:'#fff' }} // works the same as AppBar in react-native-paper
        // dark={false} // works the same as AppBar in react-native-paper
        // theme={} // works the same as AppBar in react-native-paper
        // mode="scrollable" // fixed, scrollable | default=fixed
        // showLeadingSpace={true} //  (default=true) show leading space in scrollable tabs inside the header
        disableSwipe={false} // (default=false) disable swipe to left/right gestures
      >
        <TabScreen label="Url">
          <Url />
        </TabScreen>
        <TabScreen label="Whatsapp">
          <Whatsapp />
        </TabScreen>
        <TabScreen
          label="Mail"
          // optional props
          // badge={true} // only show indicator
          // badge="text"
          // badge={1}
          // onPressIn={() => {
          //   console.log('onPressIn explore');
          // }}
          // onPress={() => {
          //   console.log('onPress explore');
          // }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Mail />
          </View>
        </TabScreen>
      </Tabs>
    </TabsProvider>
  );
}
export default TabsApp;
