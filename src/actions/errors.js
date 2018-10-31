export const ERROR_API = 'ERROR_API';
export const RESET_ERROR = 'RESET_ERROR';

export const setError = (error) => (
    {
        type: ERROR_API,
        error
    }
)

export const resetError = () => (
    {
        type: RESET_ERROR
    }
)
