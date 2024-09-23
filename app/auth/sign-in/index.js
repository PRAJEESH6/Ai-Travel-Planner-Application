import React, { useEffect } from 'react';
import {View,Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation, useRouter} from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignIn()
{
    const navigation = useNavigation();
    const router = useRouter();

    useEffect(()=>{

      navigation.setOptions({
        headerShown:false
      })

    },[]);

    return(
        <View style={{
            padding:25,
            marginTop:40,
            backgroundColor:'#FFFFFF',
            height:'100%'
            }}>

           <TouchableOpacity onPress={()=>router.back()} accessibilityRole="button">
                <Ionicons name="arrow-back-circle-sharp" size={24} color="black" />
           </TouchableOpacity>

            <Text style={{
                fontFamily:'outfit-bold',
                fontSize:30,
                marginTop:30
            }}>Let's Sign You In</Text>

            <Text style={{
                fontFamily:'outfit',
                color:'#808080',
                fontSize:30,
                marginTop:20
            }}>Welcome Back</Text>

            <Text style={{
                fontFamily:'outfit-bold',
                fontSize:30,
                color:'#808080',
                marginTop:10
            }}>You've been missed!</Text>

         
            <View style={{marginTop:50}}>
                <Text style={{fontFamily:'outfit'}}>Email</Text>
                <TextInput style={styles.input} placeholder='Enter Email' />
            </View>

            <View style={{marginTop:20}}>
                <Text style={{fontFamily:'outfit'}}>Password</Text>
                <TextInput style={styles.input} secureTextEntry={true} placeholder='Enter Password'/>
            </View>

            <View style={{
                padding:20,
                backgroundColor:'#000000',
                borderRadius:15,
                marginTop:50
            }}>
                <Text style={{
                    fontFamily:'outfit',
                    color:'#FFFFFF',
                    textAlign:'center'
                }}>Sign In</Text>
            </View>

            <TouchableOpacity accessibilityRole="button"
                onPress={()=>router.replace('auth/sign-up')}
            style={{
                padding:20,
                backgroundColor:'#000000',
                borderRadius:15,
                marginTop:20,
                borderWidth:1
            }}>
                <Text style={{
                    fontFamily:'outfit',
                    color:'#FFFFFF',
                    textAlign:'center'
                }}>Create Account</Text>

            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({

    input:{
        padding:15,
        borderWidth:1,
        borderRadius:15,
        borderColor:'#808080',
        fontFamily:'outfit'
    }
})