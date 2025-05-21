import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Amar Properties | Land Isn’t Dirt. It’s Destiny.</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8">
        <h1 className="text-5xl font-display text-gold text-center mb-6">
          Land isn’t just dirt. It’s destiny.
        </h1>
        <p className="text-xl text-earth text-center max-w-2xl">
          At Amar Properties, we specialize in identifying, acquiring, and preparing strategic land parcels. Whether you’re a developer, investor, or visionary — we help you secure the ground beneath your next move.
        </p>
      </main>
    </>
  )
}