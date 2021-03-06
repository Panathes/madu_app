import * as React from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';
import { Screen, Header } from '../../components';
import { color, spacing } from '../../theme';

const FULL: ViewStyle = { flex: 1 };
const TEXT: TextStyle = {
    color: color.palette.black,
    fontFamily: 'Montserrat'
};

const BOLD: TextStyle = { fontWeight: 'bold' };

const CONTAINER: ViewStyle = {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[4]
};

const HEADER: TextStyle = {
    paddingTop: spacing[3],
    paddingBottom: spacing[4] + spacing[1],
    paddingHorizontal: 0
};
const HEADER_TITLE: TextStyle = {
    ...TEXT,
    ...BOLD,
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
    letterSpacing: 1.5
};

export interface SettingsScreenProps {
    loadContent: () => string;
    content: string;
    navigation: any;
}

export const SettingsScreen: React.FunctionComponent<SettingsScreenProps> = () => (
    <View style={FULL}>
        <Screen
            style={CONTAINER}
            preset="scroll"
            backgroundColor={color.transparent}
        >
            <Header
                headerText="Settings Screen"
                style={HEADER}
                titleStyle={HEADER_TITLE}
            />
        </Screen>
    </View>
);
