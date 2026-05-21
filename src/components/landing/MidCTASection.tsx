import { motion } from 'framer-motion';
import { ArrowRightIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

export default function MidCTASection() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-mint-green to-teal px-8 py-12 text-center"
        >
          <h2 className="text-3xl font-bold text-midnight-blue mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-midnight-blue/80 text-lg mb-8 max-w-xl mx-auto">
            Find out how much working capital your business qualifies for. It takes five minutes
            and won't affect your credit score.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 bg-midnight-blue text-white font-semibold px-7 py-3 rounded-lg hover:bg-midnight-blue/90 transition-colors"
            >
              Apply Now
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/80 text-midnight-blue font-semibold px-7 py-3 rounded-lg hover:bg-white transition-colors"
            >
              <ChatBubbleLeftRightIcon className="w-4 h-4" />
              Ask a Question
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
