import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const topics = [
  {
    heading: 'What is a merchant cash advance?',
    body: 'A merchant cash advance (MCA) is a lump sum of working capital you receive today in exchange for a small, fixed percentage of your future sales. It is not a loan—there is no fixed monthly payment and no interest that compounds. Instead, you repay automatically as your business earns, which is why many owners with uneven or seasonal revenue prefer it.',
  },
  {
    heading: 'How does repayment work?',
    body: 'Repayment is collected as a set percentage of your daily or weekly sales, drawn directly from your business bank account. Because the amount moves with your revenue, you pay more when sales are strong and less when they dip. There is nothing to remember and no check to mail—it simply adjusts to your cash flow until the advance is paid in full.',
  },
  {
    heading: 'What does an advance cost?',
    body: 'The cost of an MCA is expressed as a factor rate rather than an interest rate. For example, a $50,000 advance at a 1.30 factor rate means you repay $65,000 in total. The rate is fixed and disclosed up front, so you know the full cost before you accept—no hidden fees and no surprises down the road.',
  },
  {
    heading: 'How fast can I get funded?',
    body: 'Most applications take about five minutes, decisions come back within hours, and approved funds can land in your account in as little as 24 hours. The speed comes from how we underwrite—your recent bank statements and revenue tell us most of what we need, so there is no waiting weeks for a committee.',
  },
  {
    heading: 'Pros and cons to weigh',
    body: 'The advantages are speed, flexible revenue-based repayment, no collateral, and approval without a credit-score cutoff. The trade-off is cost: an MCA typically carries a higher cost of capital than a traditional bank loan. It works best when the capital helps you earn more than it costs—covering payroll, buying inventory, or taking on a job you would otherwise lose.',
  },
  {
    heading: 'Is an MCA right for your business?',
    body: 'A merchant cash advance is a strong fit if you have steady sales, need capital quickly, and have a clear use that pays off in the near term. If you have months to wait and qualify for the lowest bank rates, a term loan may cost less. We will always talk you through the options honestly so you choose what actually fits your situation.',
  },
];

function GuideItem({ topic, isOpen, onClick }: { topic: typeof topics[0]; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-gray-200 dark:border-white/10 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-heading pr-8 group-hover:text-mint-green transition-colors">
          {topic.heading}
        </h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0">
          <ChevronDownIcon className={`w-5 h-5 transition-colors ${isOpen ? 'text-mint-green' : 'text-gray-400 group-hover:text-mint-green'}`} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-body leading-relaxed pr-10">{topic.body}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function GuideSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="guide" className="section-padding bg-white dark:bg-background relative overflow-hidden">
      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-mint-green/10 rounded-full text-mint-green text-sm font-medium mb-4">
            <BookOpenIcon className="w-4 h-4" />
            Learn the Basics
          </span>
          <h2 className="heading-2 text-heading mb-4">The Merchant Cash Advance Guide</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Tap any topic to learn more—everything you need to decide with confidence, in plain language.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white dark:bg-midnight-blue/30 rounded-2xl border border-gray-100 dark:border-white/10 px-8 py-2 shadow-sm"
        >
          {topics.map((topic, index) => (
            <GuideItem
              key={topic.heading}
              topic={topic}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
