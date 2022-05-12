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
                <View style={{height:80,justifyContent:"center",backgroundColor:"grey"}}>
                    <Text style={{textAlign:"center",fontSize:24}}>{probs.mydata.title}</Text>
                </View>
                <View style={{height:'100%',justifyContent:"flex-start",paddingTop:10}}>
                    <Text style={{textAlign:"left",fontSize:16,paddingLeft:10}}>{probs.mydata.body}</Text>
            
                </View>
                

            </View>
        );
      }


}




var post_id=0;
var is_loading=true;

const loadPostData = async (post_id) => {
    var my_url='https://jsonplaceholder.typicode.com/posts/'+post_id.toString();
    const response = await fetch(my_url);
    const data = await response.json();
    return data;
}

var post_data=null;
var navigator=null;

class UserDetails extends Component{

    
    
    constructor(probs){
        post_id=probs.navigation.state.params.id;
        navigator=probs.navigation;
        super();
    }


    post_data = loadPostData(post_id).then((value) => {
        post_data = value;
        is_loading=false;
        this.setState({});
    });

    

    

render(){

    

 return(
   <View style={{backgroundColor:"white"}}>
       <SafeAreaView>
      <MainScreen loading={is_loading} mydata={post_data} navigator={navigator}></MainScreen>
      </SafeAreaView>
   </View>
 );
 
}

}

export default UserDetails;