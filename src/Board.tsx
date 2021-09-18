import React, {useCallback, useRef, useState} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import Background from './Background';
import {Chess} from 'chess.js';
import Piece from './Piece';
import {SIZE} from './Notation';

const {width} = Dimensions.get('window');

function useConst<T>(initialValue: T | (() => T)): T {
  const ref = useRef<{value: T}>();
  if (ref.current === undefined) {
    // Box the value in an object so we can tell if it's initialized even if the initializer
    // returns/is undefined
    ref.current = {
      value:
        typeof initialValue === 'function'
          ? // eslint-disable-next-line @typescript-eslint/ban-types
            (initialValue as Function)()
          : initialValue,
    };
  }
  return ref.current.value;
}

const Board = () => {
  const chess = useConst(() => new Chess());
  const [state, setState] = useState({
    player: 'w',
    board: chess.board(),
  });

  const onTurn = useCallback(
    () =>
      setState({
        player: state.player === 'w' ? 'b' : 'w',
        board: chess.board(),
      }),
    [chess, state.player],
  );

  return (
    <View style={styles.container}>
      <Background />
      {state.board.map((row, i) =>
        row.map((square, j) => {
          if (square === null) {
            return null;
          }
          let pieceName = square.color + square.type;
          return (
            <Piece
              key={`${i}-${j}`}
              id={pieceName}
              position={{x: j * SIZE, y: i * SIZE}}
              chess={chess}
              onTurn={onTurn}
              enabled={state.player === square.color}
            />
          );
        }),
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: width,
  },
});

export default Board;
