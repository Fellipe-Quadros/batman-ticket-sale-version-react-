import react from 'react'
import './styles.css'

function Button({nome, active, onClick}) {
    return(
        <>
            <div className='conteiner-Button'>
          <button onClick= {onClick} className= {active ? 'button' : 'disabledButton'}>{nome}</button>
          <span>Seus dados estão a salvo conosco</span>
            
            </div>
            
        </>
    )
}

export default Button