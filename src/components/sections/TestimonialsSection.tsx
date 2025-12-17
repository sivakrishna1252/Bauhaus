import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "They turned our 2 BHK into an elegant space to live in. Loved the colour combination and minimalism. There were some hiccups but in the end the results speak for themselves.",
    author: "Mr. Rajkiran & Trupti",
    location: "Pune",
  },
  {
    quote: "The Bauhaus Team transformed our home beautifully, blending creativity with practicality. Shrey and Prachi were professional, attentive, and delivered on time and within budget.",
    author: "Mr. Upendra & Janhavi",
    location: "Pune",
  },
  {
    quote: "The Bauhaus Team transformed our home beautifully, blending creativity with practicality. Shrey and Prachi were professional, attentive, and delivered on time and within budget. Highly recommend!",
    author: "Mrs. Akiriti & Ritin",
    location: "Pune",
  },
  {
    quote: "Bauhaus Spaces impresses with innovative designs and excellent customer service. Their attention to detail is evident in project, and they truly listen to clients'. I highly recommend them.",
    author: "Mr. Jay Nandgaonkar",
    location: "Pune",
  },
  {
    quote: "It was a wonderful experience working with Shilpi. We were in a hurry to shift to the new home and had strict timelines and she made sure all the work was completed on time. Classy and minimal! ",
    author: "Mrs. Dhruva Gandhi",
    location: "Pune",
  },
  {
    quote: "The quality of the workmanship was exceptional, and the attention to detail was impressive. I love the custom furniture pieces and the clever use of space.",
    author: "Mr. Sushant Rana",
    location: "Pune",
  },
  {
    quote: "Bauhaus Spaces exceeded our expectations, turning our vision into something magical. Huge thanks to Shilpi, Sakshi, and Snehal for their dedication and creativity. Highly recommend",
    author: "Mr. Sachendra",
    location: "Pune",
  },
  {
    quote: "Bauhaus Spaces exceeded our expectations, turning our vision into something magical. Huge thanks to Shilpi, Sakshi, and Snehal for their dedication. Despite working remotely, they delivered perfection.",
    author: "Mr. Neeraj Ojha",
    location: "Pune",
  },
];

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Autoplay functionality
  useEffect(() => {
    if (!api) return;

    let intervalId: NodeJS.Timeout;

    const startAutoplay = () => {
      intervalId = setInterval(() => {
        api.scrollNext();
      }, 4000); // Slide every 4 seconds
    };

    const stopAutoplay = () => {
      clearInterval(intervalId);
    };

    startAutoplay(); // Start autoplay on mount

    // Pause on hover
    const carouselElement = api.rootNode();
    if (carouselElement) {
      carouselElement.addEventListener('mouseenter', stopAutoplay);
      carouselElement.addEventListener('mouseleave', startAutoplay);
    }

    return () => {
      stopAutoplay(); // Clear interval on unmount
      if (carouselElement) {
        carouselElement.removeEventListener('mouseenter', stopAutoplay);
        carouselElement.removeEventListener('mouseleave', startAutoplay);
      }
    };
  }, [api]);

  return (
    <section className="section-padding bg-charcoal" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <div className={cn(
          "text-center max-w-2xl mx-auto mb-20 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <p className="text-gold text-sm tracking-[0.4em] uppercase mb-6">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-background">
            What Our Clients Say
          </h2>
          <div className={cn(
            "w-16 h-px bg-gold mx-auto mt-6 transition-transform duration-1000 origin-center",
            isVisible ? "scale-x-100" : "scale-x-0"
          )} style={{ transitionDelay: '200ms' }} />
        </div>

        {/* Testimonials Carousel */}
        <div className={cn(
          "transition-all duration-1000 delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6 select-none cursor-grab active:cursor-grabbing">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="relative p-10 lg:p-12 border border-background/10 card-hover h-full flex flex-col">
                    <Quote className="w-10 h-10 text-gold/30 mb-8 flex-shrink-0" />
                    <div className="flex-grow">
                      <p className="text-background/85 text-lg leading-relaxed mb-8 italic font-serif line-clamp-6">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div>
                      <p className="text-background font-medium text-lg text-gold">{testimonial.author}</p>
                      <p className="text-background/50 text-sm mt-1">{testimonial.location}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-12">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    current === index + 1
                      ? "w-8 bg-gold"
                      : "w-1.5 bg-gold/20 hover:bg-gold/40"
                  )}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}