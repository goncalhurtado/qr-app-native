import * as MediaLibrary from "expo-media-library";
import { Alert } from "react-native";

export const saveQr = async (uri, setLoading) => {
  try {
    setLoading(true);
    const asset = await MediaLibrary.createAssetAsync(uri);
    await MediaLibrary.createAlbumAsync("Qr Tool", asset, false);
    setLoading(false);
    Alert.alert("Saved", "Your QR has been saved on gallery");
  } catch (error) {
    console.error("Oops, snapshot failed", error);
    setLoading(false);
    Alert.alert("Error", "Something went wrong, try again");
  }
};
