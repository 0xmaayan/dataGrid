import {
  ADD_DATA,
  IS_LOADING,
  HAS_ERROR
} from './types';

export const siteAddData = (formData) => {

  return function(dispatch) {
    return axios.post(process.env.MIX_API_URL+'import/', formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(({ data }) => {
      dispatch(siteAddDataSuccess(data.data));
    });
  };
};

export function siteAddDataSuccess(data){
  return {
    type: ADD_DATA,
    payload: data
  };
}

export function dataIsLoading(bool){
  return {
    type: IS_LOADING,
    isLoading: bool
  };
}

export function datasHasError(bool){
  return {
    type: HAS_ERROR,
    hasError: bool
  };
}