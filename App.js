import SpaceCraftsScreen from "./screens/SpaceCrafts";
import StarMapScreen from "./screens/StarMap";
import DailyPicScreen from "./screens/DailyPic";
import HomeScreen from "./screens/Home";
function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen}/>
        <Stack.Screen name="StarMap" component={StarMapScreen}/>
        <Stack.Screen name="DailyPic" component={DailyPicScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}