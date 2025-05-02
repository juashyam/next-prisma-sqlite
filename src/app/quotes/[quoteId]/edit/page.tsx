import { notFound, redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';

type QuotePageProps = {
  params: Promise<{
    quoteId: string;
  }>;
};

const updatePost = async (formData: FormData) => {
  'use server';

  const id = parseInt(formData.get('id') as string, 10);
  const product_name = formData.get('product_name') as string;
  const phone_number = formData.get('phone_number') as string;
  const product_price = parseFloat(formData.get('product_price') as string);
  const product_unit = formData.get('product_unit') as string;
  const status = formData.get('status') as string;

  await prisma.quote_requests.update({
    where: {
      id,
    },
    data: {
      product_name,
      phone_number,
      product_price,
      product_unit,
      status
    },
  });

  revalidatePath('/');
  redirect('/');
};

const QuotePage = async ({ params }: QuotePageProps) => {
  const { quoteId } = await params;
  const quote = await prisma.quote_requests.findUnique({
    where: {
      id: parseInt(quoteId, 10),
    },
  });

  if (!quote) {
    return notFound();
  }

  return (
    <div>
      <h2><Link href="/">Home</Link></h2>
      <form action={updatePost}>
        <input type="hidden" name="id" value={quote.id} />
        <input type="text" name="product_name" placeholder="Name" defaultValue={quote.product_name} />
        <input type="text" name="phone_number" placeholder="Phone Number" defaultValue={quote.phone_number} />
        <input type="text" name="product_price" placeholder="Product Price" defaultValue={quote.product_price.toString()} />
        <input type="text" name="product_unit" placeholder="Product Unit" defaultValue={quote.product_unit} />
        <select name="status" defaultValue={quote.status}>
          <option value="new">New</option>
          <option value="closed">Closed</option>
        </select>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default QuotePage;