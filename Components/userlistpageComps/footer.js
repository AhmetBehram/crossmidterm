import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {SafeAreaView, ListViewComponent, StyleSheet, Text, View, Button, TextInput, ScrollView , FlatList , TouchableOpacity

} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Footer(){
    return(
        <SafeAreaView style={styles.footer}>
            <Text style={styles.title}>Ahmet Behram</Text>
            <Text style={styles.title}>1903686</Text>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    footer: {
        justifyContent: "center",
        alignItems: "stretch",
        height:150,
        paddingTop:0,
        backgroundColor: "white"
    },
    title:{
        textAlign: "center",
        color: "black",
        fontSize:20,
        fontWeight:"bold"
        
    }
})