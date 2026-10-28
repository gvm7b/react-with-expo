import { StatusBar } from 'expo-status-bar';
import { Button,StyleSheet, Text, View, Image } from 'react-native';

export default function Aula3() {
  return (
    
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./bungas.png')} />
      <Text style={styles.txt}>Bungas</Text>
      <Button title='entrar'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#08f500ff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  txt:{
   color: '#f70727ff', 
   fontSize: 20,
   fontWeight: "bold"
  },
  logo: {
    width: 350,
    height: 350,
  }
});
