import Form from '@/app/ui/registers/create-form';
import Breadcrumbs from '@/app/ui/registers/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main className='w-2/3 mt-20 mx-auto'>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Registros', href: '/registers' },
          {
            label: 'Crear Registro',
            href: '/registers/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}