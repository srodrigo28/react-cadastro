import { useState } from 'react';
import './style.css'

export function Login() {

    const [isPress, SetIsPress] = useState(false);

    const btnEvento = document.querySelector(".btn-evento");
    const form = document.querySelector("form");

    btnEvento?.addEventListener("click", event => {
        event.preventDefault();
        form?.classList.add("remove")
    });

    form?.addEventListener("animationstart", event => {
        if (event.animationName === "") {
            // document.querySelector("body")?.style.overflow = "hidden";
            
        }
    })

    return (
        <div>
            <form>
                <h3>Esse e um form</h3>
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
                <button className='btn-evento'>Entrar</button>
            </form>
            <h1>Login</h1>
            <br /> <br /> <hr />
            <div>
                <h2>Testando animação</h2>
                <button onClick={() => { SetIsPress(!isPress);
                    }} id='btn' className= { !isPress ? "" : "remove" }>
                    ENVIAR
                </button>
            </div>
        </div>
    )
}