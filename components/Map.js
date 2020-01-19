import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions,Image } from 'react-native';

export default class Map extends React.Component {
  render() {
    const marker = {
        latlng: {'latitude':45.530492, 'longitude':-73.613669},
    }
    return (
      <View style={styles.container}>
        <MapView
        style={styles.mapStyle} 
        >
        <Marker
        coordinate={marker.latlng}
        title="fire"
        description="big fire here"
        > 

        </Marker>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});