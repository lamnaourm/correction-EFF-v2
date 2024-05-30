import React, { useState } from 'react'

export default function CalculFrais() {

    const [prixVente, setPrixVente] = useState()
    const [droitEnreg, setDroitEnreg] = useState()
    const [conservFonc, setConservFonc] = useState()
    const [fraisDossier, setFraisDossier] = useState()
    const [honoraire, setHonoraire] = useState()
    const [tva, setTVA] = useState()
    const [total, setTotal] = useState()

    const handleClick = () => {

    }
  return (
    <div>
        Montant de vente du bien : <input type="number" name="prix" id="prix" value={prixVente} onChange={(e) => onchange(e.target.value)} />
        <div>
            Droit d'enregistrement : {droitEnreg}
        </div>
        <div>
            Conservation Fonciére : {conservFonc}
        </div>
        <div>
            Frais de dossier : {fraisDossier}
        </div>
        <div>
            Honoraire notaire : {honoraire}
        </div>
        <div>
            tva : {tva}
        </div>
        <div>
            Total : {total}
        </div>
    </div>
  )
}
