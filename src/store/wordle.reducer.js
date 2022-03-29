import { LOG } from './wordle.actions';

export const getinitialState = () => ({
    attempts: null,
    hits: null
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
              
    // eslint-disable-next-line no-fallthrough
    default:
            return state;
    }
};

export default wordleReducer;
