import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {windowHeight, windowWidth} from '../utils/dimensions';
import {AuthContext} from '../navigation/AuthProvider'



const LoginScreen = ({navigation}) => {
  const [email,setEmail]=useState();
  const [password,setPassword]= useState();
  
  const{login}=useContext(AuthContext)
  

  return (
    <View style={styles.container}>
    <Image
    source={require('../assets/favicon.png')}
    style={styles.logo}
    />
    
    <FormInput 
    labelValue={email}
    placeholderText="Email"
    onChangeText={(userEmail)=> setEmail(userEmail)}
    iconType="user"
    keyboardType="email-address"
    autoCapitalize="none"
    autoCorrect={false}
    />

<FormInput 
    labelValue={password}
    placeholderText="Contrasena"
    onChangeText={(userPassword)=> setPassword(userPassword)}
    iconType="lock"
    secureTextEntry={true}
    />
  

  <FormButton
    buttonTitle="Iniciar Sesion"
    onPress={()=>login(email,password)}
 />

<TouchableOpacity style={styles.forgotButton} onPress={()=> {}}>
    <Text style={styles.navButtonText}>Olvidaste tu contrasena?
    </Text>
  </TouchableOpacity>
    

 <SocialButton
  buttonTitle="Logeate con Facebook"
  btnType="facebook"
  color= '#4867aa'
  backgroundColor="#e6eaf4"
  onPress={()=>{}}
 />

<SocialButton
  buttonTitle="Logeate con Google"
  btnType="google"
  color= '#de4d41'
  backgroundColor="#f5e7ea"
  onPress={()=>{}}
 />

 
  <TouchableOpacity style={styles.forgotButton}
   onPress={()=>navigation.navigate('Signup')}
  >
 
    <Text style={styles.navButtonText}>No tienes cuenta? Crea una aqui
    </Text>
  </TouchableOpacity>
    </View>
    
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  logo: {
    height: 160,
    width: 160,
    resizeMode: 'cover',
  },
  text: {
    
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
    
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    
  },
});