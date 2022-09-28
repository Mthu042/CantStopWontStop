import { Text } from '@medly-components/core';
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import * as Styled from './Header.styled';
import UAvatar from './UAvatar/UAvatar';

export const Header: React.FC & WithStyle = () => {
    return (
        <Styled.Header>
            <Styled.LeftSide>
                <Text textWeight="Strong" textVariant="h4">
                    Главная страница
                </Text>
            </Styled.LeftSide>
            <UAvatar />
        </Styled.Header>
    );
};

Header.displayName = 'Header';
Header.Style = Styled.Header;

export default Header;
