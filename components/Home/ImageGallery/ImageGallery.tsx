'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";

const images = [
    '/images/gallery1.png',
    '/images/gallery2.png',
    '/images/gallery3.png',
];

export default function ImageGallery() {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="flex flex-col lg:flex-row gap-4 mt-[42px] rounded-lg">
            {/* Thumbnails on the left */}
            <div className="flex lg:flex-col gap-3 justify-center">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedImage(img)}
                        className={`border-2 rounded-md overflow-hidden w-16 transition-all duration-200 ${
                            selectedImage === img ? 'border-gray-600 scale-110' : 'border-gray-300'
                        }`}
                    >
                        <Image src={img} alt="Thumbnail" width={100} height={100} className="h-full" />
                    </button>
                ))}
            </div>

            {/* Main Image on the right */}
            <motion.div
                key={selectedImage} // Forces Framer Motion to animate on change
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.6 }}
            >
                <Image
                    src={selectedImage}
                    alt="Main"
                    width={1200}
                    height={680}
                    className="rounded-xl"
                />
            </motion.div>
        </div>
    );
}
