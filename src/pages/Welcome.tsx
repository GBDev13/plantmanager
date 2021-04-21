import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  View
  } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

import wateringImg from '../assets/watering.png'

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification')
  }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Gerencie {'\n'}
          suas plantas de{'\n'} forma fácil</Text>

          <Image
            source={wateringImg}
            style={styles.image}
            resizeMode="contain"
          />

          <Text style={styles.subtitle}>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.</Text>

          <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleStart}
        >
            <Feather name="chevron-right" style={styles.buttonIcon}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  wrapper: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34,
  },
  subtitle: {
    textAlign: 'center',
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
    fontSize:18,
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height:56,
    width:56,
  },
  buttonIcon: {
    color: colors.white,
    fontSize:32
  }
})