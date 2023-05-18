/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, FileData, prepare } from 'yapi-to-typescript'
// @ts-ignore
// prettier-ignore
import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript'
// @ts-ignore
import request from './requset'
// @ts-ignore
import makeRequestHook from './makeRequestHook'

type UserRequestRestArgs = RequestFunctionRestArgs<typeof request>

// Request: 目前 React Hooks 功能有用到
export type Request<
  TRequestData,
  TRequestConfig extends RequestConfig,
  TRequestResult,
> = (TRequestConfig['requestDataOptional'] extends true
  ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult
  : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
  requestConfig: TRequestConfig
}

const mockUrl_0_0_0_0 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_0 = '' as any
const prodUrl_0_0_0_0 = '' as any
const dataKey_0_0_0_0 = undefined as any

/**
 * 接口 创建用户 的 **请求类型**
 *
 * @分类 users
 * @请求头 `POST /api/v1/users`
 */
export interface PostApiV1UsersRequest {
  account: string
  phone: string
  name: string
  password: string
  age: number
  sex: number
  email: string
  school: string
  address: string
}

/**
 * 接口 创建用户 的 **返回类型**
 *
 * @分类 users
 * @请求头 `POST /api/v1/users`
 */
export interface PostApiV1UsersResponse {
  success: boolean
  message: string
}

/**
 * 接口 创建用户 的 **请求配置的类型**
 *
 * @分类 users
 * @请求头 `POST /api/v1/users`
 */
type PostApiV1UsersRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/api/v1/users', undefined, string, string, false>
>

/**
 * 接口 创建用户 的 **请求配置**
 *
 * @分类 users
 * @请求头 `POST /api/v1/users`
 */
const postApiV1UsersRequestConfig: PostApiV1UsersRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/v1/users',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiV1Users',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 创建用户 的 **请求函数**
 *
 * @分类 users
 * @请求头 `POST /api/v1/users`
 */
export const postApiV1Users = /*#__PURE__*/ (requestData: PostApiV1UsersRequest, ...args: UserRequestRestArgs) => {
  return request<PostApiV1UsersResponse>(prepare(postApiV1UsersRequestConfig, requestData), ...args)
}

postApiV1Users.requestConfig = postApiV1UsersRequestConfig

/**
 * 接口 创建用户 的 **React Hook**
 *
 * @分类 users
 * @请求头 `POST /api/v1/users`
 */
export const usePostApiV1Users = /*#__PURE__*/ makeRequestHook<
  PostApiV1UsersRequest,
  PostApiV1UsersRequestConfig,
  ReturnType<typeof postApiV1Users>
>(postApiV1Users)

/**
 * 接口 获取用户 的 **请求类型**
 *
 * @分类 users
 * @请求头 `GET /api/v1/users`
 */
export interface GetApiV1UsersRequest {
  uuid: string
}

/**
 * 接口 获取用户 的 **返回类型**
 *
 * @分类 users
 * @请求头 `GET /api/v1/users`
 */
export interface GetApiV1UsersResponse {
  success: boolean
  message: string
  data: {
    name: string
    age: number
    phone: string
    sex: number
    account: string
    email: string
    address: string
    avatar: string
    status: string
    uuid: string
    school: string
  }
}

/**
 * 接口 获取用户 的 **请求配置的类型**
 *
 * @分类 users
 * @请求头 `GET /api/v1/users`
 */
type GetApiV1UsersRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/api/v1/users', undefined, string, 'uuid', false>
>

/**
 * 接口 获取用户 的 **请求配置**
 *
 * @分类 users
 * @请求头 `GET /api/v1/users`
 */
const getApiV1UsersRequestConfig: GetApiV1UsersRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/v1/users',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['uuid'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiV1Users',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取用户 的 **请求函数**
 *
 * @分类 users
 * @请求头 `GET /api/v1/users`
 */
export const getApiV1Users = /*#__PURE__*/ (requestData: GetApiV1UsersRequest, ...args: UserRequestRestArgs) => {
  return request<GetApiV1UsersResponse>(prepare(getApiV1UsersRequestConfig, requestData), ...args)
}

getApiV1Users.requestConfig = getApiV1UsersRequestConfig

/**
 * 接口 获取用户 的 **React Hook**
 *
 * @分类 users
 * @请求头 `GET /api/v1/users`
 */
export const useGetApiV1Users = /*#__PURE__*/ makeRequestHook<
  GetApiV1UsersRequest,
  GetApiV1UsersRequestConfig,
  ReturnType<typeof getApiV1Users>
>(getApiV1Users)

/**
 * 接口 更新用户 的 **请求类型**
 *
 * @分类 users
 * @请求头 `PATCH /api/v1/users`
 */
export interface PatchApiV1UsersRequest {
  name: string
  age: number
  address: string
  email: string
  avatar: string
  school: string
  phone: string
  sex: number
  uuid: string
}

/**
 * 接口 更新用户 的 **返回类型**
 *
 * @分类 users
 * @请求头 `PATCH /api/v1/users`
 */
export interface PatchApiV1UsersResponse {}

/**
 * 接口 更新用户 的 **请求配置的类型**
 *
 * @分类 users
 * @请求头 `PATCH /api/v1/users`
 */
type PatchApiV1UsersRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/api/v1/users', undefined, string, string, false>
>

/**
 * 接口 更新用户 的 **请求配置**
 *
 * @分类 users
 * @请求头 `PATCH /api/v1/users`
 */
const patchApiV1UsersRequestConfig: PatchApiV1UsersRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/v1/users',
  method: Method.PATCH,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'patchApiV1Users',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 更新用户 的 **请求函数**
 *
 * @分类 users
 * @请求头 `PATCH /api/v1/users`
 */
export const patchApiV1Users = /*#__PURE__*/ (requestData: PatchApiV1UsersRequest, ...args: UserRequestRestArgs) => {
  return request<PatchApiV1UsersResponse>(prepare(patchApiV1UsersRequestConfig, requestData), ...args)
}

patchApiV1Users.requestConfig = patchApiV1UsersRequestConfig

/**
 * 接口 更新用户 的 **React Hook**
 *
 * @分类 users
 * @请求头 `PATCH /api/v1/users`
 */
export const usePatchApiV1Users = /*#__PURE__*/ makeRequestHook<
  PatchApiV1UsersRequest,
  PatchApiV1UsersRequestConfig,
  ReturnType<typeof patchApiV1Users>
>(patchApiV1Users)

/**
 * 接口 删除用户 的 **请求类型**
 *
 * @分类 users
 * @请求头 `DELETE /api/v1/users`
 */
export interface DeleteApiV1UsersRequest {
  uuid?: string
}

/**
 * 接口 删除用户 的 **返回类型**
 *
 * @分类 users
 * @请求头 `DELETE /api/v1/users`
 */
export interface DeleteApiV1UsersResponse {
  success: boolean
  message: string
}

/**
 * 接口 删除用户 的 **请求配置的类型**
 *
 * @分类 users
 * @请求头 `DELETE /api/v1/users`
 */
type DeleteApiV1UsersRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/api/v1/users', undefined, string, 'uuid', false>
>

/**
 * 接口 删除用户 的 **请求配置**
 *
 * @分类 users
 * @请求头 `DELETE /api/v1/users`
 */
const deleteApiV1UsersRequestConfig: DeleteApiV1UsersRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/v1/users',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['uuid'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteApiV1Users',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除用户 的 **请求函数**
 *
 * @分类 users
 * @请求头 `DELETE /api/v1/users`
 */
export const deleteApiV1Users = /*#__PURE__*/ (requestData: DeleteApiV1UsersRequest, ...args: UserRequestRestArgs) => {
  return request<DeleteApiV1UsersResponse>(prepare(deleteApiV1UsersRequestConfig, requestData), ...args)
}

deleteApiV1Users.requestConfig = deleteApiV1UsersRequestConfig

/**
 * 接口 删除用户 的 **React Hook**
 *
 * @分类 users
 * @请求头 `DELETE /api/v1/users`
 */
export const useDeleteApiV1Users = /*#__PURE__*/ makeRequestHook<
  DeleteApiV1UsersRequest,
  DeleteApiV1UsersRequestConfig,
  ReturnType<typeof deleteApiV1Users>
>(deleteApiV1Users)

/* prettier-ignore-end */
