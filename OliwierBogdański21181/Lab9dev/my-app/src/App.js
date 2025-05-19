import React, { useCallback, useState } from "react"
import Counter from "./Counter"
import "./App.css" // Zakładam, że plik CSS nazywa się App.css

export default function App() {
  const handleSimpleClick = () => {
    console.log("Kliknięto przycisk!")
  }

  const [count, setCount] = useState(0)

  const onLog = useCallback(() => {
    console.log("Licznik:", count)
  }, [count])

  const [products, setProducts] = useState(["Jabłko", "Gruszka", "Banan"])

  const removeProduct = useCallback((item) => {
    setProducts((prev) => prev.filter((p) => p !== item))
  }, [])

  return (
    <div className="App">
      <h1>Laboratorium 9</h1>

      <section className="exercise-box">
        <h2>Ćwiczenie 1</h2>
        <button onClick={handleSimpleClick}>Kliknij mnie</button>
      </section>

      <section className="exercise-box">
        <h2>Ćwiczenie 2 i 3</h2>
        <button onClick={() => setCount((c) => c + 1)}>
          Zwiększ: {count}
        </button>
        <br />
        <Counter onLog={onLog} />
      </section>

      <section className="exercise-box">
        <h2>Ćwiczenie 4</h2>
        <ul>
          {products.map((item) => (
            <li key={item}>
              {item}
              <button onClick={() => removeProduct(item)} style={{ marginLeft: "10px" }}>
                Usuń
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
