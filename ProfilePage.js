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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import styles from './myStyles';
import Meme from './Meme';

const accessToken = 'CSuLIWDcagAAAAAAAAAAoMzVNwGb-V1jqAcVurgJZIFUIjaDNcQVVbQxV-a7UxVt';
const dbx = new Dropbox({  
  accessToken,  
  fetch  
});


class ProfileScreen extends React.Component {
    
    constructor(props)
    {
        super(props)
        this.state = {
            imageList: null,
            areImagesLoading: true,
            currCategory: null,
            currCatPath: null,
            imageUrl: [],
          }
    }

    async componentDidMount()
    {
        await this.setState({
            currCategory: this.props.navigation.getParam('category'),
            currCatPath: this.props.navigation.getParam('path'),
            areImagesLoading: false,
          })  

        await dbx.filesListFolder({  
            path: this.state.currCatPath  
          }).then(response => {
              this.setState({
                  imageList: response.entries,
              })
          })  

         for(let entry of this.state.imageList)
         {
            await dbx.filesGetTemporaryLink({
                path: entry.path_display
            }).then(response=>{
                this.setState({
                    imageUrl: this.state.imageUrl.concat(response.link)
                })
            })
         }
         console.log(this.state.imageUrl);     
    }

    static navigationOptions = {
      title: 'Meme List',
    };

    render() {
      return ( 
        <View style={styles.container}>
        <FlatList
            data={this.state.imageUrl}
            renderItem={({item}) => (
            <Meme 
                memeUrl={item}
            />
            )}
        />
        </View>
      );
    }
  }

export default ProfileScreen;

