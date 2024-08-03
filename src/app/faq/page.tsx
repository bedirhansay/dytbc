import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FAQ } from '@/constant/faq';

export default function Page() {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        {FAQ.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
