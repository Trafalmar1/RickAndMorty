import { CSSTransition, TransitionGroup } from "react-transition-group";

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
  GridWrapper,
  Container,
} from "./styles";
import "./transition.css";

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
    <Container>
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
      <GridWrapper>
        <GridContainer>
          <TodoContainer>
            <ColumnTitle>TODO</ColumnTitle>
            <TransitionGroup>
              {Object.keys(todoList)
                .reverse()
                .map((key: string) => (
                  <CSSTransition key={key} timeout={1000} classNames="item">
                    <TodoItem
                      id={todoList[key].id}
                      text={todoList[key].text}
                      onCheck={checkHandler}
                      onRemove={removeHandler}
                    />
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </TodoContainer>

          <DoneContainer>
            <ColumnTitle>DONE</ColumnTitle>
            <TransitionGroup>
              {Object.keys(doneList)
                .reverse()
                .map((key: string) => (
                  <CSSTransition key={key} timeout={1000} classNames="item">
                    <TodoItem
                      key={doneList[key].id}
                      id={doneList[key].id}
                      text={doneList[key].text}
                      isDone={doneList[key].isDone}
                      onCheck={uncheckHandler}
                      onRemove={removeHandler}
                    />
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </DoneContainer>
        </GridContainer>
      </GridWrapper>
    </Container>
  );
};
export default WatchList;
