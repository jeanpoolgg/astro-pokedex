import { createSignal } from "solid-js"

const Counter = () => {
    const [counter, setCounter] = createSignal(10)

    return (
        <>
            <h1>Counter</h1>
            <p>Values {counter()}</p>
            <button onClick={() => setCounter(prev => ++prev) }  class="bg-blue-500 p-2 mr-2 rounded">
                +1
            </button>
            <button onClick={() => setCounter(prev => --prev)} class="bg-blue-500 p-2 mr-2 rounded" >
                -1
            </button>
        </>
    )
}

export default Counter