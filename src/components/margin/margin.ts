import styled from 'styled-components';
import { SpacingProps, unpackSpacingValue } from '../spacing';
import { Box } from '../box';

export const Margin = styled(Box)<SpacingProps>`
    display: block;
    margin-top: ${unpackSpacingValue('top', 'vertical')};
    margin-bottom: ${unpackSpacingValue('bottom', 'vertical')};
    margin-left: ${unpackSpacingValue('leading', 'horizontal')};
    margin-right: ${unpackSpacingValue('trailing', 'horizontal')};
`;
