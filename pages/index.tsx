import { TodoMvc } from "../src/graphql/types";
import { useState } from "react";

const Index = () => {
  const [todos] = useState([
    {
      todoId: "1",
      completed: false,
      description: "foo",
    },
  ] as TodoMvc[]);
  const todoElements = todos.map((t) => (
    <tr key={t.todoId}>
      <td>
        <input type="checkbox" checked={t.completed}></input>
      </td>
      <td>{t.description}</td>
    </tr>
  ));
  return todos.length > 0 ? (
    <table>
      <tbody>{todoElements}</tbody>
    </table>
  ) : (
    <div>No ToDos!</div>
  );
};

export default Index;
