import { motion } from 'framer-motion';

const terms = [
  { label: 'MCA Amount', value: '$5,000 – $1,000,000' },
  { label: 'Factor Rate', value: '1.1 – 1.5 (fixed)' },
  { label: 'Retrieval', value: 'Daily or weekly % of sales' },
  { label: 'Term Length', value: '3 to 24 months' },
  { label: 'Minimum Monthly Revenue', value: '$15,000' },
  { label: 'Time in Business', value: '6 months or more' },
  { label: 'Minimum Credit Score', value: 'None required' },
  { label: 'Approval & Funding', value: 'Approved in hours, funded in as little as 24 hours' },
];

export default function TermsTableSection() {
  return (
    <section id="terms" className="section-padding bg-white dark:bg-background relative overflow-hidden">
      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-mint-green/10 rounded-full text-mint-green text-sm font-medium mb-4">
            Rates &amp; Terms
          </span>
          <h2 className="heading-2 text-heading mb-4">
            Clear Terms, Up Front
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            No hidden fees and no fine print. Here's exactly what a merchant cash advance looks like.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white dark:bg-midnight-blue/30 rounded-2xl border border-gray-100 dark:border-white/10 overflow-hidden shadow-sm"
        >
          {terms.map((term, index) => (
            <div
              key={term.label}
              className={`flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 px-6 py-4 ${
                index !== terms.length - 1 ? 'border-b border-gray-100 dark:border-white/10' : ''
              }`}
            >
              <span className="text-text-secondary font-medium">{term.label}</span>
              <span className="text-heading font-semibold text-right">{term.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
