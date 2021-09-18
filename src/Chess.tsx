import React, {useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Board from './Board';
import {SIZE} from './Notation';

const Chess = () => {
  const [startGame, setStartGame] = useState(false);

  return (
    <View style={styles.container}>
      {startGame ? (
        <Board />
      ) : (
        <View style={styles.preGameView}>
          <Text style={styles.title}>CHESS</Text>
          <Image
            style={styles.image}
            source={require('../assets/chess-main.jpg')}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => setStartGame(true)}>
            <Text style={styles.buttonText}>Start Game</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgb(20, 20, 20)',
  },
  preGameView: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(0, 0, 0)',
  },
  image: {
    width: SIZE * 8,
    height: SIZE * 8,
  },
  title: {
    fontSize: 45,
    color: 'white',
    textAlign: 'center',
    marginBottom: 25,
  },
  button: {
    backgroundColor: 'rgb(100,100,220)',
    borderRadius: 12,
    width: SIZE * 4,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
  },
});

export default Chess;
