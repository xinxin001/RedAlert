import * as React from 'react';
import { Button, Image, View, Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import axios from 'axios';

export default class ImagePicker34 extends React.Component {

  state = {
    image: null,
    prediction: null
  };

  render() {
    let { image, prediction } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />}
        
        <Button
          title="Submit"
          onPress={this.uploadImage}
        >
        </Button>
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
    console.log('hi');
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log("Bruh momento " + result);


    if (!result.cancelled) {
      this.setState({ image: result.uri });
      console.log(this.state.image);
    }
  };

  uploadImage = async () => {
    // const model = await tmImage.load(
    //   "https://teachablemachixne.withgoogle.com/models/8JSa_qGz/model.json",
    //   "https://teachablemachine.withgoogle.com/models/8JSa_qGz/metadata.json")
    axios.post('http://192.168.252.44:5000/predictions', {
      image: this.state.image
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

}