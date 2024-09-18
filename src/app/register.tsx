import React from 'react'
import { View, Image } from 'react-native'
import { Input } from '@/components/input' 
import { Button } from '@/components/Button'
import { Link } from 'expo-router'


export default function Register() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 24, backgroundColor: '#082c2c' }}>
      
    
      <Image
        source={require('@/assets/logo.png')}
        style={{ height: 64, width: 150, marginBottom: 40 }}
        resizeMode='contain'
      />

      
      <Input icon="email">
        <Input.Field placeholder="Digite seu e-mail " />
      </Input>
 
      <Button 
        title="ACESSAR CREDENCIAL" 
        onPress={() => { /* ASDJKOHNASDJKASDASDASD */ }} 
      />

    
      <Link href="/" style={{ marginTop: 16, textAlign: 'center', color: '#C4C4CC' }}>
        Já possui ingresso?
      </Link>
    </View>
  )
}
