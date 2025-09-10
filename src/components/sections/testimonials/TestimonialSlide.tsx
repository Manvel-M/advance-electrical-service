import Slider, { type Settings } from "react-slick";
type Testimonials = {
  quote: string;
  author: string;
  initials: string;
}[];

function TestimonialSlide({ testimonials }: { testimonials: Testimonials }) {
  const testimonialSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-surface text-surface-foreground rounded-lg p-10 min-h-[300px] flex items-center">
      <Slider {...testimonialSettings} className="h-full w-full">
        {testimonials.map((testimonial) => (
          <div
            className="min-w-full px-4 text-center text-lg italic md:px-8 lg:px-16 flex flex-col justify-between"
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
      </Slider>
    </div>
  );
}

export default TestimonialSlide;
