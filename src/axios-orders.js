import axios from "axios";

const instance=axios.create({
    baseURL:"https://react-my-burger-3a90e-default-rtdb.firebaseio.com"
})
export default instance;