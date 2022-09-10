import AsyncStorage from "@react-native-async-storage/async-storage";
// import { AsyncStorage } from "react-native";
import axios from "axios";




// import AsyncStorage from "@react-native-async-storage/async-storage";

// export async function apiReq(
//   endPoint,
//   data,
//   method,
//   headers,
//   requestOptions = {}
// ) {
//   return new Promise(async (res, rej) => {
//     headers = {
//       ...headers,
//     };

//     if (method === "get" || method === "delete") {
//       data = {
//         ...requestOptions,
//         ...data,
//         headers,
//       };
//     }

//     axios[method](endPoint, data, { headers })
//       .then((result) => {
//         const { data } = result;

//         if (data.status === false) {
//           return rej(data);
//         }

//         return res(data);
//       })
//       .catch((error) => {
//         console.log(error);
//         console.log(error && error.response, "the error respne");
//         if (error && error.response && error.response.status === 401) {
//           return rej({ ...error.response.data, msg: "Aunauthorized" });
//         }
//         if (error && error.response && error.response.data) {
//           if (!error.response.data.message) {
//             return rej({
//               ...error.response.data,
//               msg: error.response.data.message || "Network Error",
//             });
//           }
//           return rej(error.response.data);
//         } else {
//           return rej({ message: "Network Error", msg: "Network Error" });
//         }
//       });
//   });
// }

// export function apiPost(endPoint, data, headers = {}) {
//   return apiReq(endPoint, data, "post", headers);
// }

// export function apiDelete(endPoint, data, headers = {}) {
//   return apiReq(endPoint, data, "delete", headers);
// }

// export function apiGet(endPoint, data, headers = {}, requestOptions) {
//   return apiReq(endPoint, data, "get", headers, requestOptions);
// }

// export function apiPut(endPoint, data, headers = {}) {
//   return apiReq(endPoint, data, "put", headers);
// }



export const storeUserData=async (key, value)=>{
    try {
        const jsonValue= JSON.stringify(value)
        await AsyncStorage.setItem(key,jsonValue)
    } catch (error) {
        console.log('error in Async storage',error)
    }
}



export const getUserData= async (key)=>{
   return new Promise((resolve, rejected)=>{
      AsyncStorage.getItem(key).then((res)=>{
        let jsonRes=JSON.parse(res)
        resolve(jsonRes)
      }).catch((error)=>{
        rejected(error)
      })
   })
}


export const clearStoreData= async()=>{
    await AsyncStorage.clear()
}