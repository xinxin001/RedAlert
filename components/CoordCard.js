import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export function CoordCard(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.outsidecontainer}>
                <View style={styles.insidecontainer}>
                    {props.children}
                </View>
            </View>
        </TouchableOpacity>

    )

}

var styles = StyleSheet.create({
    outsidecontainer :{
        margin:8,
    },
    insidecontainer: {
        padding:15,
        backgroundColor:'aliceblue',
        borderRadius:10,
        shadowColor: 'grey',
        shadowOffset: { width: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
})
