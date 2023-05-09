import React, {useState} from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }

    return(<div>
        <div>{count}</div>
        <button onClick={incrementCount}>Add</button>
    </div>);
};

export default App;