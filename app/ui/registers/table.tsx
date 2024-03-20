import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredRegisters } from '@/app/lib/data';

export default async function RegistersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const registers = await fetchFilteredRegisters(query, currentPage);

  return (
    <div className="mt-6 flow-root text-gray-50 bg-gray-800">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg p-2 md:pt-0">
          <div className="md:hidden">
            {registers?.map((register) => (
              <div
                key={register.id}
                className="mb-2 w-full rounded-md p-4"
              >
                <div className="flex w-full items-center justify-between pb-2">
                  <div>
                    <p className='text-gray-400'>{formatDateToLocal(register.date)}</p>
                  </div>
                  {/* <div className="flex justify-end gap-2">
                    <UpdateInvoice id={register.id} />
                    <DeleteInvoice id={register.id} />
                  </div> */}
                </div>
                <div className="flex items-center justify-between pb-1 font-semibold">
                  <div>
                    <p className="text-sm">{register.patent}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">{register.description}</p>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-50 md:table bg-gray-800">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Patente
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Descripción
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Fecha
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="">
              {registers?.map((register) => (
                <tr
                  key={register.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{register.patent}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {register.description}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(register.date)}
                  </td>
                  {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={register.id} />
                      <DeleteInvoice id={register.id} />
                    </div>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
