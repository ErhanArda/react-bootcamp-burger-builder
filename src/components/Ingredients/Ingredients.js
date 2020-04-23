import React from 'react'
import "./styles.css"
import classnames from "classnames";
import malzemeler from "../../constants/malzemeler"


const Ingredients = ({ secilenMalzemeler, malzemeEkle, malzemeCikar }) => {
    return (
        <>
            <div>
                <h2>Eklenecek Malzemeler</h2>
                <ul>
                    {
                        malzemeler.map((malzeme) => {
                            // mazeleme seculi ise azalt butonu aktif, degilse disabled
                            const azaltButonunuGoster = secilenMalzemeler.find((secilenMalzeme) => secilenMalzeme.id === malzeme.id)
                            return <p key={malzeme.id}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td width="80px">
                                                <h3>
                                                    {malzeme.name}
                                                </h3>
                                            </td>
                                            <td>
                                                <button onClick={() => {
                                                    malzemeEkle(malzeme)
                                                }} className="malzeme-ekle">Ekle</button>
                                            </td>
                                            <td>
                                                <button onClick={() => {
                                                    malzemeCikar(malzeme)
                                                }}
                                                    className={classnames({
                                                        "malzeme-cikar": true,
                                                        "disabled": !azaltButonunuGoster,
                                                        "enabled": azaltButonunuGoster
                                                    })}>Azalt</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </p>
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Ingredients
