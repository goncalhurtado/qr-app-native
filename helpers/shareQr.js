import * as Sharing from "expo-sharing";

export const shareOnWp = async (uri) => {
  try {
    await Sharing.shareAsync(uri, {
      dialogTitle: "Compartir QR",
      mimeType: "image/jpg",
      UTI: "image/jpg",
    });
  } catch (error) {
    console.error("Error al compartir", error);
  }
};
