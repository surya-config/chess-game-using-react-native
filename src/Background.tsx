import React from 'react';
import {View, Text} from 'react-native';
import {Chess} from 'chess.js';

const BLACK = 'rgb(30,30,30)';
const WHITE = 'rgb(230,230,230)';

// interface BackgroundProps {
//   pieceSelected: string;
//   chess: Chess;
// }

interface RowProps {
  row: number;
  //   pieceSelected: string;
  //   chess: Chess;
}

interface SquareProps extends RowProps {
  col: number;
}

const Row = ({row}: RowProps) => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      {new Array(8).fill(0).map((_, col) => (
        <Square key={col} row={row} col={col} />
      ))}
    </View>
  );
};

const Square = ({row, col}: SquareProps) => {
  const backgroundColor = (col + row) % 2 === 0 ? WHITE : BLACK;
  return <View style={{flex: 1, backgroundColor}}></View>;
};

const Background = () => {
  return (
    <View style={{flex: 1}}>
      {new Array(8).fill(0).map((_, row) => (
        <Row key={row} row={row} />
      ))}
    </View>
  );
};

export default Background;
