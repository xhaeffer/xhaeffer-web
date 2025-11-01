import { Button } from "flowbite-react"

const NotFound = () => {
  return (
    <section className="bg-[#161B22] min-h-screen flex flex-col items-center justify-center" id="NotFound">
      <h1 className="text-white text-6xl font-bold mb-4">404</h1>
      <p className="text-white text-xl mb-8">Page Not Found</p>
      <Button
        outline
        size="lg"
        href="/"
      >
        Go to Home
      </Button>
    </section>
  )
}

export default NotFound
