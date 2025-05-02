import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

type QuotePageProps = {
  params: Promise<{
    quoteId: string;
  }>;
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
      <h2>{quote.product_name}</h2>
      <h2>{quote.phone_number}</h2>
      <h2>{quote.product_price.toString()}</h2>
      <h2>{quote.product_unit}</h2>
      <h2>{quote.status}</h2>
      <Link href={`/quotes/${quote.id}/edit`}>Edit</Link>
    </div>
  );
};

export default QuotePage;