import './Colaborador.css'

const CardColaborador = ({nome, imagem, cargo, corDestaqueCard}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' 
            style={{backgroundColor:corDestaqueCard}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default CardColaborador