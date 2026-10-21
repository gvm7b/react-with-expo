import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CardDriver from './components/cardDriver';
import { drivers } from './data/drivers';


export default function App() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.txt}>Super Trunfo Formula 1</Text>
      <FlatList
        data={drivers}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CardDriver driver={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  txt:{
   color: '#000000ff', 
   fontSize: 20,
   fontWeight: "bold"
  },
  logo: {
    width: 350,
    height: 350,
  }
});
