import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import * as Font from 'expo-font';

export default class TitleBar extends Component{
    async componentDidMount() {
        await Font.loadAsync({
          'Yanone': require('../assets/fonts/YanoneKaffeesatz.ttf'),
        });
      }

    render(){
        return (
            <View style={{backgroundColor: ""}}>
                <View style={styles.outsidecontainer}>
                    <View style={styles.insidecontainer}>
                        <Text style={styles.titletext}>Charmander</Text>
                    </View>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    outsidecontainer :{
        margin:25,
        backgroundColor:'transparent'
    },
    insidecontainer: {
        backgroundColor:'black',
        borderRadius:25,
        shadowColor: 'brown',
        shadowOffset: { width: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    titletext: {
        textAlign:'center',
        color:'#ff8c00',
        fontSize:60,
        fontWeight:'bold',
        fontFamily:'Yanone',
        padding:40
        }
})
