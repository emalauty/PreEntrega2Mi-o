import { hola } from "./navbar.module.css";
import { contenedor } from "./navbar.module.css";
import { nombreTienda } from "./navbar.module.css";
import { contenedor1 } from "./navbar.module.css";
import { contenedor2 } from "./navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
export default function NavBar({count}) {
  return (
    <>
        <header>
            <nav>
                <div className={contenedor}>
                    <div className={contenedor1}>
                        <a href="" className={nombreTienda}>
                         GlamStyle
                        </a>

                    </div>
                    <div className={contenedor2}>
                        <a href="" className={hola}>
                            Ropa
                        </a>
                        <a href="" className={hola}>
                            Nosotros
                        </a>
                        <CartWidget count={count} />
                    </div>




                </div>

            </nav>
        </header>
    </>
  );
}