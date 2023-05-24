import styled from "styled-components";

export const Container = styled.div`
/** Comensando estilizar form 12:52 / 21:49 */
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    form{
        width: 50%;
        height: 78vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #fff;

    > .form-header{
        width: 80%;
        display: flex;
        padding: 1rem;
        align-items: center;
        justify-content: space-between;
        .title{
            ::after{ 
                content: '';
                padding-bottom: .01em;
                display: block;
                width: 2.3em;
                height: 0.5rem;
                background-color:  #6c63ff;
                margin: auto;
                position: absolute;
                border-radius: 10px;
            }
        }
        > .login-button button{
            width: 10em;
            border: none;
            background-color: #6c63ff;
            padding: .9em 1rem;
            border-radius: 5px;
            cursor: pointer;
            color: #fff;
        }
        > .login-button button:hover{
            opacity: .7;
            color: black;
        }
        > .login-button button a{
            text-decoration: none;
            font-weight: 500;
            color: var(--background-3)
        }
    }

        .input-group{
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;

            width: 100%;
            padding: 10px;

            > .input-box{
                display: flex;
                flex-direction: column;
                margin-bottom: 1.7rem;
            }
            > .input-box input{
                width: 25em;
                border: none;
                font-size: 1em;
                padding: 1em 1.1em;
                border-radius: 10px;
                box-shadow:  1px 1px 6px #0000001c;;
            }
        }
       
    }
    .box-img{
        width: 50%;
        display: flex;
        padding: 1rem;
        align-items: center;
        justify-content: center;
        background-color: var(--background-2);
    }
`
export const ContainerImagem = styled.div`
    width: 50%;
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    background-color: var(--background-2);

    > img{
        width: 34em;
        padding: 25px;
        margin-top: 250px;
    }
`