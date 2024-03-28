import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3d8b4cc89189405eb0713221a3fc1dfc",
  },
});
