'use client'
import { useEffect, useState } from 'react'

export default function SheetsData() {
  const [data, setData] = useState<string[][]>([])
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [filteredData, setFilteredData] = useState<
    string[][]
  >([])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    fetch(
      'https://docs.google.com/spreadsheets/d/1nx_488aeoJOVrEJiWG7PUbpOLZfW2wuEkhsCPXpXCyo/gviz/tq?tqx=output:json'
    )
      .then(async (response) => await response.text())
      .then((text) => {
        const json = JSON.parse(
          text.substr(47).slice(0, -2)
        )
        const rows: string[][] = json.table.rows
          .slice(1)
          .map((row: { c: any[] }) =>
            row.c.map((cell) =>
              typeof cell?.v === 'string' ? cell.v : ''
            )
          )

        const nonEmptyRows = rows.filter((row) =>
          row.some((cell) => cell.trim() !== '')
        )

        setData(rows)
        setFilteredData(nonEmptyRows)
      })
      .catch((error) => {
        console.error('Error fetching data:', error, data)
      })
  }, [])

  const transpose = (matrix: string[][]) => {
    if (matrix.length === 0) return matrix
    return matrix[0].map((_, colIndex) =>
      matrix.map((row) => row[colIndex])
    )
  }

  const displayData = isMobile
    ? transpose(filteredData)
    : filteredData

  return (
    <div className="w-full pb-10 items-center">
      <hr
        style={{
          width: '40%',
          borderTop: '2px solid #ccc',
          marginTop: '0.5rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '1rem'
        }}
      />
      <div className="overflow-x-auto">
        <table className="table-auto w-full md:w-[60%] border-collapse mx-auto px-1">
          <tbody>
            {displayData.map((row, rowIndex) => (
              <tr key={rowIndex} className="border">
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="border px-4 py-2 text-center py-3 text-2xl text-gray-200"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
