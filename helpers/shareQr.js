import * as Sharing from "expo-sharing";

export const shareOnWp = async (uri, setLoading) => {
  try {
    setLoading(true);
    await Sharing.shareAsync(uri, {
      dialogTitle: "Compartir QR",
      mimeType: "image/jpg",
      UTI: "image/jpg",
    });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.error("Error al compartir", error);
  }
};
