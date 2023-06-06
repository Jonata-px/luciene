import React from 'react'

export default function Certificado({params}) {
    const {name} =  params;

    return (
        <iframe style={{
            width: '100%',
            height:"calc(100vh - 50px)",  
            padding:0,
            border:0,
        }} src={`/${name}`} />
    )
}
