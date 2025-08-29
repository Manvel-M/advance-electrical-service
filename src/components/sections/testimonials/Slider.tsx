import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
type Testimonials = {
  quote: string;
  author: string;
  initials: string;
}[];

function Slider({ testimonials }: { testimonials: Testimonials }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="bg-surface text-surface-foreground rounded-lg p-10 min-h-[300px] flex items-center">
      <div ref={emblaRef} className="embla overflow-hidden h-full">
        <div className="embla__container flex">
          {testimonials.map((testimonial) => (
            <div
              className="embla__slide min-w-full px-4 text-center text-lg italic md:px-8 lg:px-16 flex flex-col justify-between"
              key={testimonial.author}
            >
              <p className="mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="text-xl border-primary border-4 rounded-full w-12 h-12 mx-auto flex items-center justify-center mt-2">
                  {testimonial.initials}
                </p>
                <p className="font-semibold">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
