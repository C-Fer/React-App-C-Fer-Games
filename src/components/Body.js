import React from 'react'
import logo from '../assets/logo.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import Card from './Card'
import Navbar from './Navbar'
import Container_center_text from './Container_center_text'
import Album from './Album'
import Container_column_1 from './Container_column_1'
import BasicTable from './BasicTable'
import LinearIndeterminate from './LinearIndeterminate'
import FloatingActionButtons from './FloatingActionButtons'


function Body() {
    return (
        <body>
            <header>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container">
                        <img class="logo" src={logo} alt="swimmers"></img>
                        <button class="navbar-toggler bg-white" data-toggle="collapse" data-target="#miLista">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    <Navbar/>
                    </div>
                </nav>
                <div class="container">
                    <div class="title font-weight-bold">
                    Competiciones abiertas<br />
                    registrate ahora!<br />
                        <button class="btn mt-3">Registrate ahora</button>
                    </div>
                </div>
            </header>
            <main>
            <Album/>
                <Container_column_1/>
                <div class="row" id="row-datos">
                    <div class="container">
                        <div class="row text-center">
                            <div class="col">
                                <div class="mx-auto circulo d-flex justify-content-center align-items-center">
                                    <h1 class="font-weight-bold title-color">20</h1>
                                </div>
                                <h5 class="font-weight-bold mt-3 text-white">JUEGOS</h5>
                            </div>
                            <div class="col">
                                <div class="mx-auto circulo d-flex justify-content-center align-items-center">
                                    <h1 class="font-weight-bold title-color">55</h1>
                                </div>
                                <h5 class="font-weight-bold mt-3 text-white">ENTRENADORES</h5>
                            </div>
                            <div class="col">
                                <div class="mx-auto circulo d-flex justify-content-center align-items-center">
                                    <h1 class="font-weight-bold title-color">11</h1>
                                </div>
                                <h5 class="font-weight-bold mt-3 text-white">OLIMPIADAS</h5>
                            </div>
                            <div class="col">
                                <div class="mx-auto circulo d-flex justify-content-center align-items-center">
                                    <h1 class="font-weight-bold title-color">33</h1>
                                </div>
                                <h5 class="font-weight-bold mt-3 text-white">PREMIOS</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <Container_center_text/>
                <Card/>
                <BasicTable/>
                <FloatingActionButtons/>
                <LinearIndeterminate/>
            </main>
            <footer>
                <div class="row text-white">
                    <div class="container">
                        <div class="row gy-5">
                            <div class="col-lg-4 px-5">
                                <h4 class="font-weight-bold mb-4">NOSOTROS</h4>
                                <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering
                                    animata corpora quaeritis. Summus brains sit​​.</p>
                            </div>
                            <div class="col-lg-4 px-5">
                                <h4 class="font-weight-bold mb-4">CREDITOS</h4>
                                <a href="https://www.freepik.com/free-photos-vectors/water">Water psd created by freepik -
                                    www.freepik.com</a>
                            </div>
                            <div class="col-lg-4 px-5">
                                <h4 class="font-weight-bold mb-4">CONTACTANOS</h4>
                                <div class="d-flex">
                                    <span class="material-icons">
                                        local_phone
                                    </span>
                                    <p class="ml-3">(01) 555 5555</p>
                                </div>
                                <div class="d-flex">
                                    <span class="material-icons">
                                        house
                                    </span>
                                    <p class="ml-3">Jr. lorem ipsum #777</p>
                                </div>
                                <div class="d-flex">
                                    <span class="material-icons">
                                        email
                                    </span>
                                    <p class="ml-3">prueba15@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
                crossorigin="anonymous"></script>
            <script src="/node_modules/bootstrap/dist/js/bootstrap.min.js"
                integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/"
                crossorigin="anonymous"></script>
        </body>

    )
}

export default Body
