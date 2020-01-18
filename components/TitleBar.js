import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export function TitleBar(props) {
    return (
        <View>
            <Text style={styles.titletext}>RedAlert</Text>
        </View>
    )

}

var styles = StyleSheet.create({
    titletext: {
        textAlign:'center',
        color:'red',
        fontSize:50
    }
})
