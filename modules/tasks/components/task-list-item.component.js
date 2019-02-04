import React from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';

export default class TaskListItem extends React.PureComponent {
    _onAsign = () => {
        this.props.onAsign(this.props.task);
    };

    render() {
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View>
                    <Text>{this.props.task.name}</Text>
                    <Text>Reporter: {this.props.task.owner}</Text>
                    <Text>Asignee: {this.props.task.asignee}</Text>
                    <Button
                        onPress={this.onAsign}
                        title="Asign"
                        color="#841584"
                    />
                </View>
            </TouchableOpacity>
        );
    }
}
