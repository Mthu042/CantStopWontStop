import styled from 'styled-components';
import { Accordion } from '@medly-components/core';

export const StyledAccordion = styled(Accordion)`
    margin-top: 30px;
    z-index: 1;
    height: 100%;
    display: block;
`;

export const Content = styled('div')`
    padding: 1.8rem;
    background-color: #ccd5ff;
    :first-child {
        border-radius: 8px 8px 0 0;
    }
    :hover {
        background-color: #f9faff;
    }
`;

export const ExtraContent = styled('div')`
    background-color: #fff;
    padding: 1.8rem;
    ::after {
        position: absolute;
        content: '';
        left: calc(100% + 9px);
        color: red;
        width: 2px;
        height: 80%;
        top: 10%;
        background-color: black;
    }
`;

export const RightSide = styled('div')`
    display: flex;
    align-items: center;
    background-color: #fff;
    padding-bottom: 10px;
    & > * {
        margin-left: ${({ theme }) => theme.spacing.S2};
    }
`;
