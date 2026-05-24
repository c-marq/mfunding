import { motion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const points = [
  'We underwrite on your revenue, not your credit score.',
  'Approval is based on your sales history and cash flow.',
  'The more your business earns, the more capital you can access.',
];

// Illustrative monthly-sales bars (relative heights)
const bars = [48, 62, 55, 78, 70, 92];

export default function LeverageSection() {
  return (
    <section id="leverage" className="section-padding bg-white dark:bg-background relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-mint-green/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — supporting visual (swap for generated imagery later) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 border border-gray-200 dark:border-white/10"
          >
            <p className="text-text-secondary text-sm font-medium mb-4">Your monthly sales</p>
            <div className="flex items-end justify-between gap-3 h-44 mb-6">
              {bars.map((height, index) => (
                <motion.div
                  key={index}
                  className="flex-1 rounded-t-lg bg-gradient-to-t from-mint-green/40 to-mint-green"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
                />
              ))}
            </div>

            <div className="flex items-center justify-center gap-3 text-mint-green mb-6">
              <ArrowRightIcon className="w-5 h-5 rotate-90" />
            </div>

            <div className="bg-mint-green/10 rounded-2xl p-6 text-center">
              <p className="text-text-secondary text-sm mb-1">Your advance</p>
              <p className="text-2xl font-bold text-heading">50% – 150% of monthly sales</p>
            </div>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-mint-green/10 rounded-full text-mint-green text-sm font-medium mb-4">
              Revenue Over Credit
            </span>
            <h2 className="heading-2 text-heading mb-6">
              Leverage Your Future Sales
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Your business is so much more than a credit score. We look at the sales you're already
              making and turn them into working capital you can put to work today. Strong months mean
              stronger offers—because we fund based on what your business actually does, not a number
              from your past.
            </p>

            <ul className="space-y-4 mb-8">
              {points.map((point, index) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-mint-green/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckIcon className="w-4 h-4 text-mint-green" />
                  </span>
                  <span className="text-body">{point}</span>
                </motion.li>
              ))}
            </ul>

            <a href="https://my.mfunding.net/app" className="btn-primary inline-flex items-center gap-2">
              See What You Qualify For
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
