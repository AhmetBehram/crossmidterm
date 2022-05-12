import React, {Component} from 'react';
import Header from '../Components/userlistpageComps/header';
import Footer from '../Components/userlistpageComps/footer';
import {Button,ActivityIndicator,FlatList,StyleSheet, Text, SafeAreaView,View} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';



const MainScreen = (probs) => {

    if(probs.loading){
        return(
            <View>
                <ActivityIndicator></ActivityIndicator>
            </View>
        );
      } else {
      
        var names_data=[];
        console.log(probs.mydata);
      
        return(
            <View>
                <View style={{height:80,justifyContent:"center"}}>
                    <Text style={{textAlign:"center",fontSize:24}}>{probs.mydata.name}</Text>
                    <Text style={{textAlign:"center",fontSize:18}}>User Information</Text>
                </View>
                <View style={{height:150,justifyContent:"space-evenly"}}>
                    <Text style={{textAlign:"left",fontSize:16,paddingLeft:10}}>Username : {probs.mydata.username}</Text>
                    <Text style={{textAlign:"left",fontSize:16,paddingLeft:10}}>E-mail : {probs.mydata.email}</Text>
                    <Text style={{textAlign:"left",fontSize:16,paddingLeft:10}}>Phone : {probs.mydata.phone}</Text>
                    <Text style={{textAlign:"left",fontSize:16,paddingLeft:10}}>Website : {probs.mydata.website}</Text>
                </View>
                <View style={{height:80,justifyContent:"center"}}>
                    <Text style={{textAlign:"center",fontSize:18}}>Location Information</Text>
                </View>
                <View style={{height:150,justifyContent:"space-evenly"}}>
                    <Text style={{textAlign:"left",fontSize:16,paddingLeft:10}}>Street : {probs.mydata.address.street}</Text>
                    <Text style={{textAlign:"left",fontSize:16,paddingLeft:10}}>Suite : {probs.mydata.address.suite}</Text>
                    <Text style={{textAlign:"left",fontSize:16,paddingLeft:10}}>Zipcode : {probs.mydata.address.zipcode}</Text>
                    <Text style={{textAlign:"left",fontSize:16,paddingLeft:10}}>City : {probs.mydata.address.city}</Text>
                </View>
            </View>
        );
      }


}




var user_id=0;
var is_loading=true;

const loadUserData = async (user_id) => {
    var my_url='https://jsonplaceholder.typicode.com/users/'+user_id.toString();
    const response = await fetch(my_url);
    const data = await response.json();
    return data;
}

var user_data=null;
var navigator=null;

class UserDetails extends Component{

    
    
    constructor(probs){
        user_id=probs.navigation.state.params.id;
        navigator=probs.navigation;
        super();
    }


    user_data = loadUserData(user_id).then((value) => {
        user_data = value;
        is_loading=false;
        this.setState({});
    });

    

    

render(){

    

 return(
   <View style={{backgroundColor:"white"}}>
       <SafeAreaView>
      <MainScreen loading={is_loading} mydata={user_data} navigator={navigator}></MainScreen>
      </SafeAreaView>
   </View>
 );
 
}

}

export default UserDetails;