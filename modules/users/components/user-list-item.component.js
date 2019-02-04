import React from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';

export default class UserListItem extends React.PureComponent {
    _onAddStar = () => {
        this.props.AddStar(this.props.user);
    };

    render() {
        return (
            <View>
                <Text>{this.props.user.name}</Text>
                <Button
                    onPress={this._onAddStar}
                    title="Add Star"
                    color="#841584"
                />
            </View>
        );
    }
}
