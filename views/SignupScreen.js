import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {windowHeight, windowWidth} from '../utils/dimensions';
import {AuthContext} from '../navigation/AuthProvider'



const SignupScreen= ({navigation}) => {
  const [email,setEmail]=useState();
  const [password,setPassword]= useState();
  const [confirmPassword,setConfirmPassword]=useState();

  const{register}=useContext(AuthContext)
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Crear una cuenta</Text>
    
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
  <FormInput 
    labelValue={confirmPassword}
    placeholderText="Confirmar Contrasena"
    onChangeText={(userPassword)=> setPassword(userPassword)}
    iconType="lock"
    secureTextEntry={true}
    />

  <FormButton
    buttonTitle="Crear Cuenta"
    onPress={()=>register(email,password)}
 />
  <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity 
        onPress={() => alert('Terms Clicked!')}
        >
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>


    

 <SocialButton
  buttonTitle="Registrate con Facebook"
  btnType="facebook"
  color= '#4867aa'
  backgroundColor="#e6eaf4"
  //onPress={()=>{}}
 />

<SocialButton
  buttonTitle="Registrate con Google"
  btnType="facebook"
  color= '#de4d41'
  backgroundColor="#f5e7ea"
 // onPress={()=>{}}
 />

 
  <TouchableOpacity style={styles.forgotButton} onPress={()=>navigation.navigate('Login') }>
    <Text style={styles.navButtonText}>Tienes una cuenta? Logueate
    </Text>
  </TouchableOpacity>
    </View>
    
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    color: 'grey',
  },
});