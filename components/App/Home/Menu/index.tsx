import { View, Text, ScrollView } from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import ItemCard, { menuItem } from "./ItemCard";
const menu: menuItem[] = [
  {
    id: "0",
    name: "Credit Score",
    about: "Your credit score",
    link: "/profile/credit-score",
    icon: <MaterialIcons name="query-stats" size={65} color="white" />,
  },
  {
    id: "1",
    name: "Groups",
    about: "Explore, Create & Join a group.",
    link: "/group",
    icon: <MaterialIcons name="groups" size={65} color="white" />,
  },
  {
    id: "4",
    name: "Loans",
    about: "Consomation load marketplace",
    link: "/loans",
    icon: <MaterialIcons name="attach-money" size={65} color="white" />,
  },
  {
    id: "5",
    name: "Help Center",
    about: "Contact us if you need help",
    link: "/help",
    icon: <MaterialIcons name="live-help" size={65} color="white" />,
  },
];

export default function Menu() {
  return (
    <Animated.View
      className="p-3"
      entering={FadeInDown.duration(500).springify().delay(200)}
    >
      {menu.map((item) => (
        <ItemCard
          key={item.id}
          id={item.id}
          link={item.link}
          name={item.name}
          icon={item.icon}
          about={item.about}
        />
      ))}
    </Animated.View>
  );
}

/*

  <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                {
                    menu.map((item) => (
                        <MenuCard key={item.id} id={item.id} link={item.link} name={item.name} icon={item.icon} />
                    ))
                }


            </ScrollView>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                {
                    menu2.map((item) => (
                        <MenuCard key={item.id} id={item.id} link={item.link} name={item.name} icon={item.icon} />
                    ))
                }


            </ScrollView>
            */
