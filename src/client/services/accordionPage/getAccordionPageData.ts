export const getAccordionPageData = async () => {
    return await fetch(`http://localhost:3000/api/chatbot-details`);
};
