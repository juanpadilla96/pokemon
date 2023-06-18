import styles from './landingPage.module.css'
import imagen from '../../assets/Pokemon Blank Card.jpg'
import { Link } from 'react-router-dom'

const Landing = ()=>{
    return(
        <>
        <div className={styles.landingPage}>
        <img src={imagen} alt="" />
        <h1>POKEMON</h1>
        <Link to='/home' className={styles.enterButton}>ENTER</Link>
        
        <h3 className={styles.description}>Single Page Application creada por Juan Manuel Padilla <br /> para el proyecto individual de Henry</h3>
        </div>
        </>
    )

}

export default Landing;
