import axios from "axios"

export async function SignIn({ username, password }) {
  return await axios
    .post(process.env.REACT_APP_BACKEND_URL + "/auth/login", {
      username,
      password,
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return {
        error:
          error?.response?.data?.message ??
          error.message ??
          "Sign in failed. Please try again later.",
      }
    })
}
