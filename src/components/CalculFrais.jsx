import React, { useState } from 'react'
import {useDispatch} from '@reduxjs/toolkit'
import {ajouter} from '../redux/calculslice'

export default function CalculFrais() {

    const [prixVente, setPrixVente] = useState()
    const [droitEnreg, setDroitEnreg] = useState()
    const [conservFonc, setConservFonc] = useState()
    const [fraisDossier, setFraisDossier] = useState(1500)
    const [honoraire, setHonoraire] = useState()
    const [tva, setTVA] = useState()
    const [total, setTotal] = useState()
    const dispatch = useDispatch()

    const handleClick = () => {
        setDroitEnreg(prixVente*0.04)
        setConservFonc(prixVente*0.015 + 200)
        let honoraire = 0
        if(prixVente<=300000)
            honoraire = 4000
        else if (prixVente<=1000000)
            honoraire = prix * 0.015
        else if (prixVente<=5000000)
            honoraire = prix * 0.0125
        else if (prixVente<=10000000)
            honoraire = prix * 0.0075
        else 
            honoraire = prix * 0.005

        setHonoraire(honoraire)
        setTVA(honoraire*0.1)
        setTotal(droitEnreg+conservFonc+fraisDossier+honoraire+tva)

        dispatch(ajouter({id:prixVente,Droits_en:droitEnreg, conservation:conservFonc, Date:Date.now, total:total}))
    }
  return (
    <div>
        Montant de vente du bien : <input type="number" name="prix" id="prix" value={prixVente} onChange={(e) => onchange(e.target.value)} />
        <button onClick={handleClick}>Calculer</button>
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
