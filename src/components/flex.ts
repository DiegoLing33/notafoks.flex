import styled from 'styled-components';
import { AutoMixin, TrueMixin } from '../utils/mixins';
import { Box, BoxProps } from './box';

export type FlexAlign = 'center' | 'space-between' | 'flex-start' | 'flex-end';

/**
 * Свойства флекса
 */
export interface FlexProps extends BoxProps {
    // True флаги
    column?: true;

    // Mins
    minH100vh?: true;

    // Отступы
    alignCenter?: true;
    alignSpace?: true;
    justifyCenter?: true;
    justifySpace?: true;

    // Полная оцентровка
    allCenter?: true;

    // Свойства
    gap?: true | string | number;

    // Автоматические свойства
    justify?: FlexAlign;
    align?: FlexAlign;
}

/**
 * Флекс элемент
 */
export const Flex = styled(Box)<FlexProps>`
    display: flex;
    //  Флаговые примеси
    ${TrueMixin('column', 'flex-direction', 'column')};

    ${TrueMixin('minH100vh', 'min-height', '100vh')};

    // Полная оцентровка
    ${TrueMixin('allCenter', 'align-items', 'center')};
    ${TrueMixin('allCenter', 'justify-content', 'center')};

    // Отступы
    ${TrueMixin('alignCenter', 'align-items', 'center')};
    ${TrueMixin('alignSpace', 'align-items', 'space-between')};
    ${TrueMixin('justifyCenter', 'justify-content', 'center')};
    ${TrueMixin('justifySpace', 'justify-content', 'space-between')};

    //  Автоматические примеси
    ${AutoMixin('justify', 'justify-content')};
    ${AutoMixin('align', 'align-items')};
`;
