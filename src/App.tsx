import './App.css';
import {Header} from "./loyout/header/Header";
import {Main} from "./loyout/section/main/Main";
import {Skills} from "./loyout/section/skills/Skills";
import {Services} from "./loyout/section/services/Services";
import {Works} from "./loyout/section/works/Works";
import {Contacts} from "./loyout/section/contacts/Contacts";
import {Footer} from "./loyout/footer/Footer";



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Services/>
            <Works/>
            <Contacts/>
        <Footer/>

        </div>);
}




export default App;

