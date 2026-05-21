import { motion } from 'framer-motion';
import {
  ComputerDesktopIcon,
  BoltIcon,
  ShieldCheckIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: ComputerDesktopIcon,
    title: 'Apply Online',
    description: 'A simple 5-minute application. No appointments, no branch visits, no stacks of forms.',
  },
  {
    icon: BoltIcon,
    title: 'Same-Day Funding',
    description: 'Approved in hours and funded as fast as 24 hours, so you never miss a payroll or a job.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'No Credit Score Minimum',
    description: 'We never set a credit cutoff. A soft pull only—checking your options never dings your score.',
  },
  {
    icon: ChartBarIcon,
    title: 'Revenue-Based Approval',
    description: 'We qualify you on your monthly sales, not your credit. If your business earns, you can qualify.',
  },
];

export default function QuickFeaturesSection() {
  return (
    <section className="section-padding bg-white dark:bg-background relative overflow-hidden">
      <div className="container-max relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-midnight-blue/30 rounded-2xl p-6 border border-gray-100 dark:border-white/10 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-mint-green/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-mint-green" />
              </div>
              <h3 className="text-lg font-semibold text-heading mb-2">{feature.title}</h3>
              <p className="text-body text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
