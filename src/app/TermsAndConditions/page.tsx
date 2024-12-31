"use client";

import React, { useState, useEffect } from "react";

// Define types for blocks
type BlockType =
  | { type: "header"; data: { text: string; level: number } }
  | { type: "paragraph"; data: { text: string } }
  | { type: "list"; data: { style: string; items: string[] } };

// Define type for content
type ContentType = {
  time: number;
  blocks: BlockType[];
};

const TermsAndConditions = () => {
  const [content, setContent] = useState<ContentType>({
    time: new Date().getTime(),
    blocks: [
      {
        "type": "header",
        "data": {
          "text": "Terms and Conditions for Swasthi",
          "level": 1
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Last Updated: 09.11.2024"
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Welcome to Swasthi, a comprehensive global health application designed to empower individuals to take charge of their wellness through interactive tools and resources. By accessing or using the Swasthi app (\"App\"), you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms, please do not use the App."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "1. Definitions",
          "level": 2
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "'App' refers to the Swasthi mobile application available on iOS and Android platforms."
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "'User' refers to any individual accessing or using the App."
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "'Company', 'We', 'Us', and 'Our' refer to the creators and operators of Swasthi."
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "'Content' refers to all materials provided within the App, including but not limited to health calculators, quizzes, tips, text, graphics, logos, and other features."
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "'Subscription' refers to the paid access provided to Users for enhanced features and functionalities."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "2. User Registration and Account",
          "level": 2
        }
      },
      {
        "type": "header",
        "data": {
          "text": "2.1. Eligibility",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "The App is intended for users aged 12 years and above. However, it is recommended for users aged 13 years and above. By using the App, you confirm that you meet this age requirement."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "2.2. Account Creation",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "To access certain features of the App, you must create an account by providing accurate and complete information, including your email (via Google or Apple sign-up), username, height, weight, age, and gender etc."
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. Notify us immediately of any unauthorized use of your account."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "2.3. Account Types",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Basic Account: Free access to general health calculators and features."
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Premium Account: Paid access to enhanced features, such as interactive graphs, detailed progress tracking, and personalised health insights."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "2.4. Restrictions on Use",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Users must not share their account credentials with others or use the App in any unlawful or unauthorized manner, including violating our policies or any applicable laws."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "2.5. User Conduct and Responsibilities",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Users are prohibited from attempting to gain unauthorized access to any part of the App or its systems, using the App to distribute malware or other harmful software, or engaging in data mining, scraping, or any other activity aimed at harvesting data."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "2.6. Content and Intellectual Property Rights",
          "level": 3
        }
      },
      {
        "type": "header",
        "data": {
          "text": "6.1. Ownership of Content",
          "level": 4
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "All content provided within the App, including but not limited to health calculators, quizzes, tips, and other materials, is owned by Swasthi or licensed from third parties. This content is protected by intellectual property laws."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "6.2. Usage Rights",
          "level": 4
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Users may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any content obtained from the App without our prior written consent."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "3. Subscriptions and Payments",
          "level": 2
        }
      },
      {
        "type": "header",
        "data": {
          "text": "3.1. Subscription Terms",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Swasthi offers monthly and annual subscription plans with a 15-day free trial for new users. Subscriptions renew automatically unless cancelled before the end of the current subscription period."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "3.2. Payment Methods",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Payments will be charged to your account at the confirmation of purchase. Recurring payments are processed automatically unless cancelled by the user."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "3.3. Refund Policy",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "All payments are non-refundable, and no refunds will be issued for partial use of the subscription or accidental purchases."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "6.4. Health and Safety Disclaimers",
          "level": 2
        }
      },
      {
        "type": "header",
        "data": {
          "text": "4.1. General Health Disclaimer",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "The Swasthi app provides health calculators and wellness information for general informational purposes only. The App is not intended to diagnose, treat, cure, or prevent any disease or health condition. You should consult with a healthcare professional before making any health-related decisions or changes based on information obtained from the App."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "4.2. Limitation of Liability",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "To the fullest extent permitted by law, Swasthi, its directors, employees, or agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from the use of the App."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "6.5. Data Collection and Use",
          "level": 2
        }
      },
      {
        "type": "header",
        "data": {
          "text": "5.1. Personal Data Collection",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "The App collects personal data such as email, username, height, weight, age, and gender. This data is used to provide personalized health insights and for enhancing the user experience."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "5.2. Data Usage",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "We use the collected data to operate, maintain, and improve the App. We do not share data with any third parties or any other local or international institutions except required in compliance with legal obligations as per the prevailing governing laws."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "5.3. User Rights",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Users have the right to access, correct, and delete their data. For more details, refer to our Privacy Policy and Data Deletion Policy."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "6.6. Third-Party Services",
          "level": 2
        }
      },
      {
        "type": "header",
        "data": {
          "text": "6.1. Integration with Third Parties",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "The App integrates third-party services such as payment gateways and social media platforms. Swasthi is not responsible for any issues arising from the use of these third-party services."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "6.2. Liability for Third-Party Services",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "We do not endorse, warrant, or guarantee any third-party services or content, and you use them at your own risk."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "6.7. Modifications and Updates",
          "level": 2
        }
      },
      {
        "type": "header",
        "data": {
          "text": "7.1. Changes to the Terms",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Swasthi reserves the right to modify or update these Terms and Conditions at any time. Any changes will be communicated through in-app notifications. Continued use of the App after such changes will constitute acceptance of the new terms."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "6.8. Governing Law and Dispute Resolution",
          "level": 2
        }
      },
      {
        "type": "header",
        "data": {
          "text": "8.1. Applicable Law",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "These Terms shall be governed by and construed in accordance with the laws of India and any applicable international laws."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "8.2. Dispute Resolution",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Any disputes arising under or regarding these Terms shall be resolved through arbitration in India or in a competent court of jurisdiction, subject to the provisions of Indian law."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "2.7. Termination",
          "level": 2
        }
      },
      {
        "type": "header",
        "data": {
          "text": "7.1. Termination Rights",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Swasthi reserves the right to terminate or suspend your access to the App without prior notice if you violate these Terms or engage in conduct that we deem harmful or inappropriate."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "7.2. User Obligations Post-Termination",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Upon termination, your access to the App will be revoked, and all your data may be deleted according to our privacy policy."
        }
      },
      
      // {
      //   "type": "header",
      //   "data": {
      //     "text": "2.8. Contact Information"
      //   }
      // },
      // {
      //   "type": "header",
      //   "data": {
      //     "text": "8.1. Contact Us"
      //   }
      // }
    ],
  });

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(
          "https://admin-panel-backend-knoh.onrender.com/api/terms"
        );
        if (!response.ok) throw new Error("Failed to fetch content");

        const data: { content: ContentType } = await response.json();
        setContent(data.content);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };

    fetchContent();
  }, []);

  const renderBlock = (block: BlockType, index: number) => {
    switch (block.type) {
      case "header":
        return (
          <h2
            key={index}
            className="text-lg font-bold underline text-white mb-4"
          >
            {block.data.text}
          </h2>
        );
      case "paragraph":
        return (
          <p key={index} className="text-gray-300 mb-4">
            {renderText(block.data.text)}
          </p>
        );
      case "list":
        return (
          <ol
            key={index}
            className="list-decimal pl-6 text-gray-300 mb-4 space-y-1"
          >
            {block.data.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        );
      default:
        return null;
    }
  };

  const renderText = (text: string | undefined) => {
    if (!text) return null;

    const sanitizedText = text
      .replace(/&nbsp;/g, " ")
      .replace(/<b>/g, "<strong>")
      .replace(/<\/b>/g, "</strong>");
    return <span dangerouslySetInnerHTML={{ __html: sanitizedText }} />;
  };

  return (
    <div className="min-h-screen flex bg-neutral-900 text-white pt-4 pb-4">
      <div className="max-w-7xl mx-auto bg-neutral-900 mt-11 p-11 rounded-lg shadow-lg border border-gray-700">
        <div className="bg-custom-gradient shadow-lg p-6 rounded-lg border border-gray-600">
          {content.blocks.map((block, index) => renderBlock(block, index))}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
