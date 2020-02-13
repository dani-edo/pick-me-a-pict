import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 78e47bffdee0c00cca66e1e3768f02f829fbf1bb16b3a4ddd5b7502953249963"
  }
});
