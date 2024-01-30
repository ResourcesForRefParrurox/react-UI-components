import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "Can i use react on a project?",
      content: "ye lorem ipsum dolor sit amet",
    },
    {
      id: 2,
      label: "can i use css?",
      content: "lorem ipsum dolor sit amet nope",
    },
    {
      id: 3,
      label: "should i use JS?",
      content: "lorem ipsum dolor sit amet use TS",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
