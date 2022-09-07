const ErrorComponent = (props:any) => {
  const {text, retry} = props
  return (
    <>
     <div className="mx-auto my-8 place-items-center text-center items-center">
      <h1 className="text-5xl mt-7 text-red-800">404</h1>
      <h1 className="text-3xl text-red-600">{text}</h1>
      <button className="my-6 border border-red-800 bg-red-800 text-white py-4 px-6 rounded-3xl mx-auto" onClick={retry}>Try again</button>
     </div>
    </>
  )
}
export default ErrorComponent