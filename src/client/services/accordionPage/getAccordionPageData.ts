export const getAccordionPageData = async () => {
    return await fetch(`${process.env.NEXT_PUBLIC_URL}/api/chatbot-details`);
};
