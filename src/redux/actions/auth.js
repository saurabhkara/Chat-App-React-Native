import axios from "axios";
import { SIGNUP_API_URL, VERIFY_OTP_API_URL } from "../../config/url";
import { storeUserData } from "../../utils/utils";
import { saveUserData } from "../reducers/auth";
import { store } from "../store";

export const signUp = async (data) => {
  try {
    const res = await axios.post(SIGNUP_API_URL, data);
    // console.log('response from Signup api',res?.data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const verifyOTP = async (data) => {
  // const res = await axios.post(VERIFY_OTP_API_URL,data);
  // console.log(res?.data)
  // if(res?.data.data){

  //   store.dispatch(saveUserData(res?.data?.data))
  // }

  return new Promise((resolve, reject) => {
    axios
      .post(VERIFY_OTP_API_URL, data)
      .then((res) => {
        if (!!res?.data?.data) {
          storeUserData("userData", res?.data?.data)
            .then(() => {
              store.dispatch(saveUserData(res?.data?.data));
              resolve(res);
            })
            .catch((error) => {
              resolve(error);
            });
          return;
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//================================================================================

// async function getUserDetail() {
//   try {
//     const data = await axios.get("http://192.168.192.153:3000/user/users");
//     // const data = await axios.get('https://fakestoreapi.com/products/1');
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getUserDetail()
