import React from 'react'

const page = () => {
  return (
    <div className="flex justify-center items-center h-[600px] px-4 py-10">
        <div className="flex flex-col mb-10 text-xl text-left text-gray-800 dark:text-gray-200 w-fit gap-5">
          <h1 className="text-4xl font-semibold mb-8 text-center">Impressum</h1>
          <p>TGG(The German Guy) UG</p>
          <p>Mühlenweg 34a</p>
          <p>15232 Frankfurt(Oder)</p>
          <p>Deutschland</p>
          <p>Email: <a href="mailto:contact@thegermanguy.org" className="underline">contact@thegermanguy.org</a></p>
          <p>Fon: +49-15736112217</p>
          <p>Registergericht: Amtsgericht Frankfurt(Oder)</p>
          <p>Registernummer: HRB 21884 FF</p>
          <p>Umsatzsteuer-Identifikationsnummer: DE415329353</p>
          <p>Steuernummer: 061/276/01885</p>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors max-w-[200px]">
          <p>Geschäftsführer: <a href="https://www.linkedin.com/in/imawanish5/" target="_blank">Awanish Srivastava</a></p>
          </Button>
          </div>
    </div>
  )
}

export default page;
