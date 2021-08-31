import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
function Album() {
    return (
        <div>
            <div class="row text-white py-5" id="row-cursos">
                <div class="container text-center">
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <h1 class="font-weight-bold">Nuestros Juegos</h1>
                            <h5>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering
                                animata corpora quaeritis. Summus brains sit​​.</h5>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col">
                            <img src={img1} alt="Atleta"></img>
                            <h4 class="font-weight-bold mt-4">Mario Bros</h4>
                            <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering
                                animata corpora quaeritis. Summus brains sit​​.</p>
                        </div>
                        <div class="col">
                            <img src={img2} alt="Atleta"></img>
                            <h4 class="font-weight-bold mt-4">Call Of Duty</h4>
                            <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering
                                animata corpora quaeritis. Summus brains sit​​.</p>
                        </div>
                        <div class="col">
                            <img src={img3} alt="Atletas"></img>
                            <h4 class="font-weight-bold mt-4">Assassins Creed</h4>
                            <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering
                                animata corpora quaeritis. Summus brains sit​​.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Album
