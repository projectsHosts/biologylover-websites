import React, { useState } from 'react';
import '../styles/faq.css';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    category: 'General',
    question: 'What is BiologyLover and how does it work?',
    answer:
      'BiologyLover is an interactive online platform designed to make biology learning engaging and accessible. We provide comprehensive video lectures, 3D interactive models, virtual lab simulations, and expert guidance to help students master complex biological concepts. Our platform combines cutting-edge technology with expert instruction to create an effective learning experience.',
  },
  {
    id: 2,
    category: 'General',
    question: 'Who can use BiologyLover?',
    answer:
      'BiologyLover is designed for everyone interested in biology! Whether you are a high school student preparing for exams, an undergraduate pursuing a degree, a professional looking to refresh your knowledge, or simply someone curious about life sciences, our platform has tailored learning paths for all levels and interests.',
  },
  {
    id: 3,
    category: 'Courses',
    question: 'What courses are available on BiologyLover?',
    answer:
      'We offer 200+ expert-designed courses covering all major branches of biology including Molecular Biology, Genetics, Ecology, Human Anatomy, Botany, Zoology, Microbiology, Cell Biology, Evolution, and Biochemistry. Each course includes video lectures, interactive content, practice problems, and assessments.',
  },
  {
    id: 4,
    category: 'Courses',
    question: 'Can I access courses on mobile devices?',
    answer:
      'Absolutely! Our platform is fully optimized for mobile devices. You can access all courses, watch lectures, complete assignments, and interact with our community from your smartphone or tablet. Download the BiologyLover app or use our responsive web platform for seamless learning on the go.',
  },
  {
    id: 5,
    category: 'Pricing',
    question: 'Is BiologyLover free or paid?',
    answer:
      'BiologyLover offers a freemium model. You can access basic content, some free courses, and community features for free. Premium membership unlocks access to all 200+ courses, expert guidance, personalized learning paths, virtual lab simulations, and priority support. We also offer special discounts for students.',
  },
  {
    id: 6,
    category: 'Pricing',
    question: 'What is included in a premium membership?',
    answer:
      'Premium members get access to all 200+ courses with lifetime access, expert doubt-solving sessions, personalized learning recommendations using AI, virtual laboratory simulations, downloadable study materials, progress tracking, mock exams, and certificate of completion. You also get priority support from our team.',
  },
  {
    id: 7,
    category: 'Learning',
    question: 'How long does it take to complete a course?',
    answer:
      'Course duration varies depending on complexity and your learning pace. Most basic courses take 4-8 weeks with 5-6 hours of study per week, while advanced courses may take 10-12 weeks. You can learn at your own pace with no time restrictions, so you can take longer if needed or speed up if you prefer.',
  },
  {
    id: 8,
    category: 'Learning',
    question: 'Are there certifications available?',
    answer:
      'Yes! Upon completing any course, you receive a verifiable certificate of completion from BiologyLover. These certificates can be added to your resume and shared on LinkedIn. Premium members also get access to advanced certification programs that are recognized by educational institutions and employers.',
  },
  {
    id: 9,
    category: 'Support',
    question: 'How can I get help if I have doubts?',
    answer:
      'We provide multiple support channels. You can ask questions in course discussions, join our community forums where you can interact with peers and mentors, book one-on-one doubt-solving sessions with expert educators (premium feature), or contact our support team via email or chat. We aim to respond within 24 hours.',
  },
  {
    id: 10,
    category: 'Support',
    question: 'What if I want to refund my premium membership?',
    answer:
      'We offer a 30-day money-back guarantee. If you are not satisfied with your premium membership within 30 days of purchase, you can request a full refund with no questions asked. Simply contact our support team with your order details.',
  },
];

const FAQ: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...new Set(faqData.map((item) => item.category))];

  const filteredFAQ =
    selectedCategory === 'All'
      ? faqData
      : faqData.filter((item) => item.category === selectedCategory);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="faq-section">
      {/* Background Blobs */}
      <div className="faq-blob faq-blob-1"></div>
      <div className="faq-blob faq-blob-2"></div>
      <div className="faq-blob faq-blob-3"></div>

      <div className="faq-wrapper">
        {/* Header Section */}
        <div className="faq-header">
          <h2 className="faq-title">
            <span className="faq-title-gradient">Frequently Asked Questions</span>
          </h2>
          <p className="faq-description">
            Find answers to common questions about BiologyLover, our courses, pricing, and learning experience.
          </p>
          <div className="faq-underline"></div>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory(category);
                setExpandedId(null);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="faq-container">
          {filteredFAQ.map((item, index) => (
            <div
              key={item.id}
              className={`faq-item ${expandedId === item.id ? 'expanded' : ''}`}
              style={{
                animation: `slideInUp 0.5s ease-out ${index * 0.08}s forwards`,
                opacity: 0,
              }}
            >
              <button
                className="faq-question"
                onClick={() => toggleExpand(item.id)}
                aria-expanded={expandedId === item.id}
              >
                <span className="question-text">{item.question}</span>
                <ChevronDown
                  className="chevron-icon"
                  size={24}
                  style={{
                    transition: 'transform 0.3s ease',
                    transform: expandedId === item.id ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>

              <div
                className="faq-answer"
                style={{
                  maxHeight: expandedId === item.id ? '500px' : '0px',
                  opacity: expandedId === item.id ? 1 : 0,
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions Section */}
        <div className="still-questions">
          <h3>Still have questions?</h3>
          <p>Can't find the answer you're looking for? Join our community and ask our expert educators.</p>
          <a href="https://t.me/biology_lover_02" target="_blank" rel="noopener noreferrer" className="contact-btn">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;