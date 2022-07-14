// Core
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';
import { keyboardActions } from './slice';

// Types
import { KeybordWords } from './types';

export const useKeyboard = () => {
    const dispatch = useDispatch();
    const keyboard = useSelector((state) => state.keyboard); // Add keyboard to ./src/init/redux/index.ts

    const getKeyboardWord = (word: KeybordWords) => void dispatch(keyboardActions.setKeyboard(word));
    const resetKeybordWords = () => void dispatch(keyboardActions.resetKeyboard(null));

    return {
        keyboard,
        getKeyboardWord,
        resetKeybordWords,
    };
};
