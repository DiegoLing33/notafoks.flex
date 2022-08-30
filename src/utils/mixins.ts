import { css } from 'styled-components';
import { _px } from './utils';
import { FlexProps } from '../components/flex';

/**
 * Примесь флага true
 *
 * @param name
 * @param key
 * @param value
 */
export function TrueMixin(name: keyof FlexProps, key: string, value: string) {
    return (props: FlexProps) =>
        props[name] &&
        css`
            ${key}: ${_px(value)} !important;
        `;
}

/**
 * Примесь флага true с параметром по-умолчанию
 *
 * @param name
 * @param key
 * @param opt
 */
export function AutoTrueMixin(name: keyof FlexProps, key: string, opt: string) {
    return (props: FlexProps) =>
        props[name] &&
        css`
            ${key}: ${props[name] === true ? opt : _px(props[name])} !important;
        `;
}

/**
 * Примесь флага true с параметром по-умолчанию и автоматизацией
 *
 * @param name
 * @param opt
 */
export function AutoTrueSelfMixin(name: keyof FlexProps, opt: string) {
    return AutoTrueMixin(name, name, opt);
}

/**
 * Автоматическая примесь
 * @param name
 * @param key
 * @constructor
 */
export function AutoMixin(name: keyof FlexProps, key: string) {
    return (props: FlexProps) =>
        props[name] &&
        css`
            ${key}: ${_px(props[name])} !important;
        `;
}

/**
 * Автоматическая само-примесь
 * @param name
 * @constructor
 */
export function AutoSelfMixin(name: keyof FlexProps) {
    return AutoMixin(name, name as string);
}
