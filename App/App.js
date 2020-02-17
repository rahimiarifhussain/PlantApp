import React from 'react';
import { View,Platform ,Text} from 'react-native';
import {Navigation} from '../App/navigation/Navigation';
function App () {
    return (
        <View style={{
            flex: 1, 
            backgroundColor: 'white',
            color: "white",
            paddingTop: Platform.OS === "android" ? 25 : 0
        }}
    >
     <Text >this is </Text>       
        </View>
    );
}
export default App;