import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export function Card(props) {
    return (
        <View style={styles.outsidecontainer}>
            <View style={styles.insidecontainer}>
                {props.children}
            </View>
        </View>
    )

}

var styles = StyleSheet.create({
    outsidecontainer :{
        margin:10,
    },
    insidecontainer: {
        padding:15,
        backgroundColor:'white',
        borderRadius:10,
        shadowColor: 'grey',
        shadowOffset: { width: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    titletext: {
        textAlign:'center',
        color:'white',
        fontSize:50,
        padding:30
    }
})
