import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
function Container_column_1() {
    return (
        <div>
            <div class="row py-5" id="row-nosotros">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 text-center">
                            <img src={img4} alt="Atleta"></img>
                        </div>
                        <div class="col-md-7 mt-4">
                            <h1 class="font-weight-bold title-color mb-3">Sobre Nosotros</h1>
                            <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering
                                animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger
                                omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil
                                stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated
                                corpse.</p>
                            <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering
                                animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger
                                omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil
                                stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated
                                corpse.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container_column_1
