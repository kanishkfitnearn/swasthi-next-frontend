"use client";
import React, { useState, useEffect } from "react";

const ReturnAndRefund = () => {
  const [content, setContent] = useState<any>({
    time: new Date().getTime(),
    blocks: [
      {
        type: "header",
        data: { text: "Data Deletion Policy for Swasthi", level: 2 },
      },
      { type: "paragraph", data: { text: "Last Updated: 03-09-2024" } },
      {
        type: "paragraph",
        data: {
          text: `At Swasthi, we are committed to ensuring that our users have control over their personal data...`,
        },
      },
      {
        type: "list",
        data: {
          style: "ordered",
          items: [
            "Right to Deletion.",
            "Request for Deletion.",
            "Timeline for Deletion.",
            "Consequences of Deletion.",
            "Exceptions to Data Deletion.",
            "Changes to This Policy.",
          ],
        },
      },
      {
        type: "paragraph",
        data: {
          text: "For any questions, concerns, or requests, contact us at help@swasthi.com.",
        },
      },
    ],
  });

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(
          "https://admin-panel-backend-knoh.onrender.com/api/return"
        );
        const data = await response.json();
        if (response.ok) setContent(data.content);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };
    fetchContent();
  }, []);

  const renderText = (text: string | undefined) => {
    if (typeof text !== "string") return null;
    text = text
      .replace(/&nbsp;/g, " ")
      .replace(/<b>/g, "<strong>")
      .replace(/<\/b>/g, "</strong>");
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  return (
    <div className="min-h-screen flex bg-neutral-900 text-white pt-4 pb-4 ">
      <div className="max-w-7xl mx-auto bg-neutral-900  mt-11 p-11 rounded-lg shadow-lg border border-gray-700">
        <div className="bg-custom-gradient shadow-lg shadow-white p-4 rounded-lg border border-gray-600">
          {content.blocks.map((block: any, index: number) => {
            switch (block.type) {
              case "header":
                return (
                  <h2 key={index} className="text-lg font-bold text-white mb-2">
                    {block.data?.text}
                  </h2>
                );
              case "paragraph":
                return (
                  <p key={index} className="text-gray-300 mb-2">
                    {renderText(block.data?.text)}
                  </p>
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
