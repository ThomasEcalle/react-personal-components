import React from 'react';
import {
    StyleSheet,
    View,
    Platform,
    TouchableNativeFeedback,
    TouchableHighlight,
    Text,
} from 'react-native';

import CategoryContainer from "./CategoryContainer";

export default class CategoriesChooser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: []
        }
    }

    render() {
        return (
            <View style={Styles.container}>
                {this.renderContainer()}
                {this.renderValidate()}
            </View>
        )

    }

    renderContainer() {
        return (
            <CategoryContainer
                categories={this.props.categories}
                onChoicesChanged={(selected) => {
                    this.setState({selected})
                }}
            />
        )
    }

    renderValidate() {
        if (Platform.OS === 'android') {
            return (
                <TouchableNativeFeedback
                    onPress={this.onPressValidate}
                    background={TouchableNativeFeedback.SelectableBackground()}
                    style={Styles.touchableStyle}
                >
                    <Text style={Styles.validate}>Valider</Text>
                </TouchableNativeFeedback>
            );
        }
        else {

            return (
                <TouchableHighlight
                    onPress={this.onPressValidate}
                    underlayColor={"#FFFFFF"}
                    style={Styles.touchableStyle}
                >
                    <Text style={Styles.validate}>Valider</Text>
                </TouchableHighlight>
            );
        }
    }

    onPressValidate = () => {
        let selected = [...this.state.selected]
        let result = []
        let i = 0
        selected.forEach((category) => {
            if (category !== undefined) {
                console.log("CATEGORIE : " + JSON.stringify(category))
                result[i] = category
                i++
            }
        });

        // send it to APP
        console.log(JSON.stringify(result))
    }

}

const Styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    validate: {
        padding: 15
    },
    touchableStyle: {
        borderRadius: 15,
        padding: 5,
    },
})
