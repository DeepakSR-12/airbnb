import { View } from "react-native";
import React, { useMemo, useState } from "react";
import ListingsBottomSheet from "@/components/ListingsBottomSheet";
import listingsData from "@/assets/data/airbnb-listings.json";
import ListingsMap from "@/components/ListingsMap";
import listingsDataGeo from "@/assets/data/airbnb-listings.geo.json";
import { Stack } from "expo-router";
import ExploreHeader, { categories } from "@/components/ExploreHeader";

const Page = () => {
  const items = useMemo(() => listingsData as any, []);
  const getToItems = useMemo(() => listingsDataGeo, []);
  const [category, setCategory] = useState<string>("Tiny homes");
  const [listingItems, setListingItems] = useState(items);

  function filterListingsByCategoryKeys(categoryKeys: string[]) {
    // Convert all category keys to lowercase for case-insensitive comparison
    categoryKeys = categoryKeys.map((key) => key.toLowerCase());

    // Filter listings where at least one key from the category keys matches an amenity
    return items.filter(
      (item: any) =>
        item.amenities.some((amenity: string) =>
          categoryKeys.includes(amenity.toLowerCase())
        ) ||
        (item?.neighborhood_overview &&
          item?.neighborhood_overview
            .split(" ")
            .some((ele: string) => categoryKeys.includes(ele.toLowerCase())))
    );
  }

  function shuffleArray(array: any) {
    // Use the Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
  }

  const onDataChanged = (category: string) => {
    setCategory(category);

    const filteredListings = filterListingsByCategoryKeys(
      categories.find((c) => c.name === category)?.keys || []
    );

    setListingItems(filteredListings);
  };

  return (
    <View style={{ flex: 1, marginTop: 80 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      <ListingsMap listings={getToItems} />
      <ListingsBottomSheet
        listings={listingItems?.length ? listingItems : items}
        category={category}
      />
    </View>
  );
};

export default Page;
