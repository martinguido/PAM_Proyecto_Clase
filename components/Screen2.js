import {View, Text, Button} from 'react-native';

function Screen2({route, navigation}) {
  const {text} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Bienvenido {text}</Text>

      <Button title="Volver a pantalla 1" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default Screen2;
