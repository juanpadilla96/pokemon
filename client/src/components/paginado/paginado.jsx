import react from 'react'
import styles from './paginado.module.css'

const Paginado = ({pokemonsPerPage, pokemons, paginado})=>{

    const pageNumbers =[]

    for (let i = 0; i<=Math.ceil(pokemons/pokemonsPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <nav>
            <ul className={styles.paginado}>
                {pageNumbers && pageNumbers.map(number=>(
                    <li className={styles.number} key={number}>
                        <a onClick={()=>paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Paginado;