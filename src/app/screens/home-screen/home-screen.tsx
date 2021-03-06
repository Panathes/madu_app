import * as React from 'react';
import { View, ViewStyle, TextStyle, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, Header, Screen, Icon } from '../../components';
import { color, spacing } from '../../theme';
import { exampleActions } from '../../actions/example.actions';

const FULL: ViewStyle = { flex: 1 };
const TEXT: TextStyle = {
    color: color.palette.white,
    fontFamily: 'Montserrat'
};
const CONTENT: TextStyle = {
    ...TEXT,
    color: color.palette.black,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: spacing[5],
    textAlign: 'center'
};

const CONTAINER: ViewStyle = {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[4]
};

const BOLD: TextStyle = { fontWeight: 'bold' };

const CONTINUE: ViewStyle = {
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[4],
    backgroundColor: '#5D2555'
};
const CONTINUE_TEXT: TextStyle = {
    ...TEXT,
    ...BOLD,
    fontSize: 13,
    letterSpacing: 2
};

const HEADER: TextStyle = {
    paddingTop: spacing[3],
    paddingBottom: spacing[4] + spacing[1],
    paddingHorizontal: 0
};
const HEADER_TITLE: TextStyle = {
    ...CONTENT,
    ...BOLD,
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
    letterSpacing: 1.5
};

export interface HomeScreenProps {
    loadContent: () => string;
    content: string;
    navigation: any;
}

export const Home: React.FunctionComponent<HomeScreenProps> = (props) => {
    const nextScreen = React.useMemo(
        () => () => props.navigation.navigate('other'),
        [props.navigation]
    );
    return (
        <View style={FULL}>
            <Screen style={CONTAINER} preset="scroll">
                <Header
                    headerText="Welcome Screen"
                    style={HEADER}
                    titleStyle={HEADER_TITLE}
                />
                <Button
                    style={CONTINUE}
                    textStyle={CONTINUE_TEXT}
                    onPress={() => props.loadContent()}
                    text="Load Content"
                />
                <Text style={CONTENT}>{props.content}</Text>
                <Button
                    style={CONTINUE}
                    textStyle={CONTINUE_TEXT}
                    text="Navigate to Other Screen"
                    onPress={nextScreen}
                />
            </Screen>
        </View>
    );
};

const mapStateToProps = (state: any) => ({
    content: state.root.content
});

const mapDispatchToProps = (dispatch: any) => ({
    loadContent: () => dispatch(exampleActions.setContent())
});

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Home);
