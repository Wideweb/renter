import React from 'react';
import {
    Text,
    View,
    FlatList,
    ActivityIndicator,
    ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { getApartments } from '../reducers/apartments';

class SearchResultsScreen extends React.Component {
    static navigationOptions = {
        title: 'Search Results',
    };

    componentDidMount() {
        this.props.navigation.addListener(
            'didFocus',
            () => this.props.getApartments(this.props.searchSettings)
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
                    data={this.props.apartments}
                    renderItem={({ item }) => <Text>{item.address}, {item.amount}</Text>}
                    keyExtractor={({ id }, index) => id}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        apartments: state.apartments.list,
        searchSettings: state.searchSettings,
        isLoading: state.apartments.isLoading,
        isFail: state.apartments.isFail,
        error: state.apartments.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getApartments: (settings) => dispatch(getApartments(settings))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsScreen);

/*

contact:
owner: true
__proto__: Object
created_at: "2018-11-24T11:54:23+0300"
id: 360978
last_time_up: "2018-11-24T11:54:23+0300"
location:
address: "Минск, улица Розы Люксембург, 175"
latitude: 53.887417
longitude: 27.504669
user_address: "Минск, улица Розы Люксембург, 175"
__proto__: Object
photo: "https://content.onliner.by/apartment_rentals/2605849/600x400/e084dfcbc3414565380f71af0cbef33b.jpeg"
price:
amount: "125.00"
converted:
BYN: {amount: "263.13", currency: "BYN"}
USD: {amount: "125.00", currency: "USD"}
__proto__: Object
currency: "USD"
__proto__: Object
rent_type: "room"
up_available_in: 86287
url: "https://r.onliner.by/ak/apartments/360978"

*/
