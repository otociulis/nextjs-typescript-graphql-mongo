import { useIndexQuery } from "../src/graphql/types";
import { gql } from "@apollo/client";
import Todo from "../components/Todo";

gql`
  query Index {
    allTodos {
      todoId
    }
  }
`;

const Index = () => {
  const { data, loading } = useIndexQuery();
  console.info(data);
  const todoElements = data?.allTodos?.map((t) => (
    <Todo todoId={t.todoId} key={t.todoId} />
  ));
  return loading ? null : todoElements.length > 0 ? (
    <table>
      <tbody>{todoElements}</tbody>
    </table>
  ) : (
    <div>No ToDos!</div>
  );
};

export default Index;
