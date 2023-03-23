import { Link } from 'react-router-dom';
import "../styles/NotFoundPage.scss";
function NotFoundPage () {

        return (
    <main className="main">
      <h1 className="page-not-found">Esta ruta no existe</h1>
      <Link className="link__icon" to="/"> <i className="fa-solid fa-arrow-left"></i></Link>
      
    </main>
  );
    
}

export default NotFoundPage;


