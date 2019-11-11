/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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
  Body,
  Title,
  Button,
} from 'react-native';

import { withNavigation } from 'react-navigation';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import styles from './myStyles';
import MemeCategory from './MemeCategory';

const accessToken = 'CSuLIWDcagAAAAAAAAAAoMzVNwGb-V1jqAcVurgJZIFUIjaDNcQVVbQxV-a7UxVt';
const dbx = new Dropbox({  
  accessToken,  
  fetch  
});

class HomePage extends React.Component {
    
  constructor(props){
    super(props);

    this.state = {
      categoryList: null,
      isLoading: true,
    }
  }

  async componentDidMount()
  {
    let response= await dbx.filesListFolder({  
      path: '/Meme_Pics'  
    })
    console.log(response);
    this.setState({
      categoryList: response.entries,
      isLoading: false,
    })
    
    console.log(this.state.categoryList);
  } 

  static navigationOptions = {
    title: 'Meme Generator',
  };

  render()
  {
    console.log(this.state.categoryList);

    if(this.state.isLoading)
    {
      return (
        <View style={styles.container}>
        <Text style ={styles.welcomeText}> loading the list </Text>
        </View>
      );
    }
    if(!this.state.categoryList)
    {
      return (
        <View style={styles.container}>
        <Text style ={styles.welcomeText}> no categories found </Text>
        </View>
      )
    } 

    return (
      
      <View style={styles.container}>
      <Button title = "Create Meme" onPress={()=>this.props.navigation.navigate('CreateMeme')}/>
      <FlatList
        data={this.state.categoryList}
        renderItem={({item,index}) => (
        <MemeCategory 
          title={item.name}
          catPath={item.path_display}
          position = {index}/>
        )}
      />
    </View>
    )
  }
};


export default withNavigation(HomePage);
