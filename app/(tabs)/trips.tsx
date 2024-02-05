import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const Page = () => {
  return (
    <SafeAreaView style={defaultStyles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Trips</Text>
      </View>

      <View style={styles.card}>
        <View style={{ transform: "rotate(45deg)" }}>
          <Ionicons
            name="hand-right-outline"
            size={40}
            color={Colors.primary}
          />
        </View>
        <View style={{ flexDirection: "row", gap: 6 }}>
          <View>
            <Text style={{ fontFamily: "mon-b", fontSize: 22 }}>
              No trips booked ... yet!
            </Text>
          </View>
        </View>
        <Text style={{ textAlign: "center", color: "#a7a7a7", fontSize: 12 }}>
          Time to dust off your bags and start planning your next adventure
        </Text>
        <TouchableOpacity
          style={[defaultStyles.btn, { width: 300, marginTop: 20 }]}
        >
          <Text style={defaultStyles.btnText}>Start Searching</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 24,
  },
  header: {
    fontFamily: "mon-b",
    fontSize: 24,
  },
  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    marginHorizontal: 24,
    marginTop: 24,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    alignItems: "center",
    gap: 14,
    marginBottom: 24,
  },
});

export default Page;
