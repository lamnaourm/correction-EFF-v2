import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Verification() {

  const {idDossier} = useParams()
  const [res, setRes] = useState()
  useEffect(() => {

    const getData = async () => {
      const res = axios.get(`http://127.0.0.1:8000/api/verifier/${idDossier}`)
      return res.data
    }
    getData().then((r) => setRes(r))

  }, [idDossier])

  return (
    <div>
      {res}
    </div>
  )
}
