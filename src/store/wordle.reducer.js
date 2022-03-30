import { LOG, TECLADO } from './wordle.actions';

export const getinitialState = () => ({
    attempts: 0,
    hits: null,
    word:[],
    del:null
});

export const wordleReducer = (
    state = getinitialState(),
    action
) => {
    const { payload, type } = action;

    switch (type) {

    case LOG:
        return {
            ...state,
            attempts: payload.attempts,
            hits:  payload.hits
        } 
    case TECLADO:
        const { word } = state;
        var cant = word.length;
       
        if(payload.keyAction === 'DEL') {
            word.pop();
            var key = 'DEL'
        } 
        if(payload.keyAction === 'ENTER') {
            var key = 'ENTER'
        } 
        if(cant <= 4 & payload.keyAction !== 'ENTER'){
            if(word.length < 30 & payload.keyAction !== 'DEL'){
                cant = word.push(payload.keyAction);
            }
        }
        return {
            ...state,
            attempts: cant,
            key: key
        }
    
    // eslint-disable-next-line no-fallthrough
    default:
            return state;
    }
};

export default wordleReducer;
