import React, {useEffect,useReducer,useState} from "react";

const App = (props) => {
    //  console.log("Component is rendering!");
  
    const [count, setCount] = useState(props.count);
    const [text, setText] = useState("");
  
    //componentdidmount
    useEffect(() => {
      console.log("this should only run once");
  
      //component did unmount
      return () => {
        console.log("cleaning up effect");
      };
    }, []);
  
    //componentdidupdate ,count
    useEffect(() => {
      console.log("useEffect ran");
      document.title = count;
    }, [count]);
    // const [state, setState] = useState({
    //   count: props.count,
    //   text: "text"
    // })
  
    return (
      <div>
        {/* <p>The current {state.text || 'count'} is {state.count}</p>
              <button onClick={() => setState({"count": state.count - 1})}>-1</button>
              <button onClick={() => setState({count: state.count})}>reset</button>
              <button onClick={() => setState({"count": state.count + 1})}>+1</button>
              <input value={state.text} onChange={(e)=> setState({text: e.target.value})} ></input> */}
  
        <p>
          The current {text || "count"} is {count}
        </p>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(props.count)}>reset</button>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
      </div>
    );
  };
  
  App.defaultProps = {
    count: 0,
  };

export default App