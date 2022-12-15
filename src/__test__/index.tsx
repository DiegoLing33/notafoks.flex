import React from 'react';
import { FlexProps } from '../components';
import { HStack } from '../../dist';

export const Test = () => {
    const props: FlexProps = {};
    return (
        <div>
            <HStack {...props}>1</HStack>
        </div>
    );
};
