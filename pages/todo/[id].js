import Head from "next/head";
import { useRouter } from "next/router";

const Todo = ({ todo, user }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

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

  const paths = todos.slice(0, 5).map((todo) => ({
    params: { id: todo.id.toString() },
  }));

  return {
    paths,
    fallback: true,
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

  if (!todo.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      todo,
      user: await user.json(),
    },
  };
};

export default Todo;
