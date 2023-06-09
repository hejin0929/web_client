import { GetApiV1UsersResponse } from "@/pages/api";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>;
// 推断出类型: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
