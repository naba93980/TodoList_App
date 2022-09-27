import React, { useState }  from "react";

export function AddTodo({ addTodo }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const changeTitle = (e) => {
    setTitle((title) => e.target.value);
  };
  const changeDesc = (e) => {
    setDesc((desc) => e.target.value);
  };

  const matches = () => {
    console.log(title);
    for (let i = 0; i < localStorage.length; i++)
    {
      const todoItemTitle = localStorage.key(i);
      console.log(todoItemTitle);
      if (todoItemTitle === title.trim())
        return true;
    }
  }

  const addThisTodo = (e) => {
    e.preventDefault();
    if (matches()) {
      alert("same todo already exists");
      return;
    }
    else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
      return;
    }
  };
  return (
    <div className="container mb-5">
      <div className="row justify-content-center">
        <div className="col-12">
          <form onSubmit={addThisTodo}>
            <div className="form-group">
              <label htmlFor="inputTitle">Title</label>
              <input
                type="text"
                className="form-control"
                id="inputTitle"
                placeholder="Title"
                value={title}
                onChange={changeTitle}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputDescription">Description</label>
              <textarea
                className="form-control"
                id="inputDescription"
                placeholder="Description"
                value={desc}
                onChange={changeDesc}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-success">
              AddTodo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
