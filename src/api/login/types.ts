export interface UserLoginType {
  usermobilename: string
  code: string
}

export interface UserType {
  mobile: string
  code: string
  role: string
  roleId: string
  expire_in: string
  token: string
  permissions: any
}
