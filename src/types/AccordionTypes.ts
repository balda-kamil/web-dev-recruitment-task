export interface AccordionPageTypes {
    data: {
        header: string;
        description: string;
        widget: WidgetInterface[];
    };
}

export interface WidgetInterface {
    id: number;
    title: string;
    description: string;
    icon: string;
    image: AccordionItemImage;
}

interface AccordionItemImage {
    alt: string;
    small: ImageInterface;
    large: ImageInterface;
}

interface ImageInterface {
    url: string;
    width: number;
    height: number;
}
