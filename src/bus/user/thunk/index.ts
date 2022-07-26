// Thunk
import { registerUser } from './registerUser';
import { refreshUser } from './refreshUser';

// Hooks
import { useAppDispatch } from '../../../tools/hooks';

// Constant
import { USER_ID } from '../../../init/constants';

export const useUserThunk = () => {
    const dispatch = useAppDispatch();

    return {
        refreshUser: () => {
            const userId = localStorage.getItem(USER_ID);

            if (userId) {
                dispatch(refreshUser(userId));
            }
        },
        registerUser: (userName: string) => void dispatch(registerUser(userName)),
    };
};
