import { Text } from '@medly-components/core';
import { StarIcon } from '@medly-components/icons';
import { MedlySidenavHeader, SideNav as MedlySideNav } from '@medly-components/layout';
import React, { useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export const SideNav: React.FC = React.memo(() => {
    const { pathname } = useLocation(),
        history = useHistory(),
        handlePathChange = useCallback((page: string) => history.push(page), [history]);
    return (
        <MedlySideNav defaultOpen={false} onChange={handlePathChange} active={pathname} defaultActive="/">
            <MedlySidenavHeader />
            <MedlySideNav.List>
                <MedlySideNav.Nav path="/Libraries">
                    <StarIcon />
                    <Text>Libraries</Text>
                </MedlySideNav.Nav>
                <MedlySideNav.Nav path="/Authors">
                    <StarIcon />
                    <Text>Authors</Text>
                </MedlySideNav.Nav>
            </MedlySideNav.List>
        </MedlySideNav>
    );
});
SideNav.displayName = 'AppSideNav';
