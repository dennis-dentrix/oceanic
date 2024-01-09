/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { deleteItem } from "./EventSlice";
import { XLg } from "react-bootstrap-icons";

function DeleteBtn({ id }) {
  const dispatch = useDispatch();
  return (
    <button
      className="flex items-center gap-1 text-red-600 border rounded-full px-2 my-2 text-[15px]"
      onClick={() => dispatch(deleteItem(id))}
    >
      <XLg />
      <p>Cancel</p>
    </button>
  );
}

export default DeleteBtn;
