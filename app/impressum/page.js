import React from 'react'

const page = () => {
  return (
    <div className="flex justify-center items-center h-[600px] px-4 py-10">
        <div className="flex flex-col mb-10 text-xl text-left text-gray-800 dark:text-gray-200 w-fit gap-5">
          <h1 className="text-4xl font-semibold mb-8 text-center">Impressum</h1>
          <p>The German Guy</p>
          <p>Mühlenweg 34a</p>
          <p>5232 Frankfurt(Oder), Germany</p>
          <p>Email: <a href="mailto:contact@thegermanguy.org" className="underline">contact@thegermanguy.org</a></p>
          <p>Name der entgegennehmenden Stelle: Stadt Frankfurt(Oder)</p>
          <p>USt-IdNr. 061/276/01885</p>
          <p>Representative: Awanish Srivastava</p>
          </div>
    </div>
  )
}

export default page;