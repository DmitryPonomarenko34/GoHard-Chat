// Core
import { useDispatch } from 'react-redux';

// Bus
import { togglerCreatorAction } from '../client/togglers';

// Saga
import { useUserSaga } from './saga';
import { useMessages } from '../messages';

// Action
import { userActions } from './slice';

// Tools
import { useSelector } from '../../tools/hooks';

// Constant
import { USER_ID } from '../../init/constants';

export const useUser = () => {
    const dispatch = useDispatch();
    const { refreshUser, registerUser } = useUserSaga();
    const { clearMessages } = useMessages();
    const user = useSelector((state) => state.user);

    const logoutUser = () => {
        localStorage.removeItem(USER_ID);
        clearMessages();
        dispatch(userActions.clearUser(null));
        dispatch(togglerCreatorAction({ type: 'isLoggedIn', value: false }));
    };

    return {
        user,
        refreshUser,
        registerUser,
        logoutUser,
    };
};
