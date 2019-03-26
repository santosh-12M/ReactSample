
import axios from 'axios';

const apiUrl = 'http://localhost:8080/fuzz';

export const loginPost = ({ login }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/login`, login)
      .then(response => {
        dispatch(createPostSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const loginPostSuccess =  (data) => {
    return {
      type: GET_LOGIN_USER_SUCCESS,
      payload: data
    }
  };