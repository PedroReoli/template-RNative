// src\app\index.tsx
import React from 'react'
import { View, Image, Text } from 'react-native'
import { Input } from '@/components/input'
import { Button } from '@/components/Button'
import { Link, useRouter } from 'expo-router'

export default function Index() {
  const router = useRouter() 

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 24, backgroundColor: '#082c2c' }}>
      
      <Image
        source={require('@/assets/logo.png')}
        style={{ height: 64, width: 150, marginBottom: 40 }}
        resizeMode='contain'
      />

      <Input icon="ticket-confirmation-outline">
        <Input.Field placeholder="Código do Ingresso" />
      </Input>

      <Button 
        title="ACESSAR CREDENCIALl" 
        onPress={() => router.push('/register')} 
      />

    
      <Link href="/register" style={{ marginTop: 16, textAlign: 'center', color: '#C4C4CC' }}>
        Ainda não possui ingresso?
      </Link>
    </View>
  )
}
