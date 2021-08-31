import React from 'react'

function Navbar() {
    return (
        <div>
            <div class="collapse navbar-collapse justify-content-end" id="miLista">
                <ul class="navbar-nav">
                    <li class="nav-item mb-3">
                        <a class="nav-link text-white" href="#">Principal</a>
                    </li>
                    <li class="nav-item mb-3">
                        <a class="nav-link text-white" href="#row-cursos">Juegos</a>
                    </li>
                    <li class="nav-item mb-3">
                        <a class="nav-link text-white" href="#row-nosotros">Nosotros</a>
                    </li>
                    <li class="nav-item mb-3">
                        <a class="nav-link text-white" href="#row-servicios">Servicios</a>
                    </li>
                    <li class="nav-item mb-3">
                        <a class="nav-link text-white" href="#row-contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
