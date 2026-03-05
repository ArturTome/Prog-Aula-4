import * as React from 'react';
import { View, Text, Image, TextInput, StyleSheet, Button, ScrollView } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function HomeScreen({ navigation }) {
return (

<View style={{ flex: 1, backgroundColor: '#d9d9d9' }}>

<SafeAreaProvider>
<SafeAreaView>

<ScrollView>

{/* TOP */}

<View style={{backgroundColor:'#5c59b6', paddingBottom:20}}>

<View style={{flexDirection:'row', alignItems:'center', marginTop:10}}>

<Image
source={require('./aviao.png')}
style={styles.logo}
/>

<TextInput
placeholder='Search here ...'
style={styles.search}
/>

</View>

<View style={{flexDirection:'row', alignItems:'center', marginTop:20}}>

<Image
source={require('./UserIcon.png')}
style={styles.userIcon}
/>

<View style={{flexDirection:'column'}}>
<Text style={styles.welcome}>Welcome!</Text>
<Text style={styles.userName}>Donna Stroupe</Text>
</View>

<View style={{marginLeft:'auto', marginRight:20}}>
<Image
source={require('./aviao.png')}
style={styles.notification}
/>
</View>

</View>

</View>


{/* CATEGORY */}

<View style={{marginTop:20, marginLeft:20}}>

<View style={{flexDirection:'row'}}>
<Text style={styles.sectionTitle}>Category</Text>

<View style={{marginLeft:'auto', marginRight:20}}>
<Image
source={require('./aviao.png')}
style={styles.menuIcon}
/>
</View>
</View>


<View style={{flexDirection:'row', marginTop:20}}>

<View style={styles.categoryItem}>
<Image source={require('./aviao.png')} style={styles.categoryIcon}/>
<Text>Resort</Text>
</View>

<View style={styles.categoryItem}>
<Image source={require('./aviao.png')} style={styles.categoryIcon}/>
<Text>Homestay</Text>
</View>

<View style={styles.categoryItem}>
<Image source={require('./aviao.png')} style={styles.categoryIcon}/>
<Text>Hotel</Text>
</View>

<View style={styles.categoryItem}>
<Image source={require('./aviao.png')} style={styles.categoryIcon}/>
<Text>Lodge</Text>
</View>

</View>


<View style={{flexDirection:'row', marginTop:20}}>

<View style={styles.categoryItem}>
<Image source={require('./aviao.png')} style={styles.categoryIcon}/>
<Text>Villa</Text>
</View>

<View style={styles.categoryItem}>
<Image source={require('./aviao.png')} style={styles.categoryIcon}/>
<Text>Apartment</Text>
</View>

<View style={styles.categoryItem}>
<Image source={require('./aviao.png')} style={styles.categoryIcon}/>
<Text>Hostel</Text>
</View>

<View style={styles.categoryItem}>
<Image source={require('./aviao.png')} style={styles.categoryIcon}/>
<Text>See all</Text>
</View>

</View>

</View>


{/* POPULAR DESTINATION */}

<View style={{marginTop:30, marginLeft:20}}>

<View style={{flexDirection:'row'}}>
<Text style={styles.sectionTitle}>Popular Destination</Text>

<View style={{marginLeft:'auto', marginRight:20}}>
<Image
source={require('./aviao.png')}
style={styles.menuIcon}
/>
</View>

</View>

<View style={{flexDirection:'row', marginTop:20}}>

<Image
source={require('./aviao.png')}
style={styles.destination}
/>

<Image
source={require('./aviao.png')}
style={styles.destination}
/>

<Image
source={require('./aviao.png')}
style={styles.destination}
/>

</View>

</View>


{/* RECOMMENDED */}

<View style={{marginTop:30, marginLeft:20}}>

<Text style={styles.sectionTitle}>Recommended</Text>

<View style={{flexDirection:'row', marginTop:20}}>

<Image
source={require('./aviao.png')}
style={styles.recommended}
/>

<Image
source={require('./aviao.png')}
style={styles.recommended}
/>

</View>

</View>

</ScrollView>

{/* BOTTOM MENU */}

<View style={styles.bottomMenu}>

<View style={styles.menuItem}>
<Image source={require('./aviao.png')} style={styles.bottomIcon}/>
<Text style={styles.menuText}>Home</Text>
</View>

<View style={styles.menuItem}>
<Image source={require('./aviao.png')} style={styles.bottomIcon}/>
<Text style={styles.menuText}>Explore</Text>
</View>

<View style={styles.menuItem}>
<Image source={require('./aviao.png')} style={styles.bottomIcon}/>
<Text style={styles.menuText}>Search</Text>
</View>

<View style={styles.menuItem}>
<Image source={require('./UserIcon.png')} style={styles.bottomIcon}/>
<Text style={styles.menuText}>Profile</Text>
</View>

</View>


</SafeAreaView>
</SafeAreaProvider>

</View>

);
}



const Stack = createNativeStackNavigator();


const styles = StyleSheet.create({

logo:{
width:40,
height:40,
marginLeft:20
},

search:{
backgroundColor:'white',
borderRadius:10,
marginLeft:20,
width:250,
padding:10
},

userIcon:{
width:40,
height:40,
marginLeft:20,
marginRight:10
},

notification:{
width:30,
height:30
},

welcome:{
color:'white',
fontWeight:'bold',
fontSize:18
},

userName:{
color:'white',
fontSize:12
},

sectionTitle:{
fontSize:18,
fontWeight:'bold'
},

menuIcon:{
width:25,
height:25
},

categoryItem:{
alignItems:'center',
marginRight:20
},

categoryIcon:{
width:60,
height:60,
marginBottom:5
},

destination:{
width:100,
height:100,
borderRadius:20,
marginRight:15
},

recommended:{
width:160,
height:100,
borderRadius:20,
marginRight:15
},

bottomMenu:{
flexDirection:'row',
justifyContent:'space-around',
backgroundColor:'#5c59b6',
padding:15
},

menuItem:{
alignItems:'center'
},

bottomIcon:{
width:25,
height:25
},

menuText:{
color:'white'
}

});


function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName='Home'>

<Stack.Screen
name="Home"
component={HomeScreen}
options={{headerShown:false}}
/>

</Stack.Navigator>
</NavigationContainer>
);
}

export default App;
