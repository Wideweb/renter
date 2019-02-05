import React from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';

export default class TaskListItem extends React.PureComponent {
    _onAssign = () => {
        this.props.onAssign(this.props.task);
    };

    _onUnassign = () => {
        this.props.onUnassign(this.props.task);
    };

    render() {
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View>
                    <Text>{this.props.task.name}</Text>
                    <Text>Reporter: {this.props.task.owner}</Text>
                    <Text>Assignee: {this.props.task.assignee}</Text>
                    {this._actionBtn()}
                </View>
            </TouchableOpacity>
        );
    }

    _actionBtn() {
        if (this.props.owned) {
            return <React.Fragment></React.Fragment>
        }

        if (this.props.assigned) {
            <Button
                onPress={this._onUnassign}
                title="Unassign"
                color="#841584"
            />
        } else {
            <Button
                onPress={this._onAssign}
                title="Assign"
                color="#841584"
            />
        }
    }
}
