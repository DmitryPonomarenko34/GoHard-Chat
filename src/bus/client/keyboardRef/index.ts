// Core
// import { useEffect } from 'react';

// Tools
import { useSelector } from '../../../tools/hooks';

// Saga
// import { useKeyboardRefSaga } from './saga';

export const useKeyboardRef = () => {
    const keyboardRef = useSelector((state) => state.keyboardRef); // Add keyboardRef to ./src/init/redux/index.ts

    return {
        keyboardRef,
    };
};
