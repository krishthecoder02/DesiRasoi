// import React from "react";
// import { View, Text, StyleSheet, FlatList, Image } from "react-native";
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from "react-native-responsive-screen";
// import { mithaiList } from "../constant";

// const Mithai = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>मिठाई</Text>
//       <View>
//         <FlatList
//           data={mithaiList}
//           horizontal
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View
//               style={{
//                 padding: wp(1),
//                 // borderBottomWidth: 1,
//                 height: 145,
//                 width: 115,
//               }}
//             >
//               <View
//                 style={{
//                   backgroundColor: "#ffff",
//                   borderRadius: 10,
//                   alignItems: "center",
//                   elevation: 10,
//                   padding: 3,
//                 }}
//               >
//                 <Image
//                   source={item.img}
//                   style={{ height: 100, width: 100, resizeMode: "center" }}
//                 />
//                 <Text style={{ color: "#000", fontSize: 16, marginBottom: 4 }}>
//                   {item.dish}
//                 </Text>
//               </View>
//             </View>
//           )}
//         />
//       </View>
//     </View>
//   );
// };

// export default Mithai;

// const styles = StyleSheet.create({
//   text: {
//     color: "#000000",
//     fontSize: wp(5),
//     fontWeight: "bold",
//     paddingHorizontal: wp(3),
//   },
//   container: {
//     backgroundColor: "#f2f2f2",

//     padding: wp(1 / 2),
//   },
// });
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { mithaiList } from "../constant";
import { useNavigation } from "@react-navigation/native";

const Mithai = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>नाश्ता</Text>
      <View>
        <FlatList
          data={mithaiList}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              style={{
                padding: wp(1),
                // borderBottomWidth: 1,
                height: 145,
                width: 115,
              }}
              onPress={() =>
                navigation.navigate("RecipeDetails", { item: item })
              }
            >
              <View
                style={{
                  backgroundColor: "#ffff",
                  borderRadius: 10,
                  alignItems: "center",
                  elevation: 10,
                  padding: 3,
                }}
              >
                <Image
                  source={item.img}
                  style={{ height: 100, width: 100, resizeMode: "center" }}
                />
                <Text
                  style={{ color: "#6D4C41", fontSize: 16, marginBottom: 4 }}
                >
                  {item.dish}
                </Text>
              </View>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#6D4C41",
    fontSize: wp(5),
    fontWeight: "bold",
    paddingHorizontal: wp(3),
  },
  container: {
    backgroundColor: "#f2f2f2",

    padding: wp(1 / 2),
  },
});

export default Mithai;
