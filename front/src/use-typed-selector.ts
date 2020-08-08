import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { rootReducer } from "./reducers/root-reducer";

type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
