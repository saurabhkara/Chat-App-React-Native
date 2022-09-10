import { useState, useEffect } from "react";
import wsService from "./src/utils/socketService";
import Routes from "./src/Navigation/Route";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { getUserData } from "./src/utils/utils";
import { saveUserData } from "./src/redux/reducers/auth";

// i18n.locale = Localization.locale;
// i18n.fallbacks = true;
export default function App() {
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    wsService.initializeSocket();
  }, []);

  useEffect(() => {
    wsService.on("receive_message", (msg) => {
      console.log("message received in RN", msg);
      let cloneArr = [...data];
      setData(cloneArr.concat(msg));
    });
  }, [data]);

  const sendMessage = () => {
    wsService.emit("send_message", message);
    setMessage("");
  };

  useEffect(() => {
    (async () => {
      try {
        const result = await getUserData("userData");
        console.log('async get value',result);
        if(!result?._id){
          store.dispatch(saveUserData(result));
        }
      } catch (error) {
        console.log(error)
      }
    })();
  }, []);

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
