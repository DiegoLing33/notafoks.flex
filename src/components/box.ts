import styled, { css } from 'styled-components';
import { AutoSelfMixin, AutoTrueSelfMixin, TrueMixin } from '../utils/mixins';
import { FoksUIConfig } from '../config';

export type Color = string;

export interface BoxProps {
    w100?: true;
    h100?: true;

    // Внутренние отступы
    p?: true;
    pSmall?: true;
    pLarge?: true;

    // Внешние отступы
    m?: true;
    mSmall?: true;
    mLarge?: true;
    // Соединенные флаги
    padding?: true | string | number;
    margin?: true | string | number;

    color?: string;

    width?: string | number;
    height?: string | number;

    backgroundColor?: Color;
    borderRadius?: string | number;

    hover?: ReturnType<typeof css>;

    fontSize?: string | number;
    fontFamily?: string;

    transition?: string;
}

export const Box = styled.div<BoxProps>`
    // Флаговые примеси
    ${TrueMixin('w100', 'width', '100%')};
    ${TrueMixin('h100', 'height', '100%')};

    // Отступы внутренние
    ${TrueMixin('p', 'padding', FoksUIConfig.middleSize)};
    ${TrueMixin('pSmall', 'padding', FoksUIConfig.smallSize)};
    ${TrueMixin('pLarge', 'padding', FoksUIConfig.largeSize)};

    // Отступы внешние
    ${TrueMixin('m', 'margin', FoksUIConfig.middleSize)};
    ${TrueMixin('mSmall', 'margin', FoksUIConfig.smallSize)};
    ${TrueMixin('mLarge', 'margin', FoksUIConfig.largeSize)};
    ${AutoTrueSelfMixin('gap', FoksUIConfig.middleSize)};

    // Авто примеси с параметром по-умолчанию
    ${AutoTrueSelfMixin('padding', FoksUIConfig.middleSize)};
    ${AutoTrueSelfMixin('margin', FoksUIConfig.middleSize)};

    // Автопримеси
    ${AutoSelfMixin('color')}

    //  Автоматические self-примеси
    ${AutoSelfMixin('width')};
    ${AutoSelfMixin('height')};

    ${AutoSelfMixin('backgroundColor')};
    ${AutoSelfMixin('borderRadius')};

    ${AutoSelfMixin('fontSize')};
    ${AutoSelfMixin('fontFamily')};

    ${AutoSelfMixin('transition')};

    &:hover {
        ${(p) => p.hover && p.hover};
    }
`;
