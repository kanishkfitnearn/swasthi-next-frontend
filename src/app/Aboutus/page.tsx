"use client";

import React, { useState, useEffect } from "react";

const AboutUs = () => {
  const [content, setContent] = useState<Content>({
    time: new Date().getTime(),
    blocks: [
      {
        "type": "header",
        "data": {
            "text": "About Us",
            "level": 1
        }
    },
    {
        "type": "header",
        "data": {
            "text": "1. Welcome to Swasthi!",
            "level": 2
        }
    },
    {
        "type": "paragraph",
        "data": {
            "text": "At Swasthi, we believe that wellness should be accessible to everyone, everywhere. As a comprehensive global health application, Swasthi is designed to empower individuals to take charge of their wellness through a variety of interactive tools, resources, and personalized insights."
        }
    },
    {
        "type": "header",
        "data": {
            "text": "2. Who We Are",
            "level": 2
        }
    },
    {
        "type": "paragraph",
        "data": {
            "text": "Swasthi is a product of Fit Earn Meditate, a pioneer in the digital health and wellness space dedicated to making fitness and healthy living a rewarding experience for all. Fit Earn Meditate strives to create innovative solutions that inspire and empower individuals to lead healthier lives through practical and engaging digital tools."
        }
    },
    {
        "type": "header",
        "data": {
            "text": "3. Our Vision",
            "level": 2
        }
    },
    {
        "type": "paragraph",
        "data": {
            "text": "Our vision is to create a healthier world by making essential health information and tools available to all, regardless of age, location, or background. We aim to foster a proactive approach to health management, where users can easily monitor their wellness and make informed decisions to improve their quality of life."
        }
    },
    {
        "type": "header",
        "data": {
            "text": "4. What We Offer",
            "level": 2
        }
    },
    {
        "type": "paragraph",
        "data": {
            "text": "Swasthi serves as a digital health assistant, providing a wide array of health calculators and tools that cater to users’ unique health and wellness needs."
        }
    },
    {
        "type": "header",
        "data": {
            "text": "Health Calculators:",
            "level": 3
        }
    },
    {
        "type": "paragraph",
        "data": {
            "text": "Access a diverse range of health calculators such as Body Mass Index (BMI), Basal Metabolic Rate (BMR), Calorie Burn, Water Requirement, Mood Management, Body Fat Percentage, Total Daily Energy Expenditure (TDEE), Healthy Blood and Water Volume, and Blood Alcohol Concentration. These tools are available in multiple languages to ensure accessibility and ease of use for a global audience."
        }
    },
    {
        "type": "header",
        "data": {
            "text": "Personalized Insights:",
            "level": 3
        }
    },
    {
        "type": "paragraph",
        "data": {
            "text": "Our premium membership unlocks enhanced features, including interactive graphs and detailed progress tracking, to provide users with deeper insights into their health data over time."
        }
    },
    {
        "type": "header",
        "data": {
            "text": "Daily Engagement Tools:",
            "level": 3
        }
    },
    {
        "type": "paragraph",
        "data": {
            "text": "Stay motivated with daily health goals, quizzes, and motivational health tip cards. Set reminders and create customized health routines to foster regular, healthy habits."
        }
    },
    {
        "type": "header",
        "data": {
            "text": "User-Friendly Experience:",
            "level": 3
        }
    },
    {
        "type": "paragraph",
        "data": {
            "text": "Enjoy a customizable user experience with features like theme changes (dark and light modes) and multiple language options, ensuring comfort and accessibility for all users."
        }
    },
    {
        "type": "header",
        "data": {
            "text": "5. Our Mission",
            "level": 2
        }
    },
    {
        "type": "paragraph",
        "data": {
            "text": "Swasthi’s mission is to reduce lifestyle-related health issues on a global scale by making health monitoring tools simple, accessible, and engaging. We strive to educate and inspire individuals to lead healthier, more active lives through innovative digital solutions."
        }
    },
    {
        "type": "header",
        "data": {
            "text": "6. Why Choose Swasthi?",
            "level": 2
        }
    },
    {
        "type": "paragraph",
        "data": {
            "text": "Global Reach: With multilingual support and a user-friendly interface, Swasthi is designed to be a truly global health companion, accessible to anyone, anywhere."
        }
    },
    {
        "type": "paragraph",
        "data": {
            "text": "Comprehensive Tools: From basic health metrics to advanced progress tracking, our app provides a holistic set of tools to help you understand and improve your health."
        }
    },
    {
        "type": "header",
        "data": {
            "text": "7. Join Us",
            "level": 2
        }
    },
    {
        "type": "paragraph",
        "data": {
            "text": "At Swasthi, we are committed to transforming health and wellness through technology. Join us in creating a healthier, more informed world by downloading the Swasthi app today and starting your journey towards better health."
        }
    },
    {
        "type": "header",
        "data": {
            "text": "8. Contact Us",
            "level": 2
        }
    },
    {
        "type": "paragraph",
        "data": {
            "text": "We value your feedback and are here to help. If you have any questions, concerns, or suggestions, please reach out to us at:"
        }
    },
    {
        "type": "paragraph",
        "data": {
            "text": "Email: help.swasthi@gmail.com or info@swasthi.fit"
        }
    }
    ],
  });

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(
          "https://admin-panel-backend-knoh.onrender.com/api/aboutus"
        );
        const data = await response.json();
        if (response.ok) {
          setContent(data.content);
        }
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };
    fetchContent();
  }, []);

  interface Block {
    type: "header" | "paragraph" | "list";
    data: {
      text?: string;
      level?: number;
      style?: string;
      items?: string[];
    };
  }

  interface Content {
    time: number;
    blocks: Block[];
  }

  const renderText = (text: string | undefined) => {
    if (typeof text !== "string") return null;
    text = text
      .replace(/&nbsp;/g, " ")
      .replace(/<b>/g, "<strong>")
      .replace(/<\/b>/g, "</strong>");
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  return (
    <div className="min-h-screen flex bg-black text-white pt-4 pb-4 ">
      <div className="max-w-7xl mx-auto bg-black  mt-11 p-11 rounded-lg shadow-lg border border-gray-700">
        <div className="bg-custom-gradient  p-4 rounded-lg border border-gray-600 shadow-lg shadow-white">

            {content.blocks.map((block: Block, index: number) => {
            switch (block.type) {
              case "header":
                return (
                  <h2
                    key={index}
                    className="text-lg underline font-bold text-white mb-2"
                  >
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

export default AboutUs;
