import React from 'react'
import img5 from '../assets/img5.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img6 from '../assets/img6.png'
function Card() {
    return (
        <div>
            <div class="row">
                <div class="card" style={{width:"18rem"}}>
                    <img class="card-img-top" src={img5} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">Minecraft</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card" style={{width:"18rem"}}>
                    <img class="card-img-top" src={img3} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">Assassins Creed</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card" style={{width:"18rem"}}>
                    <img class="card-img-top" src={img4} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">GTA 5</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card" style={{width:"18rem"}}>
                    <img class="card-img-top" src={img1} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">Mario Bros</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card" style={{width:"18rem"}}>
                    <img class="card-img-top" src={img2} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">Call Of Duty</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card" style={{width:"18rem"}}>
                    <img class="card-img-top" src={img6} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">Fortnite</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
