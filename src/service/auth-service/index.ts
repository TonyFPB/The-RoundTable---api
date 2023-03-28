
export async function postSignUp(newUser: NewUserSign) {
  
}


const authService = {
  postSignUp
}

export default authService

export type NewUserSign = {
  name: String,
  email: String, 
  password: String, 
  confirmPasssword: String
}