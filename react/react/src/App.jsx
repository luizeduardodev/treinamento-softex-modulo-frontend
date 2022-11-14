//No projeto base react, criado no Peer Tutoring 1, crie um botão que aumente o valor de uma propriedade de um componente react usando hooks.

import { useState } from "react";

import "./App.css";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <button onClick={() => setCount(count + 1)}>Aumentar</button>
            <p>{count}</p>
        </div>
    );
};

export default App;
