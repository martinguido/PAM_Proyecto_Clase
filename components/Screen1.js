import {View, Text, Button} from 'react-native';

function Screen1({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Pantalla 1</Text>
      <Button
        title="Ir a Pantalla 2"
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
}

export default Screen1;
