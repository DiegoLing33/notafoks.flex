import styled from 'styled-components';
import { SpacingProps, unpackSpacingValue } from '../spacing';
import { Box } from '../box';

export const Padding = styled(Box)<SpacingProps>`
    display: block;
    padding-top: ${unpackSpacingValue('top', 'vertical')};
    padding-bottom: ${unpackSpacingValue('bottom', 'vertical')};
    padding-left: ${unpackSpacingValue('leading', 'horizontal')};
    padding-right: ${unpackSpacingValue('trailing', 'horizontal')};
`;
