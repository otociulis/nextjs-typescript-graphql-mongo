  import { Resolvers, TodoMvc } from "./types";

  const data: TodoMvc[] = [
    {
      todoId: "1",
      completed: false,
      description: "foo",
    },
  ];

  const resolvers: Resolvers = {
    Query: {
      allTodos: () => data,
      Todo: (_: any, { todoId }: { todoId: String }) =>
        data.find((d) => d.todoId === todoId),
    },
  };

  export default resolvers;
