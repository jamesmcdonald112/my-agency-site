'use client';
import { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'

  

function ROICalculator() {
  const [clientValue, setClientValue] = useState('');
  const [costPerVisit, setCostPerVisit] = useState('');
  const [visitsPerClient, setVisitsPerClient] = useState('');
  const [result, setResult] = useState<null | { breakEvenClients: number; valueTier: 'high' | 'medium' | 'low' }>(null);

  const monthlyCost = 200;
  const yearlyCost = monthlyCost * 12;

  const calculateROI = () => {
    let manualValue = parseFloat(clientValue);
    const visitValue = parseFloat(costPerVisit);
    const visitCount = parseFloat(visitsPerClient);

    if (!isNaN(visitValue) && !isNaN(visitCount)) {
      manualValue = visitValue * visitCount;
      setClientValue(manualValue.toString());
    }

    let avgClientValue = manualValue;

    if (isNaN(avgClientValue) || avgClientValue <= 0) {
      setResult(null);
      return;
    }

    const breakEvenClients = Math.ceil(yearlyCost / avgClientValue);
    let valueTier: 'high' | 'medium' | 'low';
    if (breakEvenClients <= 8) {
      valueTier = 'high';
    } else if (breakEvenClients <= 11) {
      valueTier = 'medium';
    } else {
      valueTier = 'low';
    }

    setResult({ breakEvenClients, valueTier });
  };

  useEffect(() => {
    const visitValue = parseFloat(costPerVisit);
    const visitCount = parseFloat(visitsPerClient);

    if (!isNaN(visitValue) && !isNaN(visitCount) && costPerVisit !== '' && visitsPerClient !== '') {
      const calculatedValue = visitValue * visitCount;
      setClientValue(calculatedValue.toString());
    }
  }, [costPerVisit, visitsPerClient]);

  return (
    <div className="max-w-xl mx-auto px-6 py-12 bg-white shadow-lg rounded-md text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        How many clients would it take for your website to pay for itself?
      </h1>
      <p className="text-gray-700 mb-8">
        Use this quick calculator to check your break-even point — no email required.
      </p>

      <div className="space-y-6 text-left">
        <div>
          <label className="block font-semibold text-gray-800 mb-1">
            Average cost per service (€) — e.g. a single session, class, or treatment
          </label>
          <input
            type="number"
            value={costPerVisit}
            onChange={(e) => setCostPerVisit(e.target.value)}
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
            placeholder="e.g. 50"
          />
          <p className="text-sm text-gray-500 mt-1">
            We’ll use these to calculate your average client value if you’re not sure what it is.
          </p>
        </div>

        <div>
          <label className="block font-semibold text-gray-800 mb-1">
            Average number of services per client — total lifetime visits per typical client
          </label>
          <input
            type="number"
            value={visitsPerClient}
            onChange={(e) => setVisitsPerClient(e.target.value)}
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
            placeholder="e.g. 6"
          />
          <p className="text-sm text-gray-500 mt-1">
            We’ll use these to calculate your average client value if you’re not sure what it is.
          </p>
        </div>

        <div>
          <label className="block font-semibold text-gray-800 mb-1">
            Average client value (€) — total value of a typical client over their lifetime
          </label>
          <input
            type="number"
            value={clientValue}
            onChange={(e) => {
              setClientValue(e.target.value);
              setCostPerVisit('');
              setVisitsPerClient('');
            }}
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
            placeholder="e.g. 300"
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            You can enter this manually, or we’ll calculate it based on the fields above.
          </p>
        </div>

        <button
          onClick={calculateROI}
          className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition"
        >
          Calculate ROI
        </button>
      </div>

      {result && (
        <div className="mt-10 p-6 border rounded-md bg-gray-50 text-left">
          {result.valueTier === 'high' && (
            <>
              <p className="text-lg font-semibold text-green-700">
                ✅ Great news — this investment easily pays for itself.
              </p>
              <p className="mt-3 text-gray-800">
                {result.breakEvenClients} client{result.breakEvenClients > 1 && 's'} and it’s already paid for itself. Everything after is profit.
              </p>
              <p className="mt-4 text-gray-700">
                Ready to take the next step? Whether you already have a website or are starting fresh, we’ll help you make it work.
              </p>
              <a
                href="/free-audit"
                className="block w-full text-center mt-6 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 transition"
              >
                See how your current site could work better →
              </a>
              <a
                href="/contact"
                className="block w-full text-center mt-4 border border-gray-300 px-5 py-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition"
              >
                Start building a high-performing site →
              </a>
            </>
          )}
          {result.valueTier === 'medium' && (
            <>
              <p className="text-lg font-semibold text-yellow-700">
                ⚠️ Your website could pay for itself with about{' '}
                <span className="font-bold">{result.breakEvenClients}</span> new client
                {result.breakEvenClients > 1 && 's'}.
              </p>
              <p className="mt-3 text-gray-800">
                This is a medium tier value — consider strategies to improve client acquisition.
              </p>
            </>
          )}
          {result.valueTier === 'low' && (
            <>
              <p className="text-lg font-semibold text-red-600">
                🤔 Based on your inputs, a website might not be the right investment — yet.
              </p>
              <p className="mt-3 text-gray-800">
                But we’re happy to talk strategy if things change or you want to explore other options.
              </p>
              {result.breakEvenClients > 10 && (
                <p className="mt-3 text-yellow-700 font-medium">
                  ⚠️ You’d need at least {result.breakEvenClients} new clients a year to break even.<br />
                  That might be a bit high depending on your industry — feel free to reach out if you'd like a second opinion.
                </p>
              )}
            </>
          )}
        </div>
      )}

    </div>
  );
}

const faqs = [
  {
    question: "What if I don’t know my numbers exactly?",
    answer: "Just estimate. Even rough numbers will bring useful clarity and give you a sense of whether a website makes sense for your business."
  },
  {
    question: "Will you follow up or contact me after I use the calculator?",
    answer: "Only if you reach out to us first. We won’t follow up unless you want to. You’ll find a link at the bottom to get in touch if you’d like a second opinion."
  },
  {
    question: "What if my client value seems too low to break even?",
    answer: "It might still be worth it if you offer packages, retainers, or get referrals from each client. You can also contact us using the link below for a second opinion."
  },
  {
    question: "What if I don’t have a website yet?",
    answer: "No problem — we help with that too. If the numbers look good, we can build you a complete site designed to pay for itself."
  },
  {
    question: "What if I'm just exploring right now?",
    answer: "That’s totally fine. This calculator is built to give you clarity — no pressure, no commitments. Use it whenever you're ready to think about next steps."
  }
];


function Testimonial() {
  return (
    <section className="w-full max-w-7xl mx-auto bg-gray-50 px-6 py-16 rounded-lg">
      <figure className="mx-auto max-w-2xl text-center">
        <div className="flex justify-center mb-6 space-x-1">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="h-6 w-6 text-indigo-600" aria-hidden="true" />
          ))}
        </div>
        <blockquote className="text-xl/8 font-semibold tracking-tight text-gray-900 sm:text-2xl/9">
          <p>
            “This made it crystal clear that I only needed 3 clients to break even. I signed up the same week.”
          </p>
        </blockquote>
        <figcaption className="mt-6 text-center text-sm font-semibold text-gray-900">
          Personal Trainer — Kilkenny, Ireland
        </figcaption>
      </figure>
    </section>
  );
}
  
function Faq() {
  return (
    <div className="w-full bg-white -mb-20">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl className="mt-16 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}


export default function ROICalculatorPage() {
  return (
    <main className="min-h-screen bg-transparent pt-10 flex flex-col gap-12 items-center w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 px-4 leading-tight max-w-4xl">
          See how quickly your website can pay for itself
        </h1>
        <ROICalculator />
        <Testimonial />
        <Faq />
        <hr className="w-full max-w-6xl border-t border-gray-200" />
    </main>
  );
}