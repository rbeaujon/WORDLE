export const LOG = 'LOG';
export const TECLADO = 'TECLADO';
export const SET_WORD = 'SET_WORD';
export const NEW_LINE = 'NEW_LINE';
export const END_GAME = 'END_GAME';


export const Log = (attempts, hits) => ({
    type: LOG,
    payload: {
        attempts,
        hits

    }
});
export const keyboardAction = (keyAction) => ({
    type: TECLADO,
    payload: {
        keyAction
    }
});
export const setWord = (index, color) => ({
    type: SET_WORD,
    payload: {
        index,
        color
    }
});
export const newLine = (hits) => ({
    type: NEW_LINE,
    payload: {
        hits
    }
});

export const endGame = () => ({
    type: END_GAME,
    payload: {
        
    }
});