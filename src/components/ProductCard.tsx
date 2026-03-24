import React from 'react'

export type ProductCardProps = {
  id?: number | string
  title: string
  price: number
  image: string
  rating?: number
  description?: string
  href?: string
  onAddToCart?: () => void
}

export default function ProductCard({
  title,
  price,
  image,
  rating = 0,
  description,
  href,
  onAddToCart,
}: ProductCardProps) {
  const content = (
    <>
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="h-44 w-44 object-contain"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="line-clamp-2 text-lg font-medium text-blue-700 hover:underline">
          {title}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-sm text-gray-700">
          <span>{rating.toFixed(1)}</span>
          <span>★</span>
        </div>

        {description && (
          <p className="mt-2 line-clamp-3 text-sm text-gray-600">
            {description}
          </p>
        )}

        <p className="mt-3 text-2xl font-semibold text-gray-900">
          £{price.toFixed(2)}
        </p>
      </div>
    </>
  )

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex gap-4">
        {href ? (
          <a href={href} className="flex flex-1 gap-4 no-underline">
            {content}
          </a>
        ) : (
          <div className="flex flex-1 gap-4">{content}</div>
        )}

        <div className="flex w-44 flex-col items-start justify-start gap-3 rounded-2xl border border-gray-200 p-4">
          <p className="text-sm text-green-700">In stock</p>

          <button
            type="button"
            onClick={onAddToCart}
            className="inline-flex w-auto items-center justify-center rounded-full bg-yellow-400 px-4 py-2 text-sm font-medium text-black hover:bg-yellow-300"
          >
            Add to Basket
          </button>

          <button
            type="button"
            className="inline-flex w-auto items-center justify-center rounded-full bg-orange-400 px-4 py-2 text-sm font-medium text-black hover:bg-orange-300"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}