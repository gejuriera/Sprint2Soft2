import React,{useContext,useEffect,useState} from 'react';
import {View,StyleSheet} from 'react-native';
import { Container,Text,H1,H3,Button} from 'native-base';
import globalStyles from '../styles/global'
import { useNavigation,useTheme } from '@react-navigation/native'
import ReservaContext from '../context/reserva/reservaContext'
import firebase from '../firebase'
import Countdown from 'react-countdown';

const ProgresoDeReserva = () =>{

    const navigation = useNavigation();
    const { idpedido } =useContext(ReservaContext)

    const [tiempo,guardarTiempo] = useState(0);
    const [completado,guardarCompletado] = useState(false);

    useEffect(()=>{ 
        const obtenerReserva =()=>{
            firebase.db.collection('ordenes')
            .doc(idpedido)
            .onSnapshot(function(doc){
                guardarTiempo(doc.data().tiempo);
                guardarCompletado(doc.data().completado)

            })

        }
        obtenerReserva()


    },[])
    
    //countdown muestra
    const renderer = ({minutes,seconds}) =>{
        return(
            <Text style={styles.tiempo}>
                {minutes}:{seconds}
            </Text>
        )
    }

    return (
        <Container style={globalStyles.contenedor}>
            <View style={[globalStyles.contenido,{marginTop:50}]}>
                { tiempo === 0  && (
                    <>
                    <Text
                    style={{textAlign:'center'}}
                    >
                        Hemos recibito tu reserva...
                    </Text>
                    <Text
                    style={{textAlign:'center'}}
                    >
                    Estamos calculando el tiempo de tu reserva
                    </Text>
                    </>
                )}

                {!completado && tiempo >0 && (
                    <>
                   <Text
                    style={{textAlign:'center'}}
                    >
                    Su reserva estara disponible por:
                    </Text>
                    <Text>
                        <Countdown 
                        date={Date.now() + tiempo * 60000 }
                        renderer = {renderer}
                        />
                    </Text>
                    </>
                )}
                {
                    completado && (
                        <>
                        <H1 style={styles.textoCompleadto}>Reserva Lista</H1>
                        <H3 style ={styles.textoCompleadto}>Le esperamos en el Hostal!</H3>
                        <Button styles={[globalStyles.boton,{marginTop:100}]}
                        rounded
                        block
                        onPress = {()=> 
                            navigation.navigate("NuevaReserva")
                        
                        }
                        >
                            <Text
                            style={globalStyles.botonTexto}>
                                Comenzar Una Nueva Reserva
                            </Text>
                        </Button>
                        </>

                    )
                }

            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    tiempo:{
        marginBottom: 20 ,
        fontSize:60,
        textAlign:'center',
        marginTop:30
    },
    textoCompleadto:{
        textAlign:'center',
        textTransform:'uppercase',
        marginBottom:20
    }
})

export default ProgresoDeReserva