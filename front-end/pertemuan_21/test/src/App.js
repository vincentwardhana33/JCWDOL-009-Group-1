import GlobalState from './component/GlobalState';
import Counter from './features/counter/Counter';

function App() {
  // localStorage.setItem("name", "Vincent");
  // console.log(localStorage.getItem("name"));
  // let name = localStorage.getItem("name");

  // localStorage.setItem("biodata", JSON.stringify({
  //   name: "Vincent",
  //   age: 70
  // }));

  // // console.log(JSON.parse(localStorage.getItem("biodata")));

  // localStorage.clear();
  // console.log(JSON.parse(localStorage.getItem("name")));

  return (
    // <div>
    //   <GlobalState />
    // </div>

    <Counter />
  );
}

export default App;
