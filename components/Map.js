import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions,Image } from 'react-native';

export default class Map extends React.Component {
  render() {
    const coords = [
        {'latitude':-37.5752810322, 'longitude':130.638130781},
        {'latitude':-35.5752810322, 'longitude':129.638130781},
        {'latitude':-32.5752810322, 'longitude':125.638130781},
        {'latitude':-38.5752810322, 'longitude':150.638130781},
        {'latitude':-32.5752810322, 'longitude':145.638130781},
        {'latitude':-30.5752810322, 'longitude':142.638130781},
        {'latitude':-31.5752810322, 'longitude':141.638130781},
        {'latitude':-37.5752810322, 'longitude':141.638130781},
        {'latitude':-37.5752810322, 'longitude':141.638130781},
        {'latitude':-37.5752810322, 'longitude':141.638130781},

    ]

    let markers = coords.map(c => {
        return <Marker coordinate={c} title='bushfire'></Marker>
    })
    
    return (
      <View style={styles.container}>
        <MapView
        style={styles.mapStyle} 
        >
        {markers}
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