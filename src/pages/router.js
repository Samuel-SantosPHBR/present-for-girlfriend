import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import coresApp from "./../static/cores";
import DetailCard from "./detailCard";
import Home from "./Home";

export default function Router() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={ Home }
                    options={{
                        title: 'Home',
                        headerStyle: {
                            backgroundColor: coresApp.primary,
                        },
                        headerTitleStyle: {
                            color: coresApp.blank,
                        }
                    }}
                />
                <Stack.Screen
                    name="DetalheCard"
                    component={ DetailCard }
                    options={{
                        title: 'Detalhe',
                        headerStyle: {
                            backgroundColor: coresApp.primary,
                        },
                        headerTitleStyle: {
                            color: coresApp.blank,
                        },
                        headerTintColor: '#ffffff',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}