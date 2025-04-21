import { Images } from "@/assets";

interface BrandProps {
    id: number;
    image: string;
}

export const BrandItems: BrandProps[] = [
    {
        id: 1,
        image: Images.brand1.src, 
    },
    {
        id: 2,
        image: Images.brand2.src, 
    },
    {
        id: 3,
        image: Images.brand3.src, 
    },
    {
        id: 4,
        image: Images.brand4.src, 
    },
    {
        id: 5,
        image: Images.brand5.src, 
    },
    {
        id: 6,
        image: Images.brand6.src, 
    },
    {
        id: 7,
        image: Images.brand7.src, 
    },
]

