import Form from '@/app/ui/registers/create-form';
import Breadcrumbs from '@/app/ui/registers/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Registros', href: '/dashboard/registers' },
          {
            label: 'Crear Registro',
            href: '/dashboard/registers/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}