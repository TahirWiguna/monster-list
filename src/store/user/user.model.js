import axios from "axios"

export async function SignIn({ username, password }) {
  return await axios
    .post(process.env.REACT_APP_BACKEND_URL + "/auth/login", {
      username,
      password,
    })
    .then((response) => {
      return { data: response }
    })
    .catch((error) => {
      return { error: error.message || "Oops! Something went wrong." }
    })
}
