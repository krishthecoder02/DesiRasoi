// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from "react-native-responsive-screen";
// import { FontAwesome } from "@expo/vector-icons";

// const RecipeDetails = ({ route, navigation }) => {
//   const { item } = route.params;

//   return (
//     <View style={styles.container}>
//       <View style={{ backgroundColor: "#D84040", paddingVertical: wp(6) }}>
//         <TouchableOpacity
//           onPress={() => navigation.goBack()}
//           style={{ left: wp(3) }}
//         >
//           <FontAwesome
//             name="arrow-left"
//             size={20}
//             color="#fff"
//             style={{ top: wp(12) }}
//           />
//           <Text
//             style={[styles.header, { top: wp(7), paddingHorizontal: wp(18) }]}
//           >
//             🍛 {item.dish} बनाने की विधि:
//           </Text>
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() =>
//           navigation.navigate("IngredientScreen", {
//             ingredients: item.ingredients,
//           })
//         }
//       >
//         <Text style={styles.buttonText}>
//           ➡️ {item.dish} में क्या-क्या लगेगा?
//         </Text>
//       </TouchableOpacity>

//       <FlatList
//         data={item.vidhi}
//         keyExtractor={(item) => item.step.toString()}
//         ListHeaderComponent={
//           <View style={styles.imageContainer}>
//             <Image source={item.img} style={styles.image} />
//             <Text style={styles.dishTitle}>{item.dish}</Text>
//           </View>
//         }
//         renderItem={({ item }) => (
//           <View style={styles.stepBox}>
//             <Text style={styles.stepTitle}>
//               Step {item.step}: {item.title}
//             </Text>
//             <Text style={styles.description}>{item.description}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#f2f2f2",
//     flex: 1,
//   },
//   header: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 16,
//     color: "#ffffff",
//   },
//   stepBox: {
//     marginBottom: wp(2),
//     backgroundColor: "#ffff",
//     elevation: 10,
//     padding: 12,
//     borderRadius: 8,
//     borderLeftWidth: 5,
//     borderLeftColor: "#FFD54F",
//     marginHorizontal: 8,
//   },
//   stepTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#6D4C41",
//   },
//   description: {
//     fontSize: 16,
//     color: "#4E342E",
//   },
//   button: {
//     backgroundColor: "#fdcb6e",
//     padding: 12,
//     borderRadius: 10,
//     alignItems: "center",
//     marginBottom: wp(2),
//     marginTop: wp(2),
//     marginHorizontal: wp(2),
//     elevation: 10,
//     borderWidth: 1,
//     borderColor: "#ffffff",
//   },
//   buttonText: {
//     color: "#2d3436",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
//   imageContainer: {
//     alignItems: "center",
//     marginVertical: wp(4),
//   },

//   image: {
//     width: wp(60),
//     height: wp(60),
//     resizeMode: "cover",
//     borderRadius: 12,
//     borderWidth: 2,
//     borderColor: "#FFD54F",
//     elevation: 5,
//     backgroundColor: "#fff",
//   },
//   dishTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#D84040",
//     marginTop: wp(2),
//     textAlign: "center",
//     textShadowColor: "rgba(0, 0, 0, 0.1)",
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//     backgroundColor: "#fff",
//     paddingVertical: wp(1),
//     paddingHorizontal: wp(3),
//     borderRadius: 10,
//     overflow: "hidden",
//     elevation: 4,
//   },
// });

// export default RecipeDetails;
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
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
      {/* Header */}
      <View style={{ backgroundColor: "#D84040", paddingVertical: wp(6) }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ left: wp(3) }}
        >
          <FontAwesome
            name="arrow-left"
            size={20}
            color="#fff"
            style={{ top: wp(12) }}
          />
          <Text
            style={[styles.header, { top: wp(7), paddingHorizontal: wp(18) }]}
          >
            🍛 {item.dish} बनाने की विधि:
          </Text>
        </TouchableOpacity>
      </View>

      {/* Ingredients Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("IngredientScreen", {
            ingredients: item.ingredients,
          })
        }
      >
        <Text style={styles.buttonText}>
          ➡️ {item.dish} में क्या-क्या लगेगा?
        </Text>
      </TouchableOpacity>

      {/* Steps List with Image and Dish Title */}
      <FlatList
        data={item.vidhi}
        keyExtractor={(item) => item.step.toString()}
        ListHeaderComponent={
          <View style={styles.imageContainer}>
            <Image source={item.img} style={styles.image} />
            <View style={styles.titleWrapper}>
              <Text style={styles.dishTitle}>{item.dish}</Text>
            </View>
          </View>
        }
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
  imageContainer: {
    alignItems: "center",
    marginVertical: wp(4),
    position: "relative",
  },
  image: {
    width: wp(60),
    height: wp(60),
    resizeMode: "cover",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#FFD54F",
    elevation: 5,
    backgroundColor: "#fff",
  },
  titleWrapper: {
    position: "absolute",
    bottom: -wp(5),
    backgroundColor: "#fff",
    paddingHorizontal: wp(4),
    paddingVertical: wp(1),
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginBottom: wp(4),
  },
  dishTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#D84040",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
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
});

export default RecipeDetails;
