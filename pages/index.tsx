import { useIndexQuery } from "../src/graphql/types";
import { gql } from "@apollo/client";
import Todo from "../components/Todo";
import { useState, ChangeEvent } from "react";

gql`
  query Index {
    allTodos {
      todoId
    }
  }
`;

const Index = () => {
  const { data, loading } = useIndexQuery();
  const [newTodoDescription, setNewTodoDescription] = useState("");

  const updateTodoDescription = (e: ChangeEvent) => {
    setNewTodoDescription((e.target as HTMLInputElement).value.toString());
  };

  const onClickAddTodo = () => {
    console.info(newTodoDescription);
  };

  const allTodos = data?.allTodos
    ?.slice()
    .sort((a, b) => a.todoId.localeCompare(b.todoId));

  const todoElements = allTodos?.map((t) => (
    <Todo todoId={t.todoId} key={t.todoId} />
  ));

  return loading ? null : todoElements.length > 0 ? (
    <>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={newTodoDescription}
        onChange={updateTodoDescription}
      ></input>
      <button type="button" onClick={onClickAddTodo}>
        Add
      </button>
      <table>
        <tbody>{todoElements}</tbody>
      </table>
    </>
  ) : (
    <div>No ToDos!</div>
  );
};

export default Index;
