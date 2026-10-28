import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { useState, useEffect } from 'react';
import { ActivityIndicator, Card } from 'react-native-paper';

export default function Home(navigation){
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getMovies = async () => {
        try {
            const resposta = await fetch("https://reactnative.dev/movies.json")
            const dados = await resposta.json()
            setData(dados.movies)

        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getMovies()
    }, [])

    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Tela dos Filmes</Text>
            {isLoading ? (
                <ActivityIndicator/>    
            )
            :(
                <FlatList 
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) =>
                <Card>
                    <Card.Content>
                        <Text>{item.id}: {item.title} - {item.releaseYear}</Text>
                    </Card.Content>
                </Card>
            }
            />
            )
        }
            <Button 
            title='Entrar'
            onPress={()=> navigation.navigate('F1')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
