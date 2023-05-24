import styled, { keyframes } from "styled-components";

const animateX1 = keyframes`
    0%{
        transform: translateX(-900px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;

const animateX2 = keyframes`
    0%{
        transform: translateX(900px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const Container = styled.div`
/** Comensando estilizar form 12:52 / 21:49 */
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    form{

        animation: ${animateX1} 4.00s;

        width: 50%;
        height: 79vh;
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
        > .input-box label{
            font-weight: bold;
            margin-bottom: 2px;
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
    .gender-inputs{
        width: 90%;
        display: flex;
        flex-direction: column;
        margin-top: 70px;

        > .gender-title {
            font-size: 2.1em;
            text-align: center;
        }

        > .gender-group{
            display: flex;
            justify-content: space-between;
            padding: 20px;

            > .gender-input label{
                margin-left: 5px;
                font-weight: bold;
            }

            margin-bottom: 50px;
            
        }
        
    }
    .continue-button{
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        background-color: #6c63ff;
        border-radius: 7px;

        > button{
            width: 80%;
            border: none;
            background-color: var(--roxo--);
            padding: .7em;
            border: 5px;
            cursor: pointer;
            > a{
                text-decoration: none;
                list-style: none;
                color: #fff;
                font-size: 1.2em;
                font-weight: bold;
            }
        }
    }
`
export const ContainerImage = styled.div`

    animation: ${animateX2} 4s;

    width: 50%;
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: center;
`;

// Points 1900