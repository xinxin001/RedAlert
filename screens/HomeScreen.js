import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

import { MonoText } from '../components/StyledText';

import  TitleBar  from '../components/TitleBar';
import {CoordCard} from '../components/CoordCard';
import { getCurrentFrame } from 'expo/build/AR';
import * as Font from 'expo-font';

import { Actions, Router, Scene } from "react-native-router-flux";
import AppNavigator from '../navigation/AppNavigator';



export default class HomeScreen extends Component {
  _onPressCoord(){
    Actions.scene2()
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Yanone': require('../assets/fonts/YanoneKaffeesatz.ttf'),
    });
  }
  render(){
    const coordinates = ["-37.5752810322 130.638130781", "-31.5752810322 141.638130781", "-34.5752810322 141.638130781"]

    const coordCards = coordinates.map(coord => {
        return (
          <CoordCard onPress={this._onPressCoord}> 
            <Text style={styles.coordstyle}>
              {coord}
            </Text>
          </CoordCard>
        )
    })

    return (
      <ScrollView style={styles.container}>
        <TitleBar></TitleBar>
        <View style={{backgroundColor: "white"}}>
          <Text style={{color:'orangered', fontSize:35, fontWeight:'900', fontFamily: 'Yanone', padding: 3}}>
          ONGOING ZONE
          </Text>
        </View>

        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View>
            {coordCards}
          </View>
        </ScrollView>

        <View>
        <Text style={{color:'darkgoldenrod', fontSize: 35, fontWeight:'bold', padding: 3, fontFamily: 'Yanone'}}>
          AT RISK ZONE
        </Text>
        </View>

        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View> 
            {coordCards}
          </View>
        </ScrollView>

        <View><Text style={{color: 'darkgreen', fontSize: 35, fontWeight: "bold", padding: 10, fontFamily: 'Yanone'}}> 
        SAFE ZONE
        </Text></View>

        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View>
            {coordCards}
          </View>
        </ScrollView>
        
      </ScrollView>
    );
    }
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  coordstyle:{
    textAlign:'center',
    color:'black',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'left'
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  // contentContainer: {
  //   paddingTop: 30,
  // },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'red',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
