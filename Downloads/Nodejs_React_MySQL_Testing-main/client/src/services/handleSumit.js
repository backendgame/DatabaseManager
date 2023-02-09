import axios from 'axios';


const create = data => {
  return axios.post("api/ideas", data);
};
const handleSubmit = {
  create,
};

export default handleSubmit;