import React from 'react';
import { View, Text, Image } from 'react-native';
import icon from '@assets/images/icon.png';

const Home: React.FC = () => (
  <View>
    <Text>Hello World!</Text>
    <Image source={icon} />
  </View>
);

export default Home;
