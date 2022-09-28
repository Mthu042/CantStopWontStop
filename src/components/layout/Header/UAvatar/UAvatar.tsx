import { Avatar, Text, Accordion } from '@medly-components/core';
import { UAvatarProps } from './UAvatar.types';
import React from 'react';
import * as Styled from './UAvatar.styled';

export const UAvatar: React.FC<UAvatarProps> = ({ ...props }) => {
    return (
        <Styled.StyledAccordion>
            <Accordion>
                <Accordion.Header>
                    <Styled.RightSide>
                        {props.src ? (
                            <Avatar {...props}>
                                <img src={props.src} />{' '}
                            </Avatar>
                        ) : (
                            <Avatar {...props}>JD</Avatar>
                        )}
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
