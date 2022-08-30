import styled from 'styled-components';
import { Flex } from './flex';

/**
 * Вертикальный стек
 */
export const VStack = styled(Flex)`
    display: flex;
    flex-direction: column;
`;

/**
 * Горизонтальный стек
 */
export const HStack = styled(Flex)`
    display: flex;
    flex-direction: row;
`;
