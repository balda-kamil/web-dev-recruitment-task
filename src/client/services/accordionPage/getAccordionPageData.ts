

export const getAccordionPageData = async () => {
    return await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/chatbot-details`);
};
