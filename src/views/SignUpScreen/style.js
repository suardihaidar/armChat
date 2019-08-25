import { StyleSheet } from "react-native";

const offset = 16;
const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset
  },
  nameInput: {
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: "#111111",
    borderWidth: 1,
    fontSize: offset
  },
  buttonText: {
    marginLeft: offset,
    fontSize: 42
  }
});

export default styles;
