import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

import Colors from "../../constants/colors";

function GuessLogItem({ roundNumber, guess }) {
  const { width, height } = useWindowDimensions();

  const landscapeListView = width > 500 ? "61%" : "100%";
  return (
    <View style={[styles.listItem, { width: landscapeListView }]}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
