import Container from "./components/Container"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { useState } from "react";

function App(){
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("Movies")

    return (
        <>
            <Header onQuery={setQuery} onCategory={setCategory}/>
            <Container query={query} category={category}/>
            <Footer/>
        </>
    )
}

export default App

