"use client";

import { useAddOrUpdate } from "@shared/hooks";

export default function ActionButtons({
  pizza,
  selectedVariant = null,
  onSelectVariant = () => {},
}) {
  const addOrUpdate = useAddOrUpdate({ pizza, selectedVariant });

  return (
    <div className="flex items-center justify-between">
      <button
        onClick={addOrUpdate}
        className="rounded-md px-2.5 py-1.5 text-sm font-semibold text-green-600 shadow-sm outline hover:bg-green-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 dark:text-green-300 dark:hover:bg-green-300 dark:hover:text-black dark:focus-visible:outline-green-300"
      >
        Add to cart
      </button>
      <div className="sizes flex items-center justify-end gap-2 text-black dark:text-white">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Select size:
        </span>
        <select
          value={selectedVariant.name || pizza.size}
          name="size"
          id="size"
          className="w-28 dark:bg-black"
          onChange={(e) => {
            onSelectVariant({
              name: e.target.value,
              price:
                e.target.options[e.target.selectedIndex].getAttribute(
                  "data-price",
                ),
            });
          }}
        >
          <option value={pizza.size}>{pizza.size}</option>
          {pizza.variants.length > 0
            ? pizza.variants.map((variant) => (
                <option
                  key={variant.id}
                  value={variant.name}
                  data-price={variant.price}
                >
                  {variant.name}
                </option>
              ))
            : null}
        </select>
      </div>
    </div>
  );
}
