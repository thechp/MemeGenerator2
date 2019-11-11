import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  Share,
} from 'react-native';


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import styles from './myStyles';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Meme extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            currentUrl:null,
        }
    }

    async componentDidMount()
    {
        await this.setState({
            currentUrl: this.props.memeUrl
          })  
        console.log(this.state.currentUrl);   
    }

    async shareImage()
    {
        console.log("Share the Image");
        Share.share ({
            url: this.state.currentUrl,
        })
    }
    
    render()
    {
        return(
            <View>
                <TouchableOpacity
                onPress = {() => this.shareImage()}>
                <Image style={styles.memeDim}
                source={{uri: this.state.currentUrl}}/>
                </TouchableOpacity>
            </View>
        );
        
    }
}

export default withNavigation(Meme);