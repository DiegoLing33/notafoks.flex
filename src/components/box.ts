import styled from 'styled-components';
import { AutoSelfMixin, AutoTrueSelfMixin, TrueMixin } from '../utils/mixins';
import {FoksUIConfig} from "../config";

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
}

export const Box = styled.div`
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
    ${AutoTrueSelfMixin('gap', FoksUIConfig.middleSize )};

    // Авто примеси с параметром по-умолчанию
    ${AutoTrueSelfMixin('padding', FoksUIConfig.middleSize)};
    ${AutoTrueSelfMixin('margin', FoksUIConfig.middleSize)};

    // Автопримеси
    ${AutoSelfMixin('color')}
`;
