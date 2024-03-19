'use client';

import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createInvoice } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createInvoice, initialState);

  return (
    <form action={dispatch}>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 rounded-md bg-gray-50 p-4 md:p-6">
        <div className="sm:col-span-4">
          <label htmlFor="patent" className="block text-sm font-medium leading-6 text-gray-900">Patente</label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input type="text" name="username" id="username" autoComplete="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder=""/>
            </div>
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="description" className="block w-3/6 text-sm font-medium leading-6 text-gray-900">Descripción</label>
          <div className="mt-2">
            <textarea id="about" name="about" rows={3} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
        </div>
      </div>
</form>
  );
}
