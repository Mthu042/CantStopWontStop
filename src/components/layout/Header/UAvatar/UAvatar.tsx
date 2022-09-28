import { Avatar, Text, Accordion } from '@medly-components/core';
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import * as Styled from './UAvatar.styled';

export const UAvatar: React.FC & WithStyle = () => {
    return (
        <Styled.StyledAccordion>
            <Accordion>
                <Accordion.Header>
                    <div
                        style={{
                            backgroundColor: '#fff'
                        }}
                    >
                        <Styled.RightSide>
                            <Avatar size="M">JD</Avatar>
                        </Styled.RightSide>
                    </div>
                </Accordion.Header>
                <Accordion.Content>
                    <div
                        style={{
                            backgroundColor: '#ecfbf9',
                            padding: `1.8rem`
                        }}
                    >
                        <Text>Content</Text>
                    </div>
                    <div
                        style={{
                            backgroundColor: '#ecfbf9',
                            padding: `1.8rem`
                        }}
                    >
                        <Text>Content</Text>
                    </div>
                    <div
                        style={{
                            backgroundColor: '#ecfbf9',
                            padding: `1.8rem`
                        }}
                    >
                        <Text>Content</Text>
                    </div>
                </Accordion.Content>
            </Accordion>
        </Styled.StyledAccordion>
    );
};

export default UAvatar;
