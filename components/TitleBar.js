import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export function TitleBar(props) {
    return (
        <View style={styles.outsidecontainer}>
            <View style={styles.insidecontainer}>
                <Text style={styles.titletext}>RedAlert</Text>
            </View>
        </View>
    )
}

var styles = StyleSheet.create({
    outsidecontainer :{
        margin:30,
        backgroundColor:'transparent'
    },
    insidecontainer: {
        backgroundColor:'#FFA97B',
        borderRadius:25,
        shadowColor: 'grey',
        shadowOffset: { width: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    titletext: {
        textAlign:'center',
        color:'white',
        fontSize:40,
        fontWeight:'bold',
        fontFamily:'Helvetica',
        padding:30
        }
})
