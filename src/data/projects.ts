import sumit from '@/assets/sumit.png';
import rajesh from '@/assets/rajesh.jpg';
import fahem from '@/assets/fahem.jpg';
import arpit from '@/assets/arpit.jpg';
import taiken from '@/assets/Taiken/Taiken 08.png';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

// Sumit Photos
import sumit1 from '@/assets/sumit/Photos/BAUHAUS PHOTOS 05.png';
import sumit2 from '@/assets/sumit/Photos/BAUHAUS PHOTOS 09.png';
import sumit3 from '@/assets/sumit/Photos/BAUHAUS PHOTOS 13.png';
import sumit4 from '@/assets/sumit/Photos/BAUHAUS PHOTOS 19.png';
import sumit5 from '@/assets/sumit/Photos/BAUHAUS PHOTOS 27.png';
import sumit6 from '@/assets/sumit/Photos/BAUHAUS PHOTOS 28.png';
import sumit7 from '@/assets/sumit/Photos/BAUHAUS PHOTOS 29.png';
import sumit8 from '@/assets/sumit/Photos/BAUHAUS PHOTOS 35.png';

// Rajesh Photos
import rajesh1 from '@/assets/Rajesh/Photos/PRA00001_2_3_4_5.jpg';
import rajesh2 from '@/assets/Rajesh/Photos/PRA00006_07_08_09_10.jpg';
import rajesh3 from '@/assets/Rajesh/Photos/PRA00011_2_3_4_5.jpg';
import rajesh4 from '@/assets/Rajesh/Photos/PRA00016_17_18_19_20.jpg';
import rajesh5 from '@/assets/Rajesh/Photos/PRA00021_2_3_4_5.jpg';
import rajesh6 from '@/assets/Rajesh/Photos/PRA00026_27_28_29_30.jpg';
import rajesh7 from '@/assets/Rajesh/Photos/PRA00031_2_3_4_5.jpg';
import rajesh8 from '@/assets/Rajesh/Photos/PRA00041_2_3_4_5.jpg';

// Faheem Photos
import faheem1 from '@/assets/Faheem/photos/PRA00763_4_5.jpg';
import faheem2 from '@/assets/Faheem/photos/PRA00766_7_8.jpg';
import faheem3 from '@/assets/Faheem/photos/PRA00772_3_4.jpg';
import faheem4 from '@/assets/Faheem/photos/PRA00778_79_80.jpg';


// Taiken Photos

import taiken1 from '@/assets/Taiken/Taiken 01.png';
import taiken2 from '@/assets/Taiken/Taiken 02.png';
import taiken3 from '@/assets/Taiken/Taiken 03.png';
import taiken4 from '@/assets/Taiken/Taiken 04.png';
import taiken5 from '@/assets/Taiken/Taiken 05.png';
import taiken6 from '@/assets/Taiken/Taiken 08.png';
import taiken7 from '@/assets/Taiken/Taiken 13.png';
import taiken8 from '@/assets/Taiken/Taiken 14.png';


export interface Project {
    id: string;
    title: string;
    client: string;
    location: string;
    image: string;
    description: string;
    type: 'residential' | 'commercial';
    gallery: string[];
}

export const projects: Project[] = [
    {
        id: 'elegant-home-interior',
        title: 'Elegant Home Interior',
        client: 'Sumit Oswal',
        location: 'Pune',
        image: sumit,
        description: 'An elegant residential interior designed for Sumit Oswal, featuring premium materials and a sophisticated design language that reflects modern luxury and personalized comfort.',
        type: 'residential',
        gallery: [sumit1, sumit2, sumit3, sumit4, sumit5, sumit6, sumit7, sumit8],
    },
    {
        id: 'modern-luxury-apartment',
        title: 'Modern Luxury Apartment',
        client: 'Rajesh Mohapatra',
        location: 'Pune',
        image: rajesh,
        description: 'A modern residential project designed for Rajesh Mohapatra, focusing on functionality and aesthetic appeal with high-quality finishes and bespoke furniture tailored for urban living.',
        type: 'residential',
        gallery: [rajesh1, rajesh2, rajesh3, rajesh4, rajesh5, rajesh6, rajesh7, rajesh8],
    },
    {
        id: 'contemporary-luxury-villa',
        title: 'Contemporary Luxury Villa',
        client: 'Faheem Shaikh',
        location: 'Kalyani Nagar, Pune',
        image: fahem,
        description: 'A contemporary residential villa interior designed for Faheem Shaikh, seamlessly blending modern aesthetics with traditional comfort through elegant layouts and premium finishes.',
        type: 'residential',
        gallery: [faheem1, faheem2, faheem3, faheem4],
    },
    {
        id: 'minimalist-studio-apartment',
        title: 'Minimalist Studio Apartment',
        client: 'Arpit',
        location: 'Aundh, Pune',
        image: arpit,
        description: 'A compact studio apartment designed with a focus on smart usage of space. The interior features multi-functional furniture and a light color palette, creating a spacious feel.',
        type: 'residential',
        gallery: [arpit, sumit, fahem, rajesh],
    },
    {
        id: 'taiken-pan-asian',
        title: 'Taiken The Pan Asian',
        client: 'Taiken',
        location: 'Kharadi, Pune',
        image: taiken,
        description: 'A bold and atmospheric interior design for a Pan Asian restaurant in Kharadi, Pune. The space blends traditional Asian aesthetics with modern industrial elements, creating an immersive dining experience.',
        type: 'commercial',
        gallery: [taiken1, taiken2, taiken3, taiken4, taiken5, taiken6, taiken7, taiken8],
    },
    {
        id: 'corporate-workspace',
        title: 'Corporate Workspace',
        client: 'Modular Office Solutions',
        location: 'Hinjewadi, Pune',
        image: project2,
        description: 'A modern commercial interior designed as an open-plan office that fosters collaboration and productivity. The workspace combines functional layouts, contemporary design elements, and premium finishes.',
        type: 'commercial',
        gallery: [project2, taiken, project3, sumit, rajesh],
    },
];
