import type { Dispatch, SetStateAction } from 'react';

const tipOptions = [
  { id: 'tip-10', value: 0.1, label: '10%' },
  { id: 'tip-20', value: 0.2, label: '20%' },
  { id: 'tip-50', value: 0.5, label: '50%' }
];

interface TipPercentageFormProps {
  setTip: Dispatch<SetStateAction<number>>;
  tip: number;
}

export default function TipPercentageForm({ setTip, tip }: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>

      <form className="mt-3">
        {tipOptions.map((tipOption) => (
          <div key={tipOption.id} className="flex items-center gap-2 mb-2">
            <input
              id={tipOption.id}
              type="radio"
              name="tip"
              value={tipOption.value}
              onChange={(e) => setTip(+e.target.value)}
              checked={tipOption.value === tip}
            />
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
          </div>
        ))}
      </form>
    </div>
  );
}