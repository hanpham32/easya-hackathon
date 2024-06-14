import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQsList() {
  const faqsList = [
    {
      q: "What are some random questions to ask?",
      a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
    },
    {
      q: "Do you include common questions?",
      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
    },
    {
      q: "Can I use this for 21 questions?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: "Are these questions for girls or for boys?",
      a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
    },
    {
      q: "What do you wish you had more talent doing?",
      a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-sm mx-auto px-4 md-px-8">
        <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
          <h3 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
            FAQ
          </h3>
        </div>
        <div className="mt-12">
          <Accordion type="single" collapsible>
            {faqsList.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border-b border-gray-200"
              >
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
