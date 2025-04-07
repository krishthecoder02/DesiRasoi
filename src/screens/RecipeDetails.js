import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import Header from "../components/Header";

const RecipeDetails = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>🍛 {item.dish} बनाने की विधि:</Text>
      </View>

      <FlatList
        data={item.vidhi}
        keyExtractor={(item) => item.step.toString()}
        renderItem={({ item }) => (
          <View style={styles.stepBox}>
            <Text style={styles.stepTitle}>
              Step {item.step}: {item.title}
            </Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f2f2f2",
    flex: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#2E7D32",
  },
  stepBox: {
    marginBottom: 16,
    backgroundColor: "#ffff",
    elevation: 10,
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 5,
    borderLeftColor: "#FFD54F",
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6D4C41",
  },
  description: {
    fontSize: 16,
    color: "#4E342E",
  },
});

export default RecipeDetails;
