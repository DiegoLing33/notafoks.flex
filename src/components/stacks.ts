import styled from 'styled-components';
import { Flex, FlexProps } from './flex';

/**
 * Вертикальный стек
 */
export const VStack = styled(Flex)<FlexProps>`
    display: flex;
    flex-direction: column;
`;

/**
 * Горизонтальный стек
 */
export const HStack = styled(Flex)<FlexProps>`
    display: flex;
    flex-direction: row;
`;
