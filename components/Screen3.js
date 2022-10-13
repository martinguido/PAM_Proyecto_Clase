import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

function Screen3({navigation}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setCount(count + 1);
    });
    console.log(count);
  });
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Pantalla 3</Text>
    </View>
  );
}

export default Screen3;
