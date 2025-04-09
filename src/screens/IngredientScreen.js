// import React from "react";
// import { View, Text, StyleSheet, FlatList } from "react-native";

// const IngredientScreen = ({ route }) => {
//   const { ingredients } = route.params;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>आवश्यक सामग्री:</Text>
//       <FlatList
//         data={ingredients}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.item}>
//             <Text style={styles.name}>• {item.name}</Text>
//             <Text style={styles.quantity}>({item.quantity})</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     backgroundColor: "#fff",
//     flex: 1,
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//     color: "#2d3436",
//   },
//   item: {
//     marginBottom: 10,
//   },
//   name: {
//     fontSize: 16,
//     color: "#2d3436",
//   },
//   quantity: {
//     fontSize: 14,
//     color: "#636e72",
//   },
// });

// export default IngredientScreen;

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const IngredientScreen = ({ route }) => {
  const { ingredients } = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome
            name="arrow-left"
            size={20}
            color="#fff"
            style={{ top: wp(7) }}
          />
        </TouchableOpacity>
        <Text style={[styles.headerText, { left: wp(14) }]}>
          ये चीजों की आवश्यकता है
        </Text>
      </View>

      <FlatList
        data={ingredients}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.text}>• {item.name}</Text>
              <Text style={styles.text}>{item.quantity}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  header: {
    backgroundColor: "#D84040",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#c0392b",
    paddingVertical: wp(9),
    flexDirection: "row",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    top: wp(7),
    // paddingHorizontal: wp(16),
  },
  listContainer: {
    // padding: 16,
    marginVertical: wp(4),
  },
  card: {
    marginBottom: wp(2),
    backgroundColor: "#ffff",
    elevation: 10,
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 5,
    borderLeftColor: "#FFD54F",
    marginHorizontal: 8,
    // marginBottom: wp(6),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    color: "#6D4C41",
  },
});

export default IngredientScreen;
