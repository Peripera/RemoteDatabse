import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ContactListScreen from '../view/ContactList';
import AddContactScreen from '../view/RegisterContact';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AddContact"
          component={AddContactScreen}
          options={{ title: 'Agregar contacto' }}
        />
        <Stack.Screen
          name="ContactList"
          component={ContactListScreen}
          options={{ title: 'Lista de contactos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
