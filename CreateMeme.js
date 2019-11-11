import React, {Fragment} from 'react';
import { Dropbox } from 'dropbox';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  FlatList,
  List,
  ListItem,
} from 'react-native';

import { withNavigation } from 'react-navigation';
import CameraRoll from "@react-native-community/cameraroll";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import styles from './myStyles';

class CreateScreen extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            galleryList: null,
        }
    }

    async componentDidMount()
    {
        console.log("mounted the component")
        // await CameraRoll.getPhotos({
        //     first:'20',
        //     assetType: 'All',
        // }).then(r=> {
        //     this.setState({galleryList: r.edges});
        // }).catch((err) => {
        //     console.log("error loading images");
        // });
        
    } 

    static navigationOptions = {
        title: 'Create Meme',
      };

    render()
    {
        return(
            <View style={styles.container}>
                <Text>Hello</Text>
            </View>
        );
    }  
}
export default withNavigation(CreateScreen);