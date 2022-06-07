import React, {Component} from 'react';
import Header from '../Components/userlistpageComps/header';
import Footer from '../Components/userlistpageComps/footer';
import {Button,ActivityIndicator,FlatList,StyleSheet, Text, SafeAreaView,View} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';



var navigator=null;

class MainMenu extends Component{

constructor(probs){
  navigator=probs.navigation;
  super();
}


render(){

 return(
   <View style={{backgroundColor:"white",justifyContent:"center",height:'100%'}}>
       
       <View style={{backgroundColor:"orange",height:80,justifyContent:"center"}}>
          <Button title='Users' onPress={() => {
            navigator.navigate("UserListPage");
          }}></Button>
       </View>
        

       <View style={{backgroundColor:"chocolate",height:80,justifyContent:"center"}}>
        <Button title='Posts' onPress={() => {
            navigator.navigate("PostListPage");
        }}></Button>
         </View>

         <View style={{backgroundColor:"lightblue",height:80,justifyContent:"center"}}>
        <Button title='Albums' onPress={() => {
            navigator.navigate("AlbumPage");
        }}></Button>
         </View>

         <View style={{backgroundColor:"lightgrey",height:80,justifyContent:"center"}}>
        <Button title='ToDo List' onPress={() => {
            navigator.navigate("TodoPage");
        }}></Button>
         </View>

   </View>
 );
 
}

}

export default MainMenu;


//CREATED BY AHMET BEHRAM