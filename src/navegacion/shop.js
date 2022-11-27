import { Categorias, Producto, Productos } from "../pantallas";

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categorias">
      <Stack.Screen name="Categorias" component={Categorias} />
      <Stack.Screen name="Productos" component={Productos} />
      <Stack.Screen name="Producto" component={Producto} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
