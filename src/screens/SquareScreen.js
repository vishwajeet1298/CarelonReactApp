import React, { useReducer } from "react";
import { StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";


const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'red':
          return state.red + action.amount > 255 || state.red + action.amount < 0
            ? state
            : { ...state, red: state.red + action.amount };
          
        case 'green':
          return state.green + action.amount > 255 || state.green + action.amount < 0
            ? state
            : { ...state, green: state.green + action.amount };
          
    
        case 'blue':
          return state.blue + action.amount > 255 || state.blue + action.amount < 0
            ? state
            : { ...state, blue: state.blue + action.amount };
          
        default:
          return state;
      }
};
const SquareScreen = (props) => {
    const [state, runmyReducer] = useReducer(reducer, {
        red: 0,
        green: 0,
        blue: 0,
    });
    const { red, green, blue } = state;
    //console.log()


    return (
        <View>
            <ColorCounter
                onIncrease={() =>
                    runmyReducer({ colorToChange: 'red', amount: COLOR_INCREMENT })
                }
                onDecrease={() =>
                    runmyReducer({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })
                }
                color="Red"
            />
            <ColorCounter
                onIncrease={() =>
                    runmyReducer({ colorToChange: 'green', amount: COLOR_INCREMENT })
                }
                onDecrease={() =>
                    runmyReducer({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })
                }
                color="Green"
            />

            <ColorCounter
                onIncrease={() =>
                    runmyReducer({ colorToChange: 'blue', amount: COLOR_INCREMENT })
                }
                onDecrease={() =>
                    runmyReducer({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })
                }
                color="Blue"
            />

            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red},${green},${blue})`,
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({});
export default SquareScreen;