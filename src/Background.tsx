import React from 'react'
import {View, Text} from 'react-native'

const BLACK = "rgb(30,30,30)";
const WHITE = "rgb(230,230,230)";

interface RowProps {
    row: number;
}

interface SquareProps extends RowProps {
    col: number;
}

const Row = ({row}: RowProps) => {
    return (
        <View style={{flex:1, flexDirection:'row'}}>
            {
                new Array(8).fill(0).map((_,col) => (
                    <Square key={col} row={row} col={col}/>
                ))
            }
        </View>
    )
}

const Square = ({row,col}: SquareProps) => {
    const offset = row % 2 === 0 ? 1 : 0;
    const backgroundColor = (col+offset) % 2 === 0 ? BLACK : WHITE;
    return (
        <View style={{flex:1, backgroundColor}}>
            
        </View>
    )
}

const Background = () => {
    return (
        <View style={{flex: 1}}>
            {
                new Array(8).fill(0).map((_,row) => (
                    <Row key={row} row={row} />
                ))
            }
        </View>
    )
}

export default Background
