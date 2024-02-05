import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";

const Page = () => {
  return (
    <SafeAreaView style={defaultStyles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Wishlists</Text>
      </View>

      <View style={{ flex: 1 }}>
        <View style={{ flex: 2 }}>
          <View style={{ flexDirection: "row", gap: -30 }}>
            <View style={{ flex: 1 }}>
              <View style={[styles.card, { backgroundColor: "#d7d7d7" }]}>
                <Ionicons name="heart" size={80} color="#fff" />
              </View>
              <View style={{ marginTop: -10, paddingHorizontal: 32 }}>
                <Text style={{ fontWeight: "700" }}>Georgia</Text>
                <Text>0 saved</Text>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <View
                style={[styles.card, { flex: 1, backgroundColor: "#d7d7d7" }]}
              >
                <Ionicons name="heart" size={80} color="#fff" />
              </View>
              <View style={{ marginTop: -10, paddingHorizontal: 32 }}>
                <Text style={{ fontWeight: "700" }}>Boston</Text>
                <Text>0 saved</Text>
              </View>
            </View>
          </View>
        </View>
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
    padding: 40,
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
