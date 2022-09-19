import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
          
            <div className="d-flex align-center">
              
            <Link to="/">
              <img width={40} height={40} src="/img/logo.png" alt="React-Sneakers" />
            </Link>
                    <div>
                      <h3 className="text-uppercase">React Sneakers</h3>
                      <p className="opacity-5">Магазин лучших кроссовок</p>
                    </div>
            </div>
        <div>
          <ul className="d-flex">
            <li onClick={props.onClickCart} className="mr-25 cu-p">
              <img width={18} height={18} src="/img/cart.svg" alt="Корзина" />
              <span>1205 ₽</span>
            </li>
            <li>
            <Link to="/favorites">
              <img className="mr-20 cu-p" width={18} height={18} src="/img/heart.svg" alt="Избранное" />
            </Link>
            </li>
            <li>
            <img width={18} height={18} src="/img/user.svg" alt="Профиль" />
            </li>
          </ul>
        </div>
      </header>  
    );
}

export default Header;