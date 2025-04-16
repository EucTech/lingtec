import { Images } from "@/assets";
import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#F9F8FE]">
    <div className="w-full flex lg:flex-row flex-col items-center lg:items-start justify-center gap-10 lg:gap-20 bg-[#F9F8FE] py-10 px-5 md:px-10 lg:px-20 xl:px-30 2xl:px-40">
      <div className="w-full lg:w-[60%] flex flex-col items-start">
        <h1 className="w-full lg:w-[70%] text-[30px] md:text-[40px] font-[700] font-sf tracking-tight">
          Frequently asked <span className="text-tpurple">Questions</span>
        </h1>

        <div className="w-full font-sf">
          <Accordion
            type="single"
            defaultValue="item-1"
            collapsible
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[#0D0D0D] font-[500] text-[15px]">
                What types of data annotation do you offer?
              </AccordionTrigger>
              <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
                We handle a wide range of data annotation needs, from simple
                image tagging and bounding boxes for computer vision to complex
                sentiment analysis for natural language processing and
                everything in between. We tailor our services to your specific
                project requirements, ensuring high-quality, accurate
                annotations that fuel your AI models. Tell us about your data,
                and we&apos;ll find the perfect annotation solution.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-[#0D0D0D] font-[500] text-[15px]">
                I have a great idea for an AI application but I don&apos;t know where
                to start with model training. Can you help?
              </AccordionTrigger>
              <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
                Absolutely! We specialise in guiding clients through the entire
                AI model training and development lifecycle. From initial data
                assessment and model selection to training, validation, and
                deployment, we provide expert support at every step. We&apos;ll
                help you bring your AI vision to life, even if you&apos;re
                starting from
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-[#0D0D0D] font-[500] text-[15px]">
                My project requires translation and localization for multiple
                languages. Do you offer professional language services?
              </AccordionTrigger>
              <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
                Absolutely! We specialise in guiding clients through the entire
                AI model training and development lifecycle. From initial data
                assessment and model selection to training, validation, and
                deployment, we provide expert support at every step. We&apos;ll
                help you bring your AI vision to life, even if you&apos;re
                starting from
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-[#0D0D0D] font-[500] text-[15px]">
                How do I get started with your services?
              </AccordionTrigger>
              <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
                Absolutely! We specialise in guiding clients through the entire
                AI model training and development lifecycle. From initial data
                assessment and model selection to training, validation, and
                deployment, we provide expert support at every step. We&apos;ll
                help you bring your AI vision to life, even if you&apos;re
                starting from
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <Image
        src={Images.faqs}
        alt="faqs image"
        width={1000}
        height={1000}
        className="w-[400px]"
      />
    </div>
    <Image
        src={Images.manycolorbg}
        alt="faqs image"
        width={1000}
        height={1000}
        className="w-full"
      />
    </div>
  );
};

export default FAQs;
