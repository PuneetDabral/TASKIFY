import { FormEvent, useRef } from "react";
import "./styles.css";

interface InputFiledProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: FormEvent) => void
}

// const InputFiled = ({ todo, setTodo }: InputFiledProps) => {
// you can do like this also
const InputFiled: React.FC<InputFiledProps> = ({ todo, setTodo, handleAddTodo }) => {
  console.log("🚀 ~ todo:", todo)
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form className="input" onSubmit={(e) => {
      handleAddTodo(e);
      ref.current?.blur();
    }}>
      <input type="text" value={todo} placeholder="Enter your task" className="input__box"
        onChange={(e) => setTodo(e.target.value)}

      />
      <button className="input_submit" type="submit" >
        Go
      </button>
    </form>
  );
};

export default InputFiled;
