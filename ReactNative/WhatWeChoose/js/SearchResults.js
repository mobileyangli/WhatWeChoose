/**
 * Created by yangdongling on 16/6/14.
 *
 * @flow
 */

'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    ActivityIndicatorIOS,
    Image,
    ListView
} from 'react-native';

class SearchResults extends Component {
    constructor(props) {
        super(props)
        var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1.guid !== r2.guid});
        this.state = {dataSource: dataSource.cloneWithRows(this.props.listings)};
    }

    renderRow(rowData, sectionID, rowID) {
        return (
            <TouchableHighlight underlayColor='#ddd'>
                <View>
                    <Text>{rowData.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)}/>
        );
    }
}

module.exports=SearchResults;
