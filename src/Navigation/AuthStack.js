import {TermsCondition,PhoneNumber,OtpVerification,EditProfile} from '../screens/index';
import ScreenConstant from '../constants/ScreenConstant'

export default function(Stack){
    return(
        <>
          <Stack.Screen name={ScreenConstant.Terms_Condition} component={TermsCondition} />  
          <Stack.Screen name={ScreenConstant.Phone_Number} component={PhoneNumber} />  
          <Stack.Screen name={ScreenConstant.OTP_Verification} component={OtpVerification} />  
          <Stack.Screen name={ScreenConstant.Edit_Profile} component={EditProfile} />  
        </>
    )
}



