import { createSignal, type Component, type JSX } from "solid-js"

interface Props {
    initValue: number;
    children?: JSX.Element;
}

const Counter: Component<Props> = (props) => {
    const [counter, setCounter] = createSignal(props.initValue)

    return (
        <>
            {props.children}
            <p>Values {counter()}</p>
            <button onClick={() => setCounter(prev => ++prev)} class="bg-blue-500 p-2 mr-2 rounded">
                +1
            </button>
            <button onClick={() => setCounter(prev => --prev)} class="bg-blue-500 p-2 mr-2 rounded" >
                -1
            </button>
        </>
    )
}

export default Counter