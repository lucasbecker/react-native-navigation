import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Techs from './pages/Techs';
import TechEdit from './pages/TechEdit';
import TechInfos from './pages/TechInfos';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Techs"
          component={Techs}
          options={{
            title: 'Tecnologias',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="TechEdit"
          component={TechEdit}
          options={{
            title: 'Editar',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="TechInfos"
          component={TechInfos}
          options={{
            title: 'Informações',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
