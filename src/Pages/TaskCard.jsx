function Taskcard({ task }) {
  return (
    <>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>{task.id}</p>
    </>
  );
}
export default Taskcard;
