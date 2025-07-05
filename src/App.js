/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import '../global.css'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Homepage/Home';
import Recent from './screens/Recent/Recent';
import Browse from './screens/Browse/Browse';
import DocumentScanner from './components/Camera';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false, animation: 'ios_from_right' }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Recent" component={Recent} />
        <Stack.Screen name="Browse" component={Browse} />
        <Stack.Screen name="Camera" component={DocumentScanner} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}



export default App;
