"use client";
import React, { useState, useEffect } from "react";

type BlockType = 
  | { type: "header"; data: { text: string; level: number } }
  | { type: "paragraph"; data: { text: string } }
  | { type: "list"; data: { style: string; items: string[] } };

type ContentType = {
  time: number;
  blocks: BlockType[];
};

const PrivacyPolicy = () => {
  const [content, setContent] = useState<ContentType>({
    time: new Date().getTime(),
    blocks: [
      {
        "type": "header",
        "data": {
          "text": "Privacy Policy for Swasthi",
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
          "text": "At Swasthi, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you use the Swasthi mobile application (\"App\") available on iOS and Android platforms. By using our App, you consent to the practices described in this policy. If you do not agree with this policy, please do not use the App."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "1. Information We Collect",
          "level": 2
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "We collect and process different types of information to provide and improve our services. The types of information we collect include:"
        }
      },
      {
        "type": "header",
        "data": {
          "text": "1.1. Personal Information",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Email Address: Collected during social sign-up (Google or Apple Account) to create and manage your account."
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "User Name: Collected to personalise your experience within the App."
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Height, Weight, Age, and Gender: Collected to provide accurate health and wellness calculations and personalized insights."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "1.2. Automatically Collected Information",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Device Information: Includes device type, operating system, unique device identifiers, and mobile network information."
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Usage Data: Information about how you use the App, such as feature usage, access times, and pages viewed."
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Location Data: Approximate location information, derived from your IP address, for optimising content and service delivery."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "2. How We Use Your Information",
          "level": 2
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "We use the collected information for various purposes, including but not limited to:"
        }
      },
      {
        "type": "header",
        "data": {
          "text": "2.1. Providing and Improving Our Services",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "To create and manage your account, authenticate your identity, and allow access to the App’s features."
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "To provide personalized health calculations, insights, and recommendations."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "2.2. Communication",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "To send you updates, promotional offers, newsletters, and other information."
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "To respond to your inquiries, support requests, and feedback."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "2.3. Analytics and Research",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "To monitor and analyse usage patterns and trends to improve the App’s functionality and user experience."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "2.4. Compliance and Protection",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "To comply with applicable laws, regulations, legal processes, or government requests."
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "To protect the rights, privacy, safety, or property of Swasthi, our users, or others."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "3. How We Share Your Information",
          "level": 2
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "We do not sell, rent, or trade your personal information to third parties. However, we may share your information in the following circumstances:"
        }
      },
      {
        "type": "header",
        "data": {
          "text": "3.1. Legal Obligations",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "We may disclose your information if required by law or in response to valid requests by public authorities (e.g., a court or government agency)."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "3.2. Business Transfers",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that business transaction. We will notify you before your personal information becomes subject to a different privacy policy."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "4. Data Retention",
          "level": 2
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, including legal, accounting, or reporting requirements."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "4.1. Account Information",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Your account information (email, username, height, weight, age, and gender) is retained as long as your account is active or as needed to provide you with our services."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "4.2. Data Deletion",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "You have the right to request the deletion of your data at any time. To delete your data, please contact us at help.swasthi@gmail.com or info@swasthi.fit. Note that some information may be retained for legal compliance or legitimate business purposes."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "5. Your Rights and Choices",
          "level": 2
        }
      },
      {
        "type": "header",
        "data": {
          "text": "5.1. Access and Correction",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "You have the right to access, update, or correct your personal information at any time by accessing your account settings within the App."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "5.2. Data Deletion",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "You can request the deletion of your personal data by contacting us at help.swasthi@gmail.com or info@swasthi.fit. Upon verification, we will delete your data within a 7 days timeframe, unless retention is required by law."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "5.3. Opt-Out",
          "level": 3
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "You can opt-out of receiving promotional communications by following the unsubscribe instructions provided in such emails or by contacting us directly."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "6. Security of Your Information",
          "level": 2
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. These measures include encryption, access controls, and regular security assessments. However, no method of transmission over the Internet or electronic storage is 100% secure. While we use appropriate means to protect your personal information, we cannot guarantee its absolute security."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "7. Children’s Privacy",
          "level": 2
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "The App is not intended for use by children under the age of 12. We do not knowingly collect personal information from children under 12. If we become aware that a child under 12 has provided us with personal information, we will delete such information from our records immediately. If you believe we may have collected information from a child under 12, please contact us at help.swasthi@gmail.com or info@swasthi.fit."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "8. Changes to This Privacy Policy",
          "level": 2
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes via in-app notifications or other means. Your continued use of the App after the effective date of the updated policy will constitute your acceptance of the changes."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "9. Governing Law",
          "level": 2
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "This Privacy Policy shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "10. Contact Us",
          "level": 2
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us at:"
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Email: help.swasthi@gmail.com or info@swasthi.fit"
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Address: 395, Purav Deen Dayal, Old Railway Road, Veer Bhawan Nagar, Roorkee-247667, India"
        }
      }
    ],
  });

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(
          "https://admin-panel-backend-knoh.onrender.com/api/privacy"
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

  const renderText = (text: string | undefined) => {
    if (!text) return null;
    const sanitizedText = text
      .replace(/&nbsp;/g, " ")
      .replace(/<b>/g, "<strong>")
      .replace(/<\/b>/g, "</strong>");
    return <span dangerouslySetInnerHTML={{ __html: sanitizedText }} />;
  };

  return (
    <div className="min-h-screen flex bg-neutral-900 text-white pt-4 pb-4 ">
      <div className="max-w-7xl mx-auto bg-neutral-900  mt-11 p-11 rounded-lg shadow-lg border border-gray-700">
        <div className="bg-custom-gradient shadow-lg shadow-white p-4 rounded-lg border border-gray-600">
          {content.blocks.map((block, index) => {
            switch (block.type) {
              case "header":
                return (
                  <h2 key={index} className="text-lg font-bold text-white mb-2">
                    {block.data.text}
                  </h2>
                );
              case "paragraph":
                return (
                  <p key={index} className="text-gray-300 mb-2">
                    {renderText(block.data.text)}
                  </p>
                );
              case "list":
                return (
                  <ol key={index} className="list-decimal pl-6 text-gray-300 mb-2">
                    {block.data.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ol>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
