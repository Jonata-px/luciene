"use client"
import React, {useState} from 'react'
import Header from "@/components/Header";
import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import styles from "./styles.module.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

export default function Certificado({params}) {
    const {name} =  params;

    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const backgroundColor = "rgb(237, 244, 250)";

    return (
        <>
            <div style={{background:"red"}}>
                <Header/>
                <Document canvasBackground={"#000"} renderMode="canvas" file={`/${name}`} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page className={styles.page} canvasBackground={backgroundColor} pageNumber={1} renderTextLayer={false}/>
                    {numPages > 1 &&<Page className={styles.page} pageNumber={2} canvasBackground={backgroundColor} renderTextLayer={false}/>}
                </Document>
            </div>

        </>
    )
}
