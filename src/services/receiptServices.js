import { URL_API } from "../../api.config";

class ReceiptsServices {
  constructor(token) {
    this.token = token;
    this.headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.token,
    };
  }
  async saveReceipt({ body, path }) {
    try {
      const res = await fetch(`${URL_API}${path}`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(body),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async updateReceipt({ path, id, payload }) {
    try {
      const res = await fetch(URL_API + path + "/" + id, {
        method: "PUT",
        headers: this.headers,
        body: JSON.stringify({
          ...payload,
        }),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getReceipts(path, options) {
    try {
      const url = this.returnURL(path, options);
      const res = await fetch(url, {
        headers: this.headers,
      });
      const data = await res.json();
      // console.log(data);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getOneReceipt({ path, id }) {
    try {
      const res = await fetch(URL_API + path + "/" + id, {
        method: "GET",
        headers: this.headers,
      });
      const data = await res.json();
      return data.receipt;
    } catch (error) {
      throw new Error(error);
    }
  }
  async deleteReceipt (path, id){
    try {
      const res = await fetch(URL_API+path+'/'+id,{
        method:"DELETE",
        headers:this.headers
      });
      const data = await res.json();

    } catch (error) {
      throw new Error(error.message)
    }
  }
  returnURL(path, options) {
    let url;
    switch (options.query) {
      case "complete":
        url = URL_API + path + "?complete=" + options.payload.state;
        break;
      case "date":
        url =
          URL_API +
          path +
          "?dateInitial=" +
          options.payload.dateInitial +
          "&dateEnd=" +
          options.payload.dateEnd;
        break;
      default:
        url = URL_API + path;
        break;
    }
    // console.log(url);
    return url;
  }
}

export default ReceiptsServices;
