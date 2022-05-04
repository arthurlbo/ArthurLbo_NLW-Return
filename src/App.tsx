interface ButtonProps{
    text?: string;
}

function Button(props: ButtonProps){
    return <button className=" bg-[#8257e6]  px-3 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors" >{props.text ?? 'default'}</button>
}

function App() {

    return <div className="flex gap-2">

        <Button  text = "enviar" />
        <Button  text = "ok" />
        <Button />
    </div>
}

export default App
