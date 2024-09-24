import testimonialsJson from '../../../data/testimonials.json'
import './Testimonials.scss'

type testimonial = {
    name: string;
    role: string;
    quote: string;
    img: string;
}

const testimonials: testimonial[] = testimonialsJson;

export default function Testimonials() {

    return (
        <section className="testimonials">
            <h2 className='testimonials__header'>CLIENT TESTIMONIALS</h2>

            <div className="testimonials__grid">
                {testimonials.map((testimonial) => (
                    <article className="testimonials__testimonial">
                        <img className='testimonials__profile-img' src={`/images/${testimonial.img}`} alt=""/>
                        
                        <p className='testimonials__quote'>{testimonial.quote}</p>
                        
                        <div className='testimonials__testimonial-user'>
                            <h3 className='testimonials__testimonial-user-name'>{testimonial.name}</h3>
                            <p className='testimonials__testimonial-role'>{testimonial.role}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}