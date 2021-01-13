import React from 'react';

import { NavigationContainer } from '@react-navigation/native'; // Cria as rotas;
import { createStackNavigator } from '@react-navigation/stack'; // Tipo armazena o caminho percorrido;

const Stack = createStackNavigator();

import Home from './pages/Home';
import Orders from './pages/Orders';

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#eee'
                    }
                }}
            >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Orders" component={Orders}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Routes;