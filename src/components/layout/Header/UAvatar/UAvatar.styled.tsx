import styled from 'styled-components';
import { Accordion } from '@medly-components/core';

export const StyledAccordion = styled(Accordion)`
    margin-top: 30px;
    z-index: 1;
    height: 100%;
    display: block;
`;

export const RightSide = styled('div')`
    display: flex;
    align-items: center;
    & > * {
        margin-left: ${({ theme }) => theme.spacing.S2};
    }
`;
