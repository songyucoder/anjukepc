import request from '@/axios'
import type { UserType } from './types'
export const loginApi = (data: UserType): Promise<IResponse<UserType>> => {
  return request.post({ url: '/api/login/mobile', data })
}

export const loginOutApi = (): Promise<IResponse> => {
  return request.post({ url: '/admin/logout' })
}
// 获取验证码
export const getCodeApi = (params:any): Promise<IResponse> => {
  return request.get({ url: '/api/sms',params })
}