import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontAwesome } from "@expo/vector-icons";

const RecipeDetails = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#D84040", paddingVertical: wp(6) }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome
            name="arrow-left"
            size={20}
            color="#fff"
            style={styles.fontAwesome}
          />
        </TouchableOpacity>
        <Text
          style={[styles.header, { top: wp(7), paddingHorizontal: wp(18) }]}
        >
          🍛 {item.dish} बनाने की विधि:
        </Text>
      </View>
      {/* <TouchableOpacity style={{ padding: wp(8), flexDirection: "row" , backgroundColor:""}}>
        <FontAwesome
          name="arrow-right"
          size={20}
          color="#D84040"
          style={[styles.fontAwesome, {}]}
        />
        <Text>{item.dish} बनाने की विधि</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          ➡️ {item.dish} में क्या-क्या लगेगा?
        </Text>
      </TouchableOpacity>

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
    backgroundColor: "#f2f2f2",
    flex: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#ffffff",
  },
  stepBox: {
    marginBottom: wp(2),
    backgroundColor: "#ffff",
    elevation: 10,
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 5,
    borderLeftColor: "#FFD54F",
    marginHorizontal: 8,
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
  button: {
    backgroundColor: "#fdcb6e",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: wp(2),
    marginTop: wp(2),
    marginHorizontal: wp(2),
    elevation: 10,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  buttonText: {
    color: "#2d3436",
    fontWeight: "bold",
    fontSize: 16,
  },
  fontAwesome: {
    top: wp(13),
    left: wp(3),
  },
});

export default RecipeDetails;
