import axios from 'axios';

export const FETCH_USERS = 'fetch_user';
export const fetchUsers  = () => async dispatch => {
    const res = await axios.get('https://react-ssr-api.herokuapp.com/users');

    console.log("actions", res)
    dispatch({
        type: FETCH_USERS,
        payload: res
    })
};