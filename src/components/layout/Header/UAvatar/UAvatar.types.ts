import { ReactNode } from 'react';
import { AnyStyledComponent } from 'styled-components';

export interface UAvatarProps {
    src?: string;
    size?: 'S' | 'M' | 'L';
    textColor?: string;
    Style?: AnyStyledComponent;
}
