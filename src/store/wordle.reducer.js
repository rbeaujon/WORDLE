import { LOG, TECLADO } from './wordle.actions';

export const getinitialState = () => ({
    attempts: 0,
    hits: null,
    word:[]
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
        if(word.length < 30){
            var cant = word.push(payload.keyAction);
        }
        
  
        return {
            ...state,
            attempts: cant
        }
    
    // eslint-disable-next-line no-fallthrough
    default:
            return state;
    }
};

export default wordleReducer;
