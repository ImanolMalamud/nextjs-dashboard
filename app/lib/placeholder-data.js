// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const registers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    patent: 'ABC123',
    description: 'Cambio de aceite y filtro para automóvil Toyota Corolla.',
    date: '2024-04-01',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    patent: 'DEF456',
    description:
      'Revisión de niveles y lubricación para camioneta Ford Ranger.',
    date: '2024-04-05',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    patent: 'GHI789',
    description:
      'Recarga de líquido de frenos y revisión de presión de neumáticos para vehículo Honda Civic.',
    date: '2024-04-10',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    patent: 'JKL012',
    description:
      'Inspección general y ajuste de motor para automóvil Volkswagen Golf.',
    date: '2024-04-15',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    patent: 'MNO345',
    description:
      'Cambio de aceite y filtro para camioneta Chevrolet Silverado.',
    date: '2024-04-20',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    patent: 'PQR678',
    description:
      'Revisión de frenos y cambio de pastillas para automóvil Ford Focus.',
    date: '2024-04-25',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    patent: 'STU901',
    description: 'Cambio de aceite y filtro para motocicleta Yamaha FZ.',
    date: '2024-04-08',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    patent: 'VWX234',
    description:
      'Revisión de niveles y lubricación para camioneta Toyota Hilux.',
    date: '2024-04-12',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    patent: 'YZA567',
    description:
      'Recarga de aire acondicionado y revisión de sistema eléctrico para automóvil Nissan Sentra.',
    date: '2024-04-17',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    patent: 'BCD890',
    description:
      'Inspección de suspensión y alineación de ruedas para camioneta Dodge Ram.',
    date: '2024-04-22',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    patent: 'ABC123',
    description: 'Cambio de aceite y filtro para automóvil Toyota Corolla.',
    date: '2024-04-01',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    patent: 'DEF456',
    description:
      'Revisión de niveles y lubricación para camioneta Ford Ranger.',
    date: '2024-04-05',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    patent: 'GHI789',
    description:
      'Recarga de líquido de frenos y revisión de presión de neumáticos para vehículo Honda Civic.',
    date: '2024-04-10',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    patent: 'JKL012',
    description:
      'Inspección general y ajuste de motor para automóvil Volkswagen Golf.',
    date: '2024-04-15',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    patent: 'MNO345',
    description:
      'Cambio de aceite y filtro para camioneta Chevrolet Silverado.',
    date: '2024-04-20',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    patent: 'PQR678',
    description:
      'Revisión de frenos y cambio de pastillas para automóvil Ford Focus.',
    date: '2024-04-25',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    patent: 'ABC123', // Repeating patent
    description: 'Cambio de aceite y filtro para motocicleta Yamaha FZ.',
    date: '2024-04-08',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    patent: 'VWX234',
    description:
      'Revisión de niveles y lubricación para camioneta Toyota Hilux.',
    date: '2024-04-12',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    patent: 'YZA567',
    description:
      'Recarga de aire acondicionado y revisión de sistema eléctrico para automóvil Nissan Sentra.',
    date: '2024-04-17',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    patent: 'ABC123', // Repeating patent
    description:
      'Inspección de suspensión y alineación de ruedas para camioneta Dodge Ram.',
    date: '2024-04-22',
  },
];

const customers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    image_url: '/customers/hector-simpson.png',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Steven Tey',
    email: 'steven@tey.com',
    image_url: '/customers/steven-tey.png',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Steph Dietz',
    email: 'steph@dietz.com',
    image_url: '/customers/steph-dietz.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Emil Kowalski',
    email: 'emil@kowalski.com',
    image_url: '/customers/emil-kowalski.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[7].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[6].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

module.exports = {
  users,
  registers,
  customers,
  invoices,
  revenue,
};
