  import { Resolvers, TodoMvc } from './types';

  let store: TodoMvc[] = [
    {
      todoId: "1",
      completed: true,
      description: "foo",
    },
    {
      todoId: "2",
      completed: false,
      description: "bar",
    },
  ];

  const resolvers: Resolvers = {
    Query: {
      allTodos: () => store,
      Todo: (_: any, { todoId }) =>
      store.find((d) => d.todoId === todoId),
    },
    Mutation: {
      createTodo: (_: any, { description }) => {
        const newTodo: TodoMvc = {
          todoId: Math.floor(Math.random() * 10000).toString(),
          description,
          completed: false
        }

        store = store.concat(newTodo);
        return newTodo;
      },
      updateTodo: (_: any, { todoId, data }) => {
        const todo = store.find(d => d.todoId === todoId);

        if (todo) {
          store = store.filter(d => d.todoId !== todoId).concat({
            ...todo,
            ...data
          });
        }

        return todo;
      }
    }
  };

  export default resolvers;
