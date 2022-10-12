import {View, Text, Button, TextInput} from 'react-native';
import React, {useState} from 'react';

function Screen1({navigation}) {
  const [nombre, setNombre] = useState('');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Pantalla 1</Text>
      <TextInput
        placeholder="Ingrese su nombre"
        onChangeText={text1 => setNombre(text1)}
      />
      <Button
        title="Ir a Pantalla 2"
        onPress={() => navigation.navigate('Screen2', {text: nombre})}
      />
    </View>
  );
}

export default Screen1;
