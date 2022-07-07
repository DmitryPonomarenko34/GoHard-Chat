// Core
// import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga
// import { useMessageSaga } from './saga';

export const useMessage = () => {
    // const { fetchMessage } = useMessageSaga();
    const message = useSelector((state) => state.message); // Add message to ./src/init/redux/index.ts

    // useEffect(() => {
    //     fetchMessage();
    // }, []);

    return {
        message,
    };
};
