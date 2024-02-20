import * as MediaLibrary from "expo-media-library";
import { Alert } from "react-native";

export const saveQr = async (uri, setDownload) => {
  try {
    setDownload(true);
    const asset = await MediaLibrary.createAssetAsync(uri);
    await MediaLibrary.createAlbumAsync("Qr Tool", asset, false);
    setDownload(false);
    Alert.alert("Saved", "Your QR has been saved on gallery");
  } catch (error) {
    console.error("Oops, snapshot failed", error);
    setDownload(false);
    Alert.alert("Error", "Something went wrong, try again");
  }
};
