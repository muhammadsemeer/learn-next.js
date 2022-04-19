import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Todos.module.css";

const Todos = ({ todos }) => {
  return (
    <>
      <Head>
        <title>Todo List | Test</title>
      </Head>
      <div>
        <h1>All Todo</h1>
        {todos.map((todo) => (
          <Link key={todo.id} href={`/todo/${todo.id}`} passHref>
            <h3 className={styles.single}>
              {todo.title}&nbsp;
              <span
                className={`
                    ${styles.status} ${
                  todo.completed ? styles.completed : styles.pending
                }
                    `}
              >
                {todo.completed ? "Completed" : "Pending"}
              </span>
            </h3>
          </Link>
        ))}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();

  return {
    props: {
      todos,
    },
  };
};

export default Todos;
