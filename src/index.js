import { ActivityIndicator, View } from "react-native";
import { Categorias, Producto, Productos } from "./pantallas";

import { styles } from "./styles";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    "Sora-Regular": require("../assets/fuentes/Sora-Regular.ttf"),
    "Sora-Bold": require("../assets/fuentes/Sora-Bold.ttf"),
  });
  if (!loaded) {
    <View style={styles.container}>
      <ActivityIndicator color={"#6699CC"} size={"large"} />
    </View>;
  }
  return <Categorias />;
}
