import { motion } from 'framer-motion';
import {
  WrenchScrewdriverIcon,
  BuildingStorefrontIcon,
  TruckIcon,
  HeartIcon,
  ScissorsIcon,
  CakeIcon,
  HomeModernIcon,
  ShoppingBagIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const useCases = [
  { icon: WrenchScrewdriverIcon, industry: 'Construction & Trades', example: 'Cover payroll and materials while you wait on invoices.' },
  { icon: BuildingStorefrontIcon, industry: 'Restaurants & Bars', example: 'Stock up for the busy season or renovate the dining room.' },
  { icon: TruckIcon, industry: 'Trucking & Logistics', example: 'Fuel, repairs, and a new rig to take on bigger routes.' },
  { icon: HeartIcon, industry: 'Medical & Dental', example: 'Add equipment or bridge gaps between insurance payouts.' },
  { icon: ScissorsIcon, industry: 'Salons & Spas', example: 'Open a second chair, restock product, or expand the space.' },
  { icon: CakeIcon, industry: 'Bakeries & Cafes', example: 'Buy a new oven and keep the shelves full every morning.' },
  { icon: HomeModernIcon, industry: 'Home Services', example: 'Hire crew and buy inventory to handle more jobs at once.' },
  { icon: ShoppingBagIcon, industry: 'Retail & E-commerce', example: 'Load up on inventory ahead of your biggest sales months.' },
  { icon: SparklesIcon, industry: 'Auto Repair', example: 'Add a lift, tools, and parts to service more vehicles.' },
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="section-padding bg-white dark:bg-background relative overflow-hidden">
      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-mint-green/10 rounded-full text-mint-green text-sm font-medium mb-4">
            Who We Serve
          </span>
          <h2 className="heading-2 text-heading mb-4">
            Trusted by Thousands of Business Owners Like You
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From the job site to the storefront, business owners across every industry use a merchant
            cash advance to seize opportunities and smooth out cash flow.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.industry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-midnight-blue/30 rounded-2xl p-6 border border-gray-100 dark:border-white/10 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-mint-green/10 flex items-center justify-center mb-4">
                <useCase.icon className="w-6 h-6 text-mint-green" />
              </div>
              <h3 className="text-lg font-semibold text-heading mb-2">{useCase.industry}</h3>
              <p className="text-body text-sm leading-relaxed">{useCase.example}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
