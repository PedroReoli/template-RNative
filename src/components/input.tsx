import { View, TextInput, TextInputProps } from "react-native"
import { ReactNode } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

type InputProps = {
  children: ReactNode
  icon?: keyof typeof MaterialCommunityIcons.glyphMap
}

function Input({ children, icon }: InputProps) {
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: 'transparent', 
        borderWidth: 1,
        borderColor: '#000', 
        borderRadius: 8,
        marginBottom: 24, 
      }}
    >
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          color="#9FF9CC" 
          size={20}
          style={{ marginRight: 8 }}
        />
      )}
      {children}
    </View>
  )
}

function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={{ flex: 1, color: '#fff', fontSize: 16 }}
      placeholderTextColor="#C4C4CC" 
      {...rest}
    />
  )
}

Input.Field = Field

export { Input }
