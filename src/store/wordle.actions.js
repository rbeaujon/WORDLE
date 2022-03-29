export const LOG = 'LOG';

export const log = (attempts, hits) => ({
    type: LOG,
    payload: {
        attempts,
        hits

    }
});
