import { PageContent } from '@components/layout';
import React from 'react';
import { Props } from './types';

export const Authors: React.FC<Props> = ({ isLoading }) => <PageContent isLoading={isLoading}>Авторы</PageContent>;
