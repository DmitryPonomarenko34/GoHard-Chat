// Core
import { useDispatch } from 'react-redux';

// Action
import { keyboardActions } from './slice';

// Tools
import { useSelector } from '../../../tools/hooks';

// Types
import { KeybordWords, KeybordWordsState } from './types';

export const useKeyboard = () => {
    const dispatch = useDispatch();
    const keyboard = useSelector((state) => state.keyboard);

    const getKeyboardWord = (word: KeybordWords) => void dispatch(keyboardActions.setKeyboard(word));
    const resetKeybordWords = () => void dispatch(keyboardActions.resetKeyboard(''));
    const deleteLastWord = (keyboard: KeybordWordsState) => void dispatch(keyboardActions.deleteLastWord(keyboard));

    return {
        keyboard,
        getKeyboardWord,
        resetKeybordWords,
        deleteLastWord,
    };
};
