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
  const res = await fetch("http://localhost:3001/todos");
  const todos = await res.json();

  const paths = todos.slice(0, 1).map((todo) => ({
    params: { id: todo.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params, ...rest }) => {
  console.log("Generating / Regenerating Todo Page", params.id);
  const res = await fetch(`http://localhost:3001/todos/${params.id}`);
  const todo = await res.json();
  const user = await fetch(`http://localhost:3001/users/${todo.userId}`);

  return {
    props: {
      todo,
      user: await user.json(),
    },
    revalidate: 10,
  };
};

export default Todo;
