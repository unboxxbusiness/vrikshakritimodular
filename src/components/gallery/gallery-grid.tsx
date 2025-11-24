"use client";

import Image from 'next/image';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DialogDescription } from '../ui/dialog';

const portfolioImages = [
    {
        id: "hero-main",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763958686/Gemini_Generated_Image_wkk0fiwkk0fiwkk0_zgz3un.png",
        alt: "Modern modular kitchen hero image"
    },
    {
        id: "l-shaped-1",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763960884/Gemini_Generated_Image_wkk0fiwkk0fiwkk0_n3klqn.png",
        alt: "Modern L-shaped kitchen with wooden cabinets and white countertops."
    },
    {
        id: "l-shaped-2",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763960730/Gemini_Generated_Image_e1ffkbe1ffkbe1ff_pvjsyw.png",
        alt: "Sleek L-shaped kitchen with dark cabinets and integrated appliances."
    },
    {
        id: "l-shaped-3",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763960698/Gemini_Generated_Image_yzvwm2yzvwm2yzvw_rk2yfl.png",
        alt: "Bright L-shaped kitchen with large windows and a breakfast bar."
    },
    {
        id: "l-shaped-4",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763960696/Gemini_Generated_Image_21rs4n21rs4n21rs_argad1.png",
        alt: "L-shaped kitchen with two-tone cabinets and modern lighting."
    },
    {
        id: "l-shaped-5",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763960691/Gemini_Generated_Image_2hlhzx2hlhzx2hlh_hvzaup.png",
        alt: "Compact L-shaped kitchen with smart storage solutions."
    },
    {
        id: "u-shaped-1",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763965091/Gemini_Generated_Image_o66q1ko66q1ko66q_l0p5fv.png",
        alt: "Spacious U-shaped kitchen with ample counter space and modern fixtures."
    },
    {
        id: "u-shaped-2",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763965090/Gemini_Generated_Image_b5wlvxb5wlvxb5wl_apdp85.png",
        alt: "Elegant U-shaped kitchen featuring dark cabinets and high-end finishes."
    },
    {
        id: "u-shaped-3",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763965087/Gemini_Generated_Image_r0kjm8r0kjm8r0kj_e3qoak.png",
        alt: "Bright U-shaped kitchen design with white cabinetry and natural light."
    },
    {
        id: "u-shaped-4",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763965080/Gemini_Generated_Image_218wp2218wp2218w_wgatam.png",
        alt: "U-shaped kitchen with a breakfast bar extension for casual dining."
    },
    {
        id: "u-shaped-5",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763965077/Gemini_Generated_Image_bv4jzzbv4jzzbv4j_onmyrd.png",
        alt: "Compact yet efficient U-shaped kitchen layout with smart storage."
    },
    {
        id: "straight-1",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763966182/Gemini_Generated_Image_q5rwz5q5rwz5q5rw_zsltkm.png",
        alt: "Sleek straight kitchen with minimalist white cabinets."
    },
    {
        id: "straight-2",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763966179/Gemini_Generated_Image_jriqjgjriqjgjriq_mdeh53.png",
        alt: "Modern straight kitchen with integrated appliances and a clean look."
    },
    {
        id: "straight-3",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763966177/Gemini_Generated_Image_tuw3a8tuw3a8tuw3_tdoaxi.png",
        alt: "Compact straight kitchen with smart storage solutions."
    },
    {
        id: "straight-4",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763966177/Gemini_Generated_Image_2fszkm2fszkm2fsz_tgnhrl.png",
        alt: "Straight kitchen in a small apartment with efficient use of space."
    },
    {
        id: "parallel-1",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763966705/Gemini_Generated_Image_mi48j4mi48j4mi48_pjs6vj.png",
        alt: "Modern parallel kitchen with dark cabinets and efficient workflow."
    },
    {
        id: "parallel-2",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763966699/Gemini_Generated_Image_4ma67f4ma67f4ma6_iumj83.png",
        alt: "Bright galley kitchen with white cabinets and natural light."
    },
    {
        id: "parallel-3",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763966694/Gemini_Generated_Image_b4xbenb4xbenb4xb_ab4yev.png",
        alt: "Parallel kitchen with integrated appliances and ample counter space."
    },
    {
        id: "parallel-4",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763966691/Gemini_Generated_Image_tj4lg7tj4lg7tj4l_stvjv2.png",
        alt: "A sleek parallel kitchen with handleless cabinets and a minimalist aesthetic."
    },
    {
        id: "parallel-5",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763966688/Gemini_Generated_Image_iuzm0yiuzm0yiuzm_dkhopt.png",
        alt: "A compact and functional parallel kitchen in a modern apartment."
    },
    {
        id: "island-1",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763967233/Gemini_Generated_Image_vhw6qjvhw6qjvhw6_buh9fc.png",
        alt: "Luxurious island kitchen with marble countertops and modern lighting."
    },
    {
        id: "island-2",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763967225/Gemini_Generated_Image_91eopq91eopq91eo_vq1zdd.png",
        alt: "Island kitchen with integrated seating and stylish pendant lights."
    },
    {
        id: "island-3",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763967224/Gemini_Generated_Image_hk6xrihk6xrihk6x_c6lhdc.png",
        alt: "Spacious island kitchen with a waterfall countertop and bar stools."
    },
    {
        id: "island-4",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763967202/Gemini_Generated_Image_fxg9n0fxg9n0fxg9_shc2ot.png",
        alt: "Minimalist island kitchen with sleek white cabinets and wooden accents."
    },
    {
        id: "semi-modular-1",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763967742/Gemini_Generated_Image_ue1z4iue1z4iue1z_mlstg1.png",
        alt: "A stunning semi-modular kitchen renovation."
    },
    {
        id: "semi-modular-2",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763967741/Gemini_Generated_Image_auoe14auoe14auoe_ahukwa.png",
        alt: "Before and after view of a kitchen makeover."
    },
    {
        id: "semi-modular-3",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763967736/Gemini_Generated_Image_f5aketf5aketf5ak_s1u6m0.png",
        alt: "Upgraded kitchen with new shutters and modern hardware."
    },
    {
        id: "semi-modular-4",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763967724/Gemini_Generated_Image_uihxk7uihxk7uihx_ne2eue.png",
        alt: "A stylish and functional semi-modular kitchen."
    },
    {
        id: "materials-1",
        src: "https://res.cloudinary.com/dhrigocvd/image/upload/v1763967907/Gemini_Generated_Image_1xyngx1xyngx1xyn_kighud.png",
        alt: "A flat lay of various material samples including wood, marble, and fabric."
    }
];

export function GalleryGrid() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {portfolioImages.map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <div className="relative overflow-hidden rounded-lg cursor-pointer group">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                   <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0">
                <DialogTitle className="sr-only">{image.alt}</DialogTitle>
                <DialogDescription className="sr-only">
                    Enlarged view of {image.alt}
                </DialogDescription>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
