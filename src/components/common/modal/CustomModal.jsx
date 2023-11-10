import ItemListContainer from "../../pages/itemListContainer/ItemListContainer";
import CounterContainer from "../counter/CounterContainer";

const CustomModal = ({ children }) => {
  return (
    <div
      style={{
        width: 200,
        height: 200,
        border: "5px solid black",
      }}
    >
      {children}
    </div>
  );
};

export default CustomModal;
