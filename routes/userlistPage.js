import React, {Component} from 'react';
import Header from '../Components/userlistpageComps/header';
import Footer from '../Components/userlistpageComps/footer';
import {Button,ActivityIndicator,FlatList,StyleSheet, Text, SafeAreaView,View} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Navigator from '../routes/homeStack';




const MainScreen = (props) => {

if(props.loading){
  return(
      <View style={styles.header}>
          <ActivityIndicator></ActivityIndicator>
      </View>
  );
} else {

  var names_data=[];
  for(let i=0;i<props.mydata.length;i++){
    let tmp_dic={key : props.mydata[i]["id"] , name : props.mydata[i]["name"]};
    names_data.push(tmp_dic);
  }

  return(
      <View>
        <FlatList
        data={names_data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Button onPress={() => {
                props.navigator.navigate('UserDetailsPage',{id : item.key});
            }}
             title={item.name} color="black">
              
            </Button>
          </View>
          

        )}
        keyExtractor={item => item.key}
        />
      </View>
  );
}



}

var is_loading=true;

var data= null;

const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
}

class MyApp extends Component{

    navigator=null;

    constructor({navigation}){
        navigator=navigation;
        super();
    }


  data = getUsers().then((value) => {
    is_loading=false;
    data=value;
    this.setState({

    });
  });

  

render(){

    console.log("my app");
    
  return(
    <View style={{backgroundColor:"white"}}>
      <SafeAreaView>
      <MainScreen loading={is_loading} mydata={data} navigator={navigator}></MainScreen>
      <Footer></Footer>
      </SafeAreaView>
    </View>
  );
  
}

}

const styles = StyleSheet.create({
  item: {
    marginTop: 2,
    padding:15,
    backgroundColor:"pink",
    fontSize:24
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '500',
  }
});




export default MyApp;