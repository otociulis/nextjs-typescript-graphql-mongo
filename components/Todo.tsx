import { gql } from "@apollo/client";
import { useTodoQuery } from "../src/graphql/types";

interface Props {
  todoId: string;
}

gql`
  query Todo($todoId: ID!) {
    Todo(todoId: $todoId) {
      description
      completed
    }
  }
`;

const Todo = (props: Props) => {
  const { todoId } = props;
  const { loading, data } = useTodoQuery({
    variables: {
      todoId,
    },
  });
  let content = <td colSpan={2}>Loading ...</td>;
  if (!loading && data) {
    const { completed, description } = data.Todo;
    content = (
      <>
        <td>
          <input type="checkbox" checked={completed}></input>
        </td>
        <td>{description}</td>
      </>
    );
  }
  return <tr>{content}</tr>;
};

export default Todo;
