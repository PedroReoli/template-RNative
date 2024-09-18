import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#F48F56',
        borderRadius: 8,
        width: '100%', 
        paddingVertical: 14,
        alignItems: 'center',
        marginBottom: 16 
      }}
      {...rest}
    >
      <Text style={{ color: '#082c2c', fontSize: 16, fontWeight: 'bold' }}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
