import Head from "next/head";

const Todo = ({ todo, user }) => {
  return (
    <>
      <Head>
        <title>Todo List | {todo.title}</title>
      </Head>
      <div>
        <h1>{todo.title}</h1>
        <p>
          Created by {user.name} &lt;{user.email}&gt;
        </p>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();

  const paths = todos.map((todo) => ({
    params: { id: todo.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params, ...rest }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`
  );
  const todo = await res.json();
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${todo.userId}`
  );

  return {
    props: {
      todo,
      user: await user.json(),
    },
  };
};

export default Todo;
