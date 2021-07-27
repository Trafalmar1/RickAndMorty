import { Fragment } from "react";

import { useWatchList } from "./useWatchList";
import TodoItem from "@components/TodoItem";
import Input from "@UI/Input";
import Button from "@UI/Button";
import Form from "@components/Form";
import {
  ColumnTitle,
  DoneContainer,
  GridContainer,
  Row,
  TodoContainer,
} from "./styles";

const WatchList = () => {
  const {
    checkHandler,
    createNewTodo,
    onInputChange,
    removeHandler,
    uncheckHandler,
    todoList,
    doneList,
    formData,
  } = useWatchList();

  return (
    <Fragment>
      <Form onSubmit={createNewTodo}>
        <Row>
          <Input
            name={"text"}
            margin={"0 2rem 0 0"}
            placeholder={"New todo"}
            onChange={onInputChange}
            value={formData.text}
          />
          <Button name="CREATE" isSubmit />
        </Row>
      </Form>
      <GridContainer>
        <TodoContainer>
          <ColumnTitle>TODO</ColumnTitle>
          {Object.keys(todoList)
            .reverse()
            .map((key: string) => (
              <TodoItem
                key={key}
                id={todoList[key].id}
                text={todoList[key].text}
                onCheck={checkHandler}
                onRemove={removeHandler}
              />
            ))}
        </TodoContainer>

        <DoneContainer>
          <ColumnTitle>DONE</ColumnTitle>
          {Object.keys(doneList)
            .reverse()
            .map((key: string) => (
              <TodoItem
                key={key}
                id={doneList[key].id}
                text={doneList[key].text}
                isDone={doneList[key].isDone}
                onCheck={uncheckHandler}
                onRemove={removeHandler}
              />
            ))}
        </DoneContainer>
      </GridContainer>
    </Fragment>
  );
};
export default WatchList;
