export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl text-gold font-display mb-4">Land a Conversation</h1>
      <form
        className="flex flex-col gap-4 w-full max-w-lg"
        action="https://formspree.io/f/mvoeapaw"
        method="POST"
      >
        <input className="p-3 bg-earth text-black" type="text" name="name" placeholder="Your Name" required />
        <input className="p-3 bg-earth text-black" type="email" name="email" placeholder="Your Email" required />
        <textarea className="p-3 bg-earth text-black" name="message" placeholder="Tell us about your land or project..." rows="5" required />
        <button className="bg-gold text-black py-3 font-bold" type="submit">Send</button>
      </form>
    </main>
  )
}