import {View,Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login()
{
    const router = useRouter();

    return(
        <View>

            <Image source={require('./../assets/images/log.jpeg')} role="img"
              
              style={{
                width: '100%',
                height: 520
              }}
            />

            <View style={styles.container}>
                <Text style={{

                    fontSize:30,
                    fontFamily:'outfit-bold',
                    textAlign: 'center',
                    marginTop:10

                }}>Traveling Paradise</Text>

                <Text style={{

                    fontFamily:'outfit',
                    textAlign:'center',
                    fontSize:17,
                    color:'#808080',
                    marginTop:20

                }}>Discover your next Adventure effortlessly. Personailzed countries at your finger tips. Travel smarter with AI driven Insighes.</Text>
            </View>

<View>
            <TouchableOpacity style={styles.button} 
               onPress={()=>router.push('auth/sign-in')}
            >
                <Text style={{
                    color:'#FFFFFF',
                    
                    fontSize:17,
                    textAlign:'center'
                    }}>Get Started</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:'#FFFFFF',
        marginTop:-20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        height:'100%',
        padding:25
    },
    button:{
        padding:15,
        backgroundColor:'#000000',
        borderRadius:99,
        marginTop:'20%'
    }
})