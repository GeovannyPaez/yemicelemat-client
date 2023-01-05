import { URL_API } from "../../api.config";

class AuthServices {
  constructor() {}
  async login({ password, email }) {
    try {
      const res = await fetch(`${URL_API}auth/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ password, email }),
      });
      const dataUser = await res.json();
      return dataUser;
    } catch (error) {
      return error;
    }
  }
  async register({nickname,email,password}) {
    const res= await fetch(URL_API+'user/',{
        method:"POTS",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({nickname,email,password})
    });
    const data= await res.json();
    return data
  } 
  async recoveryPassword(emailObject){
    try {
      const res= await fetch(URL_API+'auth/recovery',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(emailObject)
    });
    
    const data= await res.json(res);
    // console.log(data);
    return data;
    } catch (error) {
      throw error
    }
  }
  async changePassword(newPassword,token){
    try {
      const res = await fetch(URL_API+"auth/change-password",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({newPassword,token})
      });
      const data= await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
export default AuthServices;
