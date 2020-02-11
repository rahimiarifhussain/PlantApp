import React from 'react';
import { View, Text } from 'react-native';
function App () {
    return (
        <View style={{
            flex: 1, 
            backgroundColor: colors.bg,
            color: "white",
            paddingTop: Platform.OS === "android" ? 25 : 0
        }}
    >
            
        <Text>this is text</Text>
        </View>
    );
}
export default App;