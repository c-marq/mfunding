import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const reviews = [
  {
    quote:
      "Bank had me jumping through hoops for three weeks and still said no. These guys looked at my deposits and had money in my account by Thursday. Used it to make payroll and take on a job I would've had to turn down.",
    name: 'Marcus D.',
    business: 'Drywall contractor',
    location: 'Columbus, OH',
  },
  {
    quote:
      "I was nervous because my credit isn't great, but they really didn't care about that. It was all about what the restaurant brings in. Paid it back faster during our busy months and the slow weeks were lighter, just like they said.",
    name: 'Priya N.',
    business: 'Restaurant owner',
    location: 'Phoenix, AZ',
  },
  {
    quote:
      "Straightforward people. No runaround, no surprise fees buried somewhere. I knew the total cost before I signed anything. Already came back for a second advance to buy another truck.",
    name: 'Tony R.',
    business: 'Auto repair shop',
    location: 'Sacramento, CA',
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="section-padding bg-background relative overflow-hidden">
      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-mint-green/10 rounded-full text-mint-green text-sm font-medium mb-4">
            Reviews
          </span>
          <h2 className="heading-2 text-heading mb-4">What Business Owners Say</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-amber-400" />
              ))}
            </div>
            <span className="text-text-secondary font-medium">4.8 out of 5 — based on 600+ funded clients</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-midnight-blue/30 rounded-2xl p-6 border border-gray-100 dark:border-white/10 shadow-sm flex flex-col"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-amber-400" />
                ))}
              </div>
              <p className="text-body leading-relaxed flex-1">&ldquo;{review.quote}&rdquo;</p>
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/10">
                <p className="font-semibold text-heading">{review.name}</p>
                <p className="text-sm text-text-secondary">
                  {review.business} · {review.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
