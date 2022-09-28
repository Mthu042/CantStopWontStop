import { Avatar, Text, Accordion } from '@medly-components/core';
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import * as Styled from './UAvatar.styled';

export const UAvatar: React.FC & WithStyle = () => {
    return (
        <Styled.StyledAccordion>
            <Accordion>
                <Accordion.Header>
                    <Styled.RightSide>
                        <Avatar size="M">JD</Avatar>
                    </Styled.RightSide>
                </Accordion.Header>
                <Accordion.Content>
                    <Styled.Content>
                        <Text>Content1</Text>
                    </Styled.Content>
                    <Styled.Content>
                        <Text>Content2</Text>
                    </Styled.Content>
                    <Styled.Content>
                        <Text>Content3</Text>
                    </Styled.Content>
                </Accordion.Content>
            </Accordion>
        </Styled.StyledAccordion>
    );
};

export default UAvatar;
