import { PageContent } from '@components/layout';
import { LibraryCard } from '@components/core';
import React from 'react';
import { Props } from './types';

export const Libraries: React.FC<Props> = ({ isLoading }) => (
    <PageContent isLoading={isLoading}>
        <LibraryCard />
    </PageContent>
);
