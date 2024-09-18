import { View, ActivityIndicator } from 'react-native'

export function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#082c2c' }}>
     
       <ActivityIndicator size="large" color="#F48F56" />
    
    </View>
  )
}
