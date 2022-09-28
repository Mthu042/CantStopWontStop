import { Card, Box, Avatar } from '@medly-components/core';
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import { defaultTheme } from '@theme';
import * as Styled from './LibraryCard.styled';

export const LibraryCard: React.FC & WithStyle = () => {
    return (
        <Card
            alignItems="center"
            display="flex"
            flex={1}
            flowDirection="horizontal"
            fullHeight={false}
            fullWidth={false}
            minHeight=""
            minWidth=""
            variant="solid"
            withoutPadding
        >
            <Card
                alignItems="center"
                display="flex"
                flex={1}
                flowDirection="vertical"
                fullHeight={false}
                fullWidth={false}
                separator={false}
                variant="flat"
                withoutPadding={false}
            >
                <Avatar
                    sizes="L"
                    textColor={defaultTheme.colors.green[500]}
                    bgColor={defaultTheme.colors.green[100]}
                    hoverBgColor={defaultTheme.colors.green[400]}
                    hoverTextColor={defaultTheme.colors.white}
                    hoverImgShadowColor="rgba(96, 120, 144, 0.35)"
                    hoverTextShadowColor="rgba(0, 128, 0, 0.35)"
                >
                    <img src="http://i.pravatar.cc/150?img=66" />
                </Avatar>
            </Card>
            <Card
                alignItems="left"
                display="flex"
                flex={6}
                flowDirection="vertical"
                fullHeight={false}
                fullWidth={false}
                separator={false}
                variant="flat"
                withoutPadding={false}
            >
                <Box>17607124</Box>
                <Box>John, Snow</Box>
                <Box>Son of Lyanna Stark and Rhaegar Targaryen, the late Prince of Dragonstone</Box>
            </Card>
        </Card>
    );
};

export default LibraryCard;
