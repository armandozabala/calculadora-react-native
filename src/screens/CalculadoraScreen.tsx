import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import BotonCalc from '../components/BotonCalc';
import { styles } from '../theme/appTheme';
import useCalculadora from '../hooks/useCalculadora';
import SplashScreen from 'react-native-splash-screen';


const CalculadoraScreen = () => {

    const {
        numeroAnterior,
        numero,
        positivoNegativo,
        btnDelete,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        limpiar,
        calcular} = useCalculadora();

    
    useEffect(() => {
        SplashScreen.hide();
    },[])

    return (
        <View style={styles.calculadoraContainer}>
            
            {
                (numeroAnterior !== '0') && (
                    <Text style={styles.resultadoPequeno}> { numeroAnterior }</Text>
                )
            }
           

            <Text style={styles.resultado}
                  numberOfLines={1}
                  adjustsFontSizeToFit
            > { numero } </Text>

            <View style={styles.fila}>
                 <BotonCalc texto="C" color="#2D2D2D" accion={limpiar}/>
                 <BotonCalc texto="+/-" color="#2D2D2D" accion={positivoNegativo}/>
                 <BotonCalc texto="del" color="#2D2D2D" accion={btnDelete}/>
                 <BotonCalc texto="/" color="#FF9427" accion={btnDividir}/>    
           </View>

           <View style={styles.fila}>
                 <BotonCalc texto="7"  accion={armarNumero}/>
                 <BotonCalc texto="8" accion={armarNumero}/>
                 <BotonCalc texto="9" accion={armarNumero}/>
                 <BotonCalc texto="X" color="#FF9427" accion={btnMultiplicar}/>    
           </View>

           <View style={styles.fila}>
                 <BotonCalc texto="4" accion={armarNumero}/>
                 <BotonCalc texto="5" accion={armarNumero}/>
                 <BotonCalc texto="6" accion={armarNumero}/>
                 <BotonCalc texto="-" color="#FF9427" accion={btnRestar}/>    
           </View>


           <View style={styles.fila}>
                 <BotonCalc texto="1" accion={armarNumero}/>
                 <BotonCalc texto="2" accion={armarNumero}/>
                 <BotonCalc texto="3" accion={armarNumero}/>
                 <BotonCalc texto="+" color="#FF9427" accion={btnSumar}/>    
           </View>


           <View style={styles.fila}>
                 <BotonCalc texto="0" ancho accion={armarNumero}/>
                 <BotonCalc texto="." accion={armarNumero}/>
                 <BotonCalc texto="=" color="#FF9427" accion={calcular}/>    
           </View>


        </View>
    )
}

export default CalculadoraScreen
