import React from 'react';
import {
    StyleSheet,
    View,
    FlatList
} from 'react-native';

import CategoryChoice from "./CategoryChoice";

export default class CategoryContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: {}
        }

    }

    render() {
        console.log("totogro selected : " + this.state.selected)

        return (
            <View style={Styles.container}>
                <FlatList
                    horizontal={true}
                    data={this.props.categories}
                    renderItem={({item}) => (
                        <CategoryChoice
                            key={item.answer_id}
                            category={{item}}
                            onPress={this.clickedOnchoice}
                        />
                    )}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index}
                />
            </View>
        )

    }

    clickedOnchoice = (id, checked) => {
        console.log("totogro clicked on choice : " + id + " the button is checked ? " + checked)

        let selected = [...this.state.selected]
        selected[id] = {
            id: id,
            checked: checked
        };

        this.props.onChoicesChanged(selected)
        this.setState({selected});

    }

}

const Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
