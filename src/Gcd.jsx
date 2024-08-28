import { useState } from 'react'

export default function Gcd() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function gcd(a, b) {
    let temp = 0

    while (b) {
      temp = b
      b = a % b
      a = temp
    }
    return a
  }
  const answer = gcd(a, b)

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-center text-4xl">Greatest Common Denominator</h1>
      <div className="flex flex-row gap-10">
        <p>Enter first denominator</p>
        <input
          className="w-44 border-2 rounded-md px-2 hover:border-red-500"
          type="text"
          placeholder="1st Number"
          value={a}
          onChange={e => setA(Number(e.target.value))}
        ></input>
      </div>
      <div className="flex flex-row items-center justify-around gap-10">
        <p>Enter second denominator</p>
        <input
          className="w-44 border-2 rounded-md px-2 hover:border-red-500"
          type="text"
          placeholder="2nd Number"
          value={b}
          onChange={e => setB(Number(e.target.value))}
        ></input>
      </div>
      <div className="flex flex-row gap-5">
        <p>Answer:</p>
        <h1 className="text-center ">{answer}</h1>
      </div>
    </div>
  )
}
