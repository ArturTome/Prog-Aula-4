import * as React from 'react';
import { View, Text, Image, TextInput, StyleSheet, Button } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Input } from 'react-native-elements';




function LoginScreen({ navigation }) {
return (
<View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#ffffff' }}>
    <SafeAreaProvider>
        <SafeAreaView>
            {/* Top*/}
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#551bdb', paddingBottom:15}}>
                <View style={{flexDirection:'row' }}>
                <Image
                    source={require('./aviao.png')}
                    style={styles.aviaoIcon}
            />
            <TextInput placeholder='Search Here' style = {styles.Input}></TextInput>
                </View>
                <View style={{flexDirection:'row' }}>
                <Image
                    source={require('./aviao.png')}
                    style={styles.aviaoIcon}/> 
                    <View style={{flexDirection:'column' }}>
                <Text style={{fontWeight:'bold', color:'white'}}>Welcome!</Text>
                <Text style={{fontSize:10, color:'white'}}>Donna Stroupe</Text>
                    </View>
                    <View style = {{marginLeft:'auto', marginRight:10}}>
                <Image
            source={require('./aviao.png')}
            style={styles.aviaoIcon}
            /> 
                    </View>
                </View>
            </View>
            {/* Body */}
            <View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'100'}}>Category</Text>                   
                    <View style = {{marginLeft:'auto', marginRight:20}}>
                        <Image
                            source={require('./aviao.png')}
                            style={styles.aviaoIcon}/> 
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style = {{flexDirection:'column'}}>
                        <Image
                        source={require('./aviao.png')}
                        style={styles.aviaoIcon}/> 
                    </View>
                </View>
            </View>
            {/* Bottom */}
        </SafeAreaView>
    </SafeAreaProvider>
</View>
);
}



const Stack = createNativeStackNavigator();


const styles = StyleSheet.create({
    aviaoIcon: {
        height: 30,
        width: 30,
        marginRight: 5,
        marginLeft:10
    },
    Input: {
        height: 20,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    textoNoAzul:{
        color:'white'
    }
});

function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName='Login'>
<Stack.Screen name="Login" component={LoginScreen} 
options={{headerShown: true}}/>

</Stack.Navigator>
</NavigationContainer>
);
}






export default App;