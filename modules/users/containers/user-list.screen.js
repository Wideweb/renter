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
    getUsers,
    addStar,
} from '../reducers/users';
import UserListItem from '../components/user-list-item.component';

class UserListScreen extends React.Component {
    static navigationOptions = {
        title: 'Users',
    };

    componentDidMount() {
        this.props.navigation.addListener(
            'didFocus',
            () => this.props.getUsers()
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
                    data={this.props.users}
                    renderItem={this._renderItem.bind(this)}
                    keyExtractor={({ id }, index) => id}
                />
            </View>
        );
    }

    _renderItem = ({ item }) => (
        <UserListItem
            onAddStar={user => this.props.addStar(user.id)}
            user={item}
        />
    );
}

const mapStateToProps = state => {
    return {
        users: state.users.list.sort((a, b) => b.createdAt - a.createdAt),
        searchSettings: state.searchSettings,
        isLoading: state.users.isLoading,
        isFail: state.users.isFail,
        error: state.users.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers()),
        addStar: (id) => dispatch(addStar(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListScreen);
