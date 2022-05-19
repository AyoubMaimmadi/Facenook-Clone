import Image from 'next/image'
import { useSession } from 'next-auth/client'

const InputBox = () => {
  const [session] = useSession()

  const sendPost = (e) => {
    e.preventDefault()
  }

  return (
    <div className="bg-gray-300 p-2 rounded-2xl shadow-lg text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 items-center">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1 ">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={`What's on your mind, ${
              session.user.name.split(' ')[0]
            }?`}
          />
          <button hidden onClick={sendPost}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default InputBox
