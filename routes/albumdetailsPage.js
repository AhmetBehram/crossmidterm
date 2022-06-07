import React, {Component} from 'react';
import Header from '../Components/userlistpageComps/header';
import Footer from '../Components/userlistpageComps/footer';
import {Button,ActivityIndicator,FlatList,StyleSheet, Text, SafeAreaView,View, Image} from 'react-native';
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
        console.log(probs.mydata[0]);

        for(let i=0;i<probs.mydata[0].length;i++){
            let tmp_dic={key : i , title : probs.mydata[0][i]["title"], url : probs.mydata[0][i]["url"]};
            names_data.push(tmp_dic);
        }



        return(
            <SafeAreaView>
            <View>

                <Text style={{textAlign:"center",fontSize:20,paddingLeft:10}}>PHOTOS</Text>
                <FlatList
                data={names_data}
                renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text style={{color:'blue',textAlign:"center"}}>{item.title}</Text>  
                    <Image
                    style={{width: 120, height: 120, alignSelf:"center"}}
                    source={{uri: item.url}}
                    />
                </View>
                

                )}
                keyExtractor={item => item.key}
                
                />


            </View>
            </SafeAreaView>
        );
      }


}

const styles = StyleSheet.create({
    item: {
      marginTop: 2,
      padding:15,
      backgroundColor:"lightgrey",
      fontSize:24
    },
    text: {
      textAlign: 'center',
      fontSize: 25,
      fontWeight: '500',
    }
  });




var post_id=0;
var is_loading=true;

const loadPostData = async (post_id) => {
    var my_url='https://jsonplaceholder.typicode.com/albums/'+post_id.toString()+'/photos';
    const response = await fetch(my_url);
    var my_data=[];
    const data = await response.json();
    my_data.push(data);
    return my_data;
}

var post_data=null;
var navigator=null;

class AlbumDetails extends Component{

    
    
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

export default AlbumDetails;