/**
 * Преобразует значение в пиксели
 * @param n
 */
export function _px(n: string | number | any): any {
    if (typeof n === 'number') return n + 'px';
    return n;
}
