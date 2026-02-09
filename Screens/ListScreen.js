import { React } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const students = [
  { name: "Alek", surname: "Novakovic", age: 17 },
  { name: "Anida", surname: "Veledar", age: 17 },
  { name: "Danin", surname: "Zulfic", age: 17 },
  { name: "Marko", surname: "Forcan", age: 17 },
];

const ListScreen = () => {
  return (
    <View>
      <Text>ListScreen</Text>
      <FlatList
        keyExtractor={(students) => students.name}
        data={students}
        renderItem={({ item }) => {
          return (
            <Text>
              {item.name} {item.surname} - {item.age}
            </Text>
          );
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ListScreen;