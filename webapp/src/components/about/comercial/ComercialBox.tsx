import BaseButton from "src/components/buttons/BaseButton"
import "../../../public/css/components/about/comercial/comercialBox.css"
function ComercialBox(){
    return(
        <div className="comercialbox-total">
            <div className="comercialbox-title">
                <div className="comercialbox-title-left">Lomap </div> <div className="comercialbox-title-rigth">Mapas</div>
            </div>
            <div className="comercialbox-slogan">
                ¡Explora todos los rincones de tu ciudad y compartelos con amigos y todo el mundo!
            </div>
            <div className="comercialbox-discount">
                100% GRATIS
            </div>
            <div className="comercialbox-buttons">
                <div className="comercialbox-buttonleft"> 
                    <BaseButton type="button-grey" text ="Compartir" />
                </div>
                <div className="comercialbox-buttonrigth">
                <BaseButton type="button-red" text="Únete" />
                </div>
            </div>
        </div>
    )
}

export default ComercialBox