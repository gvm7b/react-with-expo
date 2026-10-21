import { Card, Button } from "react-native-paper"
import { Text, StyleSheet } from "react-native"

export default function CardDriver({driver}) {
    return(
        <Card mode= "outlined" style={styles.card}>
            <Card.Cover source={{uri: driver.image}}/>
            <Card.Content>
                <Text style={styles.nome}>{driver.name}</Text>
                <Text style={styles.pais}>Pais: {driver.country}</Text>
                <Text style={styles.description}>{driver.description}</Text>
                <Text style={styles.tituloEstrela}>Estrelas:</Text>
                <Text style={styles.estrelas}>{"⭐".repeat(driver.stars)}</Text>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    card:{
        marginBotton: 15
    },
    nome:{
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
        padding: 15
    },
    pais:{
        fontSize: 16,
        marginBottom: 8
    },
    description:{
        fontSize: 16,
        marginBottom: 16
    },
    tituloEstrela:{
        fontWeight: 'bold',
        fontSize: 16
    },
    estrelas:{
        fontSize: 20
    }
})