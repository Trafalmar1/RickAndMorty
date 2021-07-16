import { useEffect, useState } from "react";

import { useInput } from "@hooks/useInput";
import { useLocalStorage } from "@hooks/useLocalStorage";

type Todo = {
  id: string;
  text: string;
  isDone: boolean;
};

type Todos = {
  [key: string]: Todo;
};

type TodoFormProps = {
  text: string;
};

const initialState = {
  text: "",
};

const TODO = "TODO";
const DONE = "TODODONE";

export const useWatchList = () => {
  const [formData, setFormData] = useState<TodoFormProps>(initialState);
  const [todoList, setTodoList] = useState<Todos>({});
  const [doneList, setDoneList] = useState<Todos>({});
  const { onInputChange } = useInput(formData, setFormData);
  const { save, get } = useLocalStorage();

  useEffect(() => {
    const todo = get(TODO);
    const done = get(DONE);
    if (todo) {
      setTodoList(JSON.parse(todo));
    }
    if (done) {
      setDoneList(JSON.parse(done));
    }
  }, [get]);

  const createNewTodo = () => {
    if (formData.text.trim() === "") return;
    const id = new Date().getTime().toString();
    const newTodo: Todo = {
      id: id,
      text: formData.text,
      isDone: false,
    };

    const updatedList = { ...todoList };
    updatedList[id] = newTodo;

    setFormData({ text: "" });
    setTodoList(updatedList);
    save(TODO, updatedList);
  };

  const checkHandler = (id: string) => {
    const list = { ...todoList };
    const checkedItem: Todo = list[id];
    checkedItem.isDone = true;

    const newDoneList = { ...doneList };
    newDoneList[id] = checkedItem;
    setDoneList(newDoneList);
    save(DONE, newDoneList);

    delete list[id];
    setTodoList(list);
    save(TODO, list);
  };

  const uncheckHandler = (id: string) => {
    const list = { ...doneList };
    const uncheckedItem: Todo = list[id];
    uncheckedItem.isDone = false;

    const newList = { ...todoList };
    newList[id] = uncheckedItem;
    setTodoList(newList);
    save(TODO, newList);

    delete list[id];
    setDoneList(list);
    save(DONE, list);
  };

  const removeHandler = (id: string) => {
    const todoItem = todoList[id];
    const doneItem = doneList[id];

    if (todoItem) {
      const newList = { ...todoList };
      delete newList[id];
      setTodoList(newList);
      save(TODO, newList);
    }

    if (doneItem) {
      const newList = { ...doneList };
      delete newList[id];
      setDoneList(newList);
      save(DONE, newList);
    }
  };

  return {
    createNewTodo,
    checkHandler,
    uncheckHandler,
    removeHandler,
    onInputChange,
    formData,
    doneList,
    todoList,
  };
};
