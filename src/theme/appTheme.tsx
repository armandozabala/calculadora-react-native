import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    fondo:{
        flex: 1,
        backgroundColor: 'black',
       
    },
    calculadoraContainer:{
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'flex-end'
    },
    resultado:{
        fontSize: 60,
        color: 'white',
        textAlign: 'right',
        marginBottom: 10
    },
    resultadoPequeno:{
        fontSize: 30,
        color: 'white',
        textAlign: 'right',
       
    },
    fila:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18
    },
    boton:{
        height: 80,
        width: 80,
        borderRadius: 100,
        backgroundColor: '#2D2D2D',
        justifyContent: 'center',
        marginHorizontal: 10
    },
    botonTexto:{
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300'
    }
})