import React from 'react';
import {
    Text,
    View,
    FlatList,
    ActivityIndicator,
    ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { 
    getTasks,
    assignTask,
    unassignTask,
} from '../reducers/tasks';
import TaskListItem from '../components/task-list-item.component';

class ReadyForPDTScreen extends React.Component {
    static navigationOptions = {
        title: 'Ready For PDT',
    };

    componentDidMount() {
        this.props.navigation.addListener(
            'didFocus',
            () => this.props.getTasks()
        );
    }

    render() {
        if (this.props.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        if (this.props.isFail) {
            return (
                <ScrollView style={{ flex: 1, padding: 20 }}>
                    <Text>
                        {this.props.error}
                    </Text>
                </ScrollView>
            )
        }

        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <FlatList
                    data={this.props.tasks}
                    renderItem={this._renderItem.bind(this)}
                    keyExtractor={({ id }, index) => id}
                />
            </View>
        );
    }

    _renderItem = ({ item }) => (
        <TaskListItem
            onAssign={task => this.props.assignTask(task.id)}
            onUnassign={task => this.props.unassignTask(task.id)}
            task={item}
            owned={item.ownerId === this.props.user.id}
            assigned={item.assigneeId === this.props.user.id}
        />
    );
}

const mapStateToProps = state => {
    return {
        user: state.auth.info,
        tasks: state.tasks.list.sort((a, b) => b.createdAt - a.createdAt),
        searchSettings: state.searchSettings,
        isLoading: state.tasks.isLoading,
        isFail: state.tasks.isFail,
        error: state.tasks.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTasks: () => dispatch(getTasks()),
        assignTask: (id) => dispatch(assignTask(id)),
        unassignTask: (id) => dispatch(unassignTask(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadyForPDTScreen);
