export const LOG = 'LOG';
export const TECLADO = 'TECLADO';

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
