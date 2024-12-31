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

const ReturnAndRefund = () => {
  const [content, setContent] = useState<ContentType>({
    time: new Date().getTime(),
    blocks: [
      {
        "type": "header",
        "data": {
          "text": "Return and Refund Policy for Swasthi",
          "level": 1
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Effective Date: 09.11.2024"
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Thank you for choosing Swasthi. This policy outlines our terms regarding returns, refunds, and cancellations of subscriptions. By subscribing to Swasthi’s services, you agree to this policy in full."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "1. No Refunds, Cancellations, or Returns",
          "level": 2
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "All subscriptions to Swasthi’s services are final, and we do not offer refunds, cancellations, or returns for any subscriptions under any circumstances. This policy applies to all subscription types, including monthly, quarterly, and yearly plans."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "2. Exception for Technical Activation Issues",
          "level": 2
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "In cases where a payment has been successfully processed, but the subscription is not activated due to a technical issue, we will work with you to resolve the problem. For such cases, please contact us via email at help.swasthi@gmail.com or info@swasthi.fit. Our team will investigate the issue, and if confirmed, we will either activate your subscription or offer a refund if activation cannot be completed."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "3. Contact Information for Support",
          "level": 2
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "If you experience technical issues related to your subscription activation, please reach out to our support team with the following details:"
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Full Name"
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Registered Email Address"
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Transaction Reference Number"
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Description of the issue"
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "You can contact us via:"
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Email: help.swasthi@gmail.com"
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Email: info@swasthi.fit"
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Our support team will respond within 48 hours to assist with your request."
        }
      }
    ],
  });

  // Fetch dynamic content from the backend
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(
          "https://admin-panel-backend-knoh.onrender.com/api/return"
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

  // Function to render text with sanitization
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
                  <ol
                    key={index}
                    className="list-decimal pl-6 text-gray-300 mb-2"
                  >
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

export default ReturnAndRefund;
