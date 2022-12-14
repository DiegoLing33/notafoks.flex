import { _px } from '../../utils/utils';
import { BoxProps } from '../box';

export interface SpacingProps extends BoxProps {
    trailing?: number | string;
    leading?: number | string;
    top?: number | string;
    bottom?: number | string;
    vertical?: number | string;
    horizontal?: number | string;
    all?: number | string;
}

export const unpackSpacingValue = (key: keyof SpacingProps, dir: 'vertical' | 'horizontal') => {
    return (p: SpacingProps) => {
        if (p.all) return _px(p.all);
        if (p[dir]) return _px(p[dir]);
        return _px(p[key]);
    };
};
