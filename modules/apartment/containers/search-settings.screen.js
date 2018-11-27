import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	CheckBox,
	TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import {
	setPriceMin,
	setPriceMax,
	addRentType,
	removeRentType,
} from '../reducers/search-settings';

class SearchSettingsScreen extends React.Component {
	static navigationOptions = {
		title: 'Search Settings',
	};

	_toogleRoom(room) {
		this._isRoomSelected(room)
			? this.props.removeRentType(room)
			: this.props.addRentType(room);
	}

	_isRoomSelected(room) {
		return this.props.rentType.includes(room);
	}

	render() {
		return (
			<View style={{ flexDirection: 'column', padding: 10 }}>
				<View style={{ flexDirection: 'column', padding: 20 }}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<CheckBox
							value={this._isRoomSelected('1_room')}
							onChange={() => this._toogleRoom('1_room')}>
						</CheckBox>
						<Text style={styles.getStartedText}>
							1 комната
						</Text>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<CheckBox
							value={this._isRoomSelected('2_rooms')}
							onChange={() => this._toogleRoom('2_rooms')}>
						</CheckBox>
						<Text style={styles.getStartedText}>
							2 комнаты
						</Text>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<CheckBox
							value={this._isRoomSelected('3_rooms')}
							onChange={() => this._toogleRoom('3_rooms')}>
						</CheckBox>
						<Text style={styles.getStartedText}>
							3 комнаты
						</Text>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<CheckBox
							value={this._isRoomSelected('4_rooms')}
							onChange={() => this._toogleRoom('4_rooms')}>
						</CheckBox>
						<Text style={styles.getStartedText}>
							4 комнаты
						</Text>
					</View>
				</View>
				<View style={{ flexDirection: 'column', padding: 20 }}>
					<Text style={styles.getStartedText}>
						Цена, $
					</Text>
					<Text style={styles.getStartedText}>
						От
					</Text>
					<TextInput
						style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
						onChangeText={(text) => this.props.setPriceMin(text)}
						value={this.props.priceMin}
					/>
					<Text style={styles.getStartedText}>
						До
					</Text>
					<TextInput
						style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
						onChangeText={(text) => this.props.setPriceMax(text)}
						value={this.props.priceMax}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: '#fff',
	},
});

function mapStateToProps(state) {
	return { ...state.searchSettings };
}

const mapDispatchToProps = {
	setPriceMin,
	setPriceMax,
	addRentType,
	removeRentType,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchSettingsScreen);
