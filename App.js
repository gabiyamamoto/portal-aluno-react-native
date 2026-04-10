import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import InicioScreen from "./src/screens/InicioScreen";
import DisciplinasScreen from "./src/screens/DisciplinasScreen";
import TarefasScreen from "./src/screens/TarefasScreen";
import PerfilScreen from "./src/screens/PerfilScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Inicio"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#1e40af",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            drawerActiveTintColor: "#1e40af",
            drawerActiveBackgroundColor: "#dbeafe",
            drawerInactiveTintColor: "#334155",
            drawerLabelStyle: {
              fontSize: 16,
              fontWeight: "500",
            },
          }}
        >
          <Drawer.Screen name="Inicio" component={InicioScreen} />
          <Drawer.Screen name="Disciplinas" component={DisciplinasScreen} />
          <Drawer.Screen name="Tarefas" component={TarefasScreen} />
          <Drawer.Screen name="Perfil" component={PerfilScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}