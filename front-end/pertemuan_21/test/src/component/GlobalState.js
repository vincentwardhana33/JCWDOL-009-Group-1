function GlobalState() {
    let name = localStorage.getItem("name");

    return (
        <div>
          <h1>Hello, my name is {name}</h1>
        </div>
      );
}

export default GlobalState;