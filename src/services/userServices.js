import { URL_API } from "../../api.config";

export class UserServices{
    constructor (token){
        this.token = token;
        this.headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + this.token,
    };
    }
    async getInfoUser(){
       try {
        const res=await fetch(URL_API+'users',{
            headers:this.headers
        });
        const user = await res.json();
        return user
       } catch (error) {
        throw  error
       }
    }
    async getReceiptsOfUser(){
      try {
         const res= await fetch(URL_API+'users/receipts',{
            headers:this.headers
         });
         const data = await res.json();
         return data
      } catch (error) {
        throw error
      }
    }
    async createUser({email, password, nickname}){
        try {
            const res = await fetch(URL_API+'users',{
                method:"POST",
                headers:this.headers,
                body:JSON.stringify({email,password,nickname})
                })
                const data = await res.json();
                return data
        } catch (error) {
            throw error
        }
    }
}