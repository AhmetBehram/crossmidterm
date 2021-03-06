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
    let tmp_dic={key : props.mydata[i]["id"] , name : props.mydata[i]["title"]};
    names_data.push(tmp_dic);
  }


  return(
      <View style={{backgroundColor:"white",height:'83%'}}>
        <FlatList
        data={names_data}
        renderItem={({ item }) => (
          <View style={styles.item}>
              <Text style={{color:"black",textAlign:"center",fontSize:20}}>{item.name}</Text>
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

const getAlbums = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data;
}

class TodoPage extends Component{

    navigator=null;

    constructor({navigation}){
        navigator=navigation;
        super();
    }


  data = getAlbums().then((value) => {
    is_loading=false;
    data=value;
    this.setState({

    });
  });

  

render(){
    
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




export default TodoPage;