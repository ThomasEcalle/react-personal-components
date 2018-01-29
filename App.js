/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View
} from 'react-native';
import CategoryContainer from "./components/CategoryContainer";
import CategoriesChooser from "./components/CategoriesChooser";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

    constructor(props) {
        super(props)

        this.state = {
            list:
                [
                    {
                        message: 'Choix 1',
                        answer_id: 1
                    },
                    {
                        message: 'Choix 2',
                        answer_id: 2
                    },
                    {
                        message: 'Choix 3',
                        answer_id: 3
                    },
                    {
                        message: 'Choix 4',
                        answer_id: 4
                    },
                    {
                        message: 'Choix 5',
                        answer_id: 5
                    },
                    {
                        message: 'Choix 6',
                        answer_id: 6
                    },
                    {
                        message: 'Choix 7',
                        answer_id: 7
                    },
                    {
                        message: 'Choix 8',
                        answer_id: 8
                    }
                ]

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <CategoriesChooser
                    categories={this.state.list}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
