import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableNativeFeedback,
    TouchableHighlight,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';


export default class CategoryChoice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: false
        }
    }

    render() {
        if (Platform.OS === 'android') {
            return (
                <TouchableNativeFeedback
                    onPress={() => this.onPressButton()}
                    background={TouchableNativeFeedback.SelectableBackground()}
                    style={Styles.touchableStyle}
                >
                    {this.renderContent()}
                </TouchableNativeFeedback>
            );
        }
        else {

            return (
                <TouchableHighlight
                    onPress={() => this.onPressButton()}
                    underlayColor={"#FFFFFF"}
                    style={Styles.touchableStyle}
                >
                    {this.renderContent()}

                </TouchableHighlight>
            );
        }
    }

    renderContent() {

        if (this.state.pressed){
            return (
                <View style={Styles.linearGradient_pressed}>
                    <Text
                        style={Styles.choiceStyle}
                    >
                        {this.props.category.item.message}
                    </Text>
                </View>
            )
        }else{
            return (
                <View style={Styles.linearGradient}>
                    <Text
                        style={Styles.choiceStyle}
                    >
                        {this.props.category.item.message}
                    </Text>
                </View>
            )
        }

    }

    onPressButton() {
        this.props.onPress(this.props.category.item.answer_id, !this.state.pressed)
        this.setState(previousState => {
            return {pressed: !previousState.pressed};
        });
    }

}


const Styles = StyleSheet.create({
    touchableStyle: {
        borderRadius: 15,
        padding: 5,
    },
    linearGradient_pressed: {
        backgroundColor: '#000',
        borderRadius: 15,
        padding: 5,
        marginHorizontal: 5
    },
    linearGradient: {
        borderRadius: 15,
        padding: 5,
        marginHorizontal: 5
    },
    container: {
        marginHorizontal: 10,
    },
    choiceStyle: {
        fontSize: 16,
        color: '#11AAFF',
        backgroundColor: 'transparent',
        marginHorizontal: 10,
    },
})