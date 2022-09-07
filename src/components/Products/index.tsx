import { Fragment } from "react";

const Products = (props:any) => {
  const {data} = props;
  return (
    <>
      <div className="mx-auto text-center py-8 mb-2 bg-sky-900">
        <h1 className="text-white text-3xl">Product Store</h1>
      </div>
      <div className="grid grid-cols-1 items-center place-items-center">
        {data.map((item:any, index:number) => (
          <Fragment key={index}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg my-3">
              <img
                className="w-full max-h-50"
                src={item.image}
                alt={item.title}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">{item.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {item.category}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  ${item.price}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {item.rating.rate + "/" + item.rating.count}
                </span>
              </div>
            </div>
            <div className="bg-"></div>
          </Fragment>
        ))}
      </div>
    </>
  )
}
export default Products