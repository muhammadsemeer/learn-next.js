import Head from "next/head";
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
          <div key={todo.id}>
            <h3 className={styles.single}>
              <a>
                {todo.title}{" "}
                <span
                  className={`
                    ${styles.status} ${
                    todo.completed ? styles.completed : styles.pending
                  }
                    `}
                >
                  {todo.completed ? "Completed" : "Pending"}
                </span>
              </a>
            </h3>
          </div>
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
