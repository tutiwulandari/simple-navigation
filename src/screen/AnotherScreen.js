import React from 'react'
import { View, Text } from 'react-native'

const AnotherScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={{fontSize:24}}>This is Another Screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: 'powderblue',
      alignItems:'center',
      justifyContent:'center'
    },
  });

export default AnotherScreen
