import React, {Fragment} from 'react';
import { Dropbox } from 'dropbox';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  List,
  ListItem,
  TouchableOpacity,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { withNavigation } from 'react-navigation';
import styles from './myStyles';

class MemeCategory extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            currentCategory: null,
            currentCategoryPath: null,
            currentUrl: null,
            currPos: null,
        }
    }

    async componentDidMount()
    {
        await this.setState({
            currCat: this.props.title,
            currCatPath: this.props.catPath,
            currPos: this.props.position,
            currentUrl: require('./MemeIcons/0.png')
          })  
        
    }

    render()
    {
        console.log(this.state.currPos);
        return(
            <View style={styles.rowContainer}>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Profile', {category: this.state.currCat, path: this.state.currCatPath})}>
                <Image source = {this.state.currentUrl} style={styles.photo} ></Image>
                <Text style={styles.rowText}>{this.state.currCat}</Text>
                </TouchableOpacity>
            </View>
        );
        
    }
}

export default withNavigation(MemeCategory);