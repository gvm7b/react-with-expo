
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CardDriver from '../components/cardDriver';
import { drivers } from '../data/drivers';


export default function Formula1() {
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
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
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
