import { useState } from "react";
import { FC } from "react";
import {
  CheckBox,
  CheckMark,
  ClickableArea,
  Container,
  Label,
  RemoveButton,
} from "./styles";

type TodoProps = {
  text: string;
  id: string;
  isDone?: boolean;
  onCheck?: (id: string) => void;
  onRemove?: (id: string) => void;
};

const TodoItem: FC<TodoProps> = ({
  id,
  text,
  isDone = false,
  onCheck,
  onRemove,
}) => {
  const [checked, setChecked] = useState<boolean>(isDone);

  const checkHandler = () => {
    setChecked((prev) => !prev);
    onCheck && onCheck(id);
  };
  const removeHandler = () => {
    onRemove && onRemove(id);
  };

  return (
    <Container>
      <ClickableArea onClick={checkHandler}>
        <CheckBox
          name={id}
          id={id}
          type="checkbox"
          checked={checked}
          onChange={() => {}}
        />
        <CheckMark />
        <Label htmlFor={id}>{text}</Label>
      </ClickableArea>
      <RemoveButton onClick={removeHandler} />
    </Container>
  );
};
export default TodoItem;
