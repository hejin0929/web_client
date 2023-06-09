import { FC } from "react";
import {
  decrement,
  increment,
  useAppDispatch,
  useAppSelector,
} from "@/store/user";

const Counter: FC = () => {
  const count = useAppSelector((state) => state.user.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
