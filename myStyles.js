import { StyleSheet,Dimensions} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  rowContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
  },
  rowText: {
      flex: 1,
      flexDirection: 'column',
      marginLeft: 12,
      justifyContent: 'center',
  },
  welcomeText: {
      fontSize: 40,
      fontWeight: '200',
      color: Colors.dark,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  memeDim: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*0.4,
  },
  header: {
    backgroundColor: Colors.black, 
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/8,
  },
  folderItem: {
    padding: 10,
    fontSize: 18,
    height: 60,
    
    width: Dimensions.get('window').width,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  photo: {
    height: 50,
    width: 50,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default styles;