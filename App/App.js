import React from 'react';
import { View, Text,Platform } from 'react-native';
function App () {
    return (
        <View style={{
            flex: 1, 
            backgroundColor: 'white',
            color: "white",
            paddingTop: Platform.OS === "android" ? 25 : 0
        }}
    >
            
        <Text>this is text</Text>
        </View>
    );
}
export default App;