type Props = {
  text: string
}

export default function Button({ text }: Props) {
  return (
    <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
      {text}
    </button>
  )
}