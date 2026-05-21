import { motion } from 'framer-motion';
import { ArrowRightIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

const terms = [
  { label: 'MCA Amount', value: '$5,000 – $1,000,000' },
  { label: 'Factor Rate', value: '1.1 – 1.5 (fixed)' },
  { label: 'Retrieval', value: 'Daily or weekly % of sales' },
  { label: 'Term Length', value: '3 to 24 months' },
  { label: 'Minimum Monthly Revenue', value: '$15,000' },
  { label: 'Time in Business', value: '6 months or more' },
  { label: 'Minimum Credit Score', value: 'None required' },
  { label: 'Approval & Funding', value: 'Hours to approve, 24-hour funding' },
];

export default function MCAExplainerSection() {
  return (
    <section id="what-is-mca" className="section-padding bg-background relative overflow-hidden">
      <motion.div
        className="absolute top-10 right-0 w-96 h-96 bg-mint-green/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-mint-green/10 rounded-full text-mint-green text-sm font-medium mb-4">
              Merchant Cash Advance
            </span>
            <h2 className="heading-2 text-heading mb-6">
              Funding That Keeps Your Business Moving Forward
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              A merchant cash advance isn't a loan—it's an advance on the sales your business is
              already making. You get a lump sum of working capital today and repay it as a small,
              fixed percentage of your daily or weekly sales.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              When business is busy, you pay it down faster. When things slow down, your payments
              ease up with you. The cost is a single fixed factor rate you know from day one—no
              compounding interest and no surprises.
            </p>
          </motion.div>

          {/* Right — terms panel + CTA */}
          <motion.div
            id="terms"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="scroll-mt-28 rounded-3xl p-8 border border-gray-200 dark:border-white/10"
          >
            <h3 className="text-2xl font-bold text-heading mb-6">
              Our MCA Rates &amp; Terms
            </h3>

            <div>
              {terms.map((term, index) => (
                <div
                  key={term.label}
                  className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 py-3 ${
                    index !== terms.length - 1 ? 'border-b border-gray-100 dark:border-white/10' : ''
                  }`}
                >
                  <span className="text-text-secondary text-sm font-medium">{term.label}</span>
                  <span className="text-heading font-semibold sm:text-right">{term.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/10">
              <h4 className="text-xl font-bold text-heading mb-2">Ready to get started?</h4>
              <p className="text-text-secondary mb-6">
                Now that you've seen the terms, get a personalized advance quote based on your
                revenue and sales history.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#apply"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-mint-green to-teal text-midnight-blue font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Apply Now
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-white/20 text-heading font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
                >
                  <ChatBubbleLeftRightIcon className="w-4 h-4" />
                  Ask a Question
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
