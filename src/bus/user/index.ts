// Core
// import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga
// import { useUserSaga } from './saga';

export const useUser = () => {
    // const { fetchUser } = useUserSaga();
    const user = useSelector((state) => state.user); // Add user to ./src/init/redux/index.ts

    // useEffect(() => {
    //     fetchUser();
    // }, []);

    return {
        user,
    };
};
