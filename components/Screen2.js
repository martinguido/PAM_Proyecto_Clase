import {View, Text, Button} from 'react-native';

function Screen2({route, navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Pantalla 2</Text>
      <Button title="Volver a pantalla 1" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default Screen2;
