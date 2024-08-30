'use client'
import { useEffect, useState } from 'react'

export default function SheetsImages() {
  const [imageUrls, setImageUrls] = useState<string[]>([])

  useEffect(() => {
    fetch(
      'https://docs.google.com/spreadsheets/d/1419JhBkXW4tn-wNxnfM1i7XjDgnldZOLwn7wng4jiEM/pub?output=csv'
    )
      .then(async (response) => await response.text())
      .then((text) => {
        const rows = text.split('\n').slice(1) // Saltar la primera fila que contiene el header
        const urls = rows
          .map((row) => row.split(',')[0].trim()) // Asume que las URLs están en la primera columna
          .filter((url) => url !== '') // Filtra URLs vacías

        setImageUrls(urls)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <div className="pb-10 flex flex-wrap justify-center gap-4">
      {imageUrls.map((url, index) => (
        <div
          key={index}
          className="flex-grow flex-shrink-0 max-w-[12rem] max-h-[12rem]"
        >
          <img
            src={url}
            alt={`Imagen ${index}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}
