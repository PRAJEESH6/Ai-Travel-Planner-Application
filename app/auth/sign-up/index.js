import React, { useEffect } from "react";
import { View,Text, TextInput, StyleSheet } from "react-native";
import { useNavigation, useRouter } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Signup()
{
    const navigation = useNavigation();
    const router = useRouter();

    useEffect(()=>{
       navigation.setOptions({
        headerShown:false
       })
    },[])

    return(
        <View style={{
            padding:25,
            paddingTop:50
        }}>

<TouchableOpacity onPress={()=>router.back()} accessibilityRole="button">
                <Ionicons name="arrow-back-circle-sharp" size={24} color="black" />
           </TouchableOpacity>

            <Text style={{
                fontFamily:'outfit-bold',
                fontSize:30,
                marginTop:30
            }}>Create New Account</Text>


            <View style={{marginTop:50}}>
                <Text style={{fontFamily:'outfit'}}>FullName</Text>
                <TextInput style={styles.input} placeholder='Enter Email' />
            </View>

           <View style={{marginTop:20}}>
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
                onPress={()=>router.replace('auth/sign-in')}
            style={{
                padding:20,
                backgroundColor:'#FFFFFF',
                borderRadius:15,
                marginTop:20,
                borderWidth:1
            }}>
                <Text style={{
                    fontFamily:'outfit',
                    color:'#000000',
                    textAlign:'center'
                }}>Sign In</Text>

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