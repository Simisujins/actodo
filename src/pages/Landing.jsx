import Header from "../components/Header"
import Card from "../components/card"
import TodoContainer from "../components/TodoContainer"
import { useLocation } from "react-router-dom"


function App() {
    const data = useLocation()

    return (
        <div className='bg-black p-16'>
            <div className="bg-white p-10 border rounded-md">
                <Header ></Header>
                <div className="flex justify-between gap-7 py-5 flex-wrap">
                    <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
                    <Card bgcolor={"#FD6663"} title={"December"} subtitle={"13:19:34"} />
                    <Card bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"} />
                </div>
                <TodoContainer></TodoContainer>
            </div>
        </div>

    )
}

export default App;
