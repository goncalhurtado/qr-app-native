import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    width: 150,
    alignSelf: "center",
    marginTop: 10,
  },
  input: {
    width: "100%",
    // marginBottom: 5,
  },
  qrContainer: {
    alignSelf: "center",
    width: "auto",
    padding: 10,
  },
  saveBtn: {
    width: "auto",
    alignSelf: "center",
  },
  editBtn: {
    width: "auto",
    alignSelf: "center",
    marginEnd: 5,
  },
  inputBtn: {
    width: "auto",
    margin: 0,
  },
  alert: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
});

export const scan = StyleSheet.create({
  container: {
    width: "100%",
    height: "60%",
    position: "relative",
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  icon: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    left: "50%",
    transform: [{ translateX: -40 }],
    zIndex: 2,
  },
  text: {
    color: "#663399",
    marginTop: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  placeholder: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 20,
    color: "gray",
  },
});

export default style;
