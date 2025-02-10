// import Form from "./components/Form";
import userService from "../services/user-http-service";
import useUsers, { User } from "../hooks/useUsers";

const UserApi = () => {
  const { data, error, isLoading, setData, setError } = useUsers();

  const deleteUser = (user: User) => {
    const originalUsers = [...data];

    setData(data.filter((u) => u.id !== user.id));

    const request = userService.delete(user.id);
    request.catch((err) => {
      setError(err.message);
      setData(originalUsers);
    });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...data];

    const updatedUser = { ...user, name: user.name + "!" };
    setData(data.map((u) => (u.id === user.id ? updatedUser : u)));

    const request = userService.update(updatedUser);
    request.catch((err) => {
      setError(err.message);
      setData(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...data];

    const newUser = { id: 0, name: "Shelby" };
    setData([newUser, ...data]);

    const request = userService.create(newUser);
    request
      .then(({ data: savedUser }) => setData([savedUser, ...data]))
      .catch((err) => {
        setError(err.message);
        setData(originalUsers);
      });
  };

  return (
    <>
      {error && <p className="alert alert-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {data.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserApi;
