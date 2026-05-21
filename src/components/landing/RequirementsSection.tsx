import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const requirements = [
  {
    title: '$15,000+ in monthly revenue',
    description: 'We base your advance on the sales your business is already generating.',
  },
  {
    title: '6+ months in business',
    description: 'Enough operating history for us to see your revenue trend—startups welcome after six months.',
  },
  {
    title: '4-6 months of business bank statements',
    description: 'Your statements show your cash flow. That’s the heart of the decision—no tax returns needed.',
  },
  {
    title: 'An active business bank account',
    description: 'Funds are deposited there, and repayment is drawn as a small percentage of your sales.',
  },
  {
    title: 'A valid government-issued ID',
    description: 'Basic verification so we know we’re working with the business owner.',
  },
];

export default function RequirementsSection() {
  return (
    <section id="requirements" className="section-padding bg-background relative overflow-hidden">
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-mint-green/10 rounded-full text-mint-green text-sm font-medium mb-4">
              What You Need to Apply
            </span>
            <h2 className="heading-2 text-heading mb-4">
              Qualifying Is Simpler Than You Think
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              No credit score requirement. No collateral. No mountain of paperwork. If your business
              has steady revenue, you likely already qualify.
            </p>
            <a href="#apply" className="btn-primary inline-flex items-center gap-2">
              Start My Application
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {requirements.map((req, index) => (
              <motion.li
                key={req.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4 bg-white dark:bg-midnight-blue/30 rounded-xl p-5 border border-gray-100 dark:border-white/10"
              >
                <CheckCircleIcon className="w-6 h-6 text-mint-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-heading">{req.title}</p>
                  <p className="text-sm text-body mt-1">{req.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
