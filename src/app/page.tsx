import Link from 'next/link';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';

const createQuote = async (formData: FormData) => {
  'use server';

  const product_name = formData.get('product_name') as string;
  const phone_number = formData.get('phone_number') as string;
  const product_price = parseFloat(formData.get('product_price') as string);
  const product_unit = formData.get('product_unit') as string;
  const status = "new";

  await prisma.quote_requests.create({
    data: {
      product_name,
      phone_number,
      product_price,
      product_unit,
      status
    }
  });

  revalidatePath('/');
};

const deleteQuote = async (id: number) => {
  'use server';

  await prisma.quote_requests.delete({
    where: {
      id,
    },
  });

  revalidatePath('/');
};

const Home = async () => {
  const quotes = await prisma.quote_requests.findMany();
  
  return (
    <div>
      <h1>Welcome to Neximaite!</h1>
      <p>
        This is a basic CRUD app using Next.js, Prisma, and SQLite.
      </p>

      <h2>Quote Requests</h2>
      <form action={createQuote} className="flex flex-col gap-y-2">
        <input type="text" name="product_name" placeholder="Name" />
        <input type="text" name="phone_number" placeholder="Phone Number" />
        <input type="text" name="product_price" placeholder="Product Price" />
        <input type="text" name="product_unit" placeholder="Product Unit" />
        <button type="submit">Create</button>
      </form>

      <ul className="flex flex-col gap-y-2">
        {quotes.map((quote) => (
          <li key={quote.id} className="flex items-center gap-x-4">
            <div>{quote.product_name}</div>
            <div>
              <Link href={`/quotes/${quote.id}`}>Go To</Link>
              <Link href={`/quotes/${quote.id}/edit`}> | Edit</Link>
              <form action={deleteQuote.bind(null, quote.id)}>
                <button type="submit">Delete</button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;