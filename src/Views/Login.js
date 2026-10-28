import { TextInput, Button } from "react-native-paper";
import { View, StyleSheet } from "react-native";

export default function Login(navigation){
    return(
        <View style={styles.container}>
            <TextInput
                label="Email"
            />
            <TextInput
                label="Senha"
            />
            <Button mode="contained" onPress={()=> navigation.navigate('Homes') }>
                Entrar
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffffffff',
    justifyContent: 'space-evenly',
    padding: 15
  },
})