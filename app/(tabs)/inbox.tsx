import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { defaultStyles } from "@/constants/Styles";
import { FontAwesome6 } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const Page = () => {
  const inboxData = [
    {
      name: "John",
      note: "Airbnb update: Reminder - Leave a Review",
      description: "Trip completed: 26-28 Jan 2022",
      icon: "user",
    },
    {
      name: "Abraham",
      note: "Airbnb update: Reminder - Leave a Review",
      description: "Trip completed: 12-14 Oct 2021",
      icon: "user",
    },
    {
      name: "Gerald",
      note: "Airbnb update: Reminder - Leave a Review",
      description: "Trip completed: 22-24 Feb 2022",
      icon: "user",
    },
    {
      name: "Airbnb Support",
      note: "Hope your check-in went smoothly in the hotel",
      description: "Last message sent on 26 January",
      icon: "airbnb",
    },
  ];

  return (
    <SafeAreaView style={defaultStyles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Inbox</Text>
      </View>

      <View style={{ flex: 1, padding: 30, gap: 30 }}>
        {inboxData.map(({ icon, name, note, description }) => (
          <View>
            <View style={{ flexDirection: "row", gap: 16 }}>
              <View
                style={{
                  borderColor: Colors.dark,
                  borderRadius: 100,
                  borderWidth: 1,

                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome6
                  style={{ padding: 14 }}
                  name={icon}
                  size={24}
                  color={Colors.dark}
                />
              </View>
              <View>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>{name}</Text>
                <Text style={{ fontWeight: "700" }}>{note}</Text>
                <Text style={{ fontSize: 12 }}>{description}</Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 30,
                borderBottomColor: "#a7a7a7",
                borderBottomWidth: 0.5,
              }}
            ></View>
          </View>
        ))}
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
