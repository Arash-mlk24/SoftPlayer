import {
  configureStore,
  createSerializableStateInvariantMiddleware,
} from '@reduxjs/toolkit';

const ignoredActions = [''];
const ignoredPaths = [''];
const serializableMiddleware = createSerializableStateInvariantMiddleware({
  ignoredPaths,
  ignoredActions,
});

export const store = configureStore({
  reducer: {},
  middleware: [serializableMiddleware],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
