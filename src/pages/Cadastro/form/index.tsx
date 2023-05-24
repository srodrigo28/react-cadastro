import { Container, ContainerImage } from "./style";
import ImgBack from './../../../assets/image-back.svg'

export function Form() {
    return (
        <Container>
            <ContainerImage>
                <img src={ImgBack} alt="back-fundo" />
            </ContainerImage>
            
            <form>
                <div className="form-header">
                    <div className="title">
                        <h1>Cadastro</h1>
                    </div>
                    <div className="login-button">
                        <button>  <a href="#">Entrar</a></button>
                    </div>
                </div>
                <div className="input-group">
                    <div className="input-box">
                        <label htmlFor="firstname">Primeiro nome</label>
                        <input type="text" id="firstname" required placeholder="Digite seu primeiro nome" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="lastname">Sobre nome</label>
                        <input type="text" id="lastname" required placeholder="Digite seu segundo nome" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="email">Seu email</label>
                        <input type="email" id="email" required placeholder="Digite seu e-mail" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="number">Seu telefone</label>
                        <input type="tel" id="number" required placeholder="(xx) x xxxx-xxxx" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="password">Criar senha</label>
                        <input type="password" id="password" required placeholder="********************" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="password-confirme">Confirmar senha</label>
                        <input type="password" id="password-confirme" required placeholder="********************" />
                    </div>
                </div>

                <div className="gender-inputs">
                    <div className="gender-title">
                        <h6>Gênero</h6>
                    </div>
                    <div className="gender-group">
                        <div className="gender-input">
                            <input type="radio" id="female" /> 
                            <label htmlFor="female">Feminino</label>
                        </div>
                        <div className="gender-input">
                            <input type="radio" id="male" /> 
                            <label htmlFor="male">Masculino</label>
                        </div>
                        <div className="gender-input">
                            <input type="radio" id="others" /> 
                            <label htmlFor="others">Outros</label>
                        </div>
                        <div className="gender-input">
                            <input type="radio" id="none" /> 
                            <label htmlFor="none">Não dizer</label>
                        </div>
                    </div>
                </div>
                <div className="continue-button">
                    <button> <a href="#"> Continuar </a> </button>
                </div>
                
            </form>
        </Container>
    )
}