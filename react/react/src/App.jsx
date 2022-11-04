import Header from "./components/Header/Header";

import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Header
                name="Luiz Eduardo"
                itemUm="Home"
                itemDois="Sobre"
                itemTres="Contato"
            />
        </div>
    );
};

export default App;
