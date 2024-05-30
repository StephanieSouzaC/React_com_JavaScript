import "./Time.css";
import Colaborador from "../Colaborador/Colaborador.js";

const Time = (props) => {
    const corFundo = { backgroundColor: props.corSecundaria }
    const corSublinhado = { borderColor: props.corPrimaria }
    // const corDestaqueCard = { borderColor: props.corPrimaria }

    return (
        props.colaboradores.length>0 &&
        <section className="time" style={corFundo}>
            <h3 style={corSublinhado}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaboradores => <Colaborador  
                corDestaqueCard={props.corPrimaria}
                key={colaboradores.nome}
                nome={colaboradores.nome} 
                cargo={colaboradores.cargo} 
                imagem={colaboradores.imagem} />)}
            </div>
        </section>
    )
}

export default Time