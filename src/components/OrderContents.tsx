import type { IMenuItem, IOrderItem } from '../types';

interface OrderContentsProps {
  order: IOrderItem[];
  removeItem: (id: IMenuItem['id']) => void;
}

export default function OrderContents({ order, removeItem }: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="space-y-3 mt-10">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
          >
            <div>
              <p className="text-lg">
                {item.name} - ${item.price}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} - ${item.price * item.quantity}
              </p>
            </div>

            <button
              className="bg-red-600 h-8 w-8 rounded-full text-white font-black hover:bg-red-700 transition-colors"
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}