import {fetchUserPending, fetchUserSuccess, fetchUserError} from './actions/actions';

const axios = require('axios').default;
const config = { headers: { "X-API-Key": "eb0072a039704f78bb662311996b78aa", } }

function fetchUser(userName) {
    return dispatch => {
        dispatch(fetchUserPending());
        axios.get('https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/all/' + userName, config)

        .then(response => response.json())
        .then(response => {
            if(response.error) {
                throw(response.error);
            }
            dispatch(fetchUserSuccess(response));
            return response.products;
        })
        .catch(error => {
            dispatch(fetchUserError(error));
        })
        .finally(function () {
            // always executed
          });
    }
}

export default fetchUser;
