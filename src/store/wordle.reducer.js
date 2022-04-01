import { LOG, TECLADO, SET_WORD } from './wordle.actions';

export const getinitialState = () => ({
    attempts: 0,
    hits: null,
    word:[],
    words:[],
    del:null
});

export const wordleReducer = (
    state = getinitialState(),
    action
) => {
    const { payload, type } = action;
    const { word, words } = state;

    switch (type) {

    case LOG:
        return {
            ...state,
            attempts: payload.attempts,
            hits:  payload.hits
        } 
    case TECLADO:
        var cant = word.length;
       
        if(payload.keyAction === 'DEL') {
            word.pop();
            words.pop();
            var key = 'DEL'
        } 
        if(payload.keyAction === 'ENTER') {
            key = 'ENTER'
        } 
        if(cant <= 4 & payload.keyAction !== 'ENTER'){
            if(word.length < 30 & payload.keyAction !== 'DEL'){ //register every letter to be check it
               let  obj = {
                    letter: payload.keyAction,
                    color: 'fill'
                };
                cant = word.push(payload.keyAction);
                var hit = words.push(obj);
            }
        }
        return {
            ...state,
            attempts: cant,
            key: key
        }
    case SET_WORD:
        
        const {index, color} = payload;
        words[index].color = color;
        
        return {
            ...state
        } 

    // eslint-disable-next-line no-fallthrough
    default:
            return state;
    }
};

export default wordleReducer;
