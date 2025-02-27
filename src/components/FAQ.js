import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { FaChevronDown } from "react-icons/fa";
import "../styles/Faq.css";

function FAQ() {
  const faqs = [
    {
      question: "What is Ask IndiaSpend?",
      answer:
        "Ask IndiaSpend is an AI-powered data platform designed to provide insightful, fact-based answers to questions related to governance, economy, public policy, health, and education in India. Using IndiaSpend’s trusted research and journalism, it delivers data-backed insights to help you understand complex topics.",
    },
    {
      question: "How is Ask IndiaSpend different from other platforms?",
      answer: `Unlike other AI-driven tools, Ask IndiaSpend relies on real data, research reports, and credible journalism rather than generating responses from generic AI models.  
      ✅ Every answer is fact-checked and backed by trusted sources.  
      ✅ Links to relevant IndiaSpend articles and research allow you to explore topics in-depth.  
      ✅ The platform ensures data-driven, transparent insights instead of speculative or unsupported claims.`,
    },
    {
      question: "How is Ask IndiaSpend different from other platforms?",
      answer: `Unlike other AI-driven tools, Ask IndiaSpend relies on real data, research reports, and credible journalism rather than generating responses from generic AI models.  
      ✅ Every answer is fact-checked and backed by trusted sources.  
      ✅ Links to relevant IndiaSpend articles and research allow you to explore topics in-depth.  
      ✅ The platform ensures data-driven, transparent insights instead of speculative or unsupported claims.`,
    },
    {
      question: "How does it work?",
      answer: `Have a question about inflation, healthcare policies, or environmental challenges in India? Just type it in!  
      ✅ Scan through IndiaSpend’s repository of articles, data reports, and analyses.  
      ✅ Provide a well-researched, structured response with supporting evidence.  
      ✅ Highlight relevant sources and data points for further exploration.`,
    },
    {
      question: "What kinds of questions yield the best responses?",
      answer: `To get meaningful, well-researched answers, ask broad, analytical, and contextual questions that align with IndiaSpend’s research areas.  
      ✅ How does urban air pollution affect public health in India?  
      ✅ What are the economic consequences of inflation in India?  
      ✅ How has financial technology influenced banking access in rural areas?  
      ✅ What are the major challenges in India’s public healthcare system?`,
    },
    {
      question: "How can Ask IndiaSpend help me?",
      answer: `This platform is designed to simplify complex data, uncover trends, and provide valuable insights on key policy issues. You can:  
      ✅ Access credible, research-backed answers to pressing policy and social questions.  
      ✅ Explore relevant IndiaSpend reports and data sources for deeper understanding.  
      ✅ Stay informed about trending topics and data insights that impact India.  
      ✅ Identify gaps in research and journalism that need further exploration.`,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs-grid">
      {/* ✅ Heading aur description add kiya */}
      <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
      <p className="text-lg text-gray-600 mb-4">
        {/* Find answers to commonly asked questions about Ask IndiaSpend. */}
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-box-rkcontent">
            <h3
              className="text-xl font-semibold"
              onClick={() => toggleFAQ(index)}
            >
              {index + 1}. {faq.question}
              <FaChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </h3>

            {openIndex === index && (
              <ReactMarkdown className="text-xl dec-bgc">
                {faq.answer}
              </ReactMarkdown>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
