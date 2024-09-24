import Header from "../../components/Header/Header.tsx";
import Hero from "./Hero/Hero.tsx";
import Feature from "./Features/Feature.tsx";
import Testimonials from "./Testimonials/Testimonials.tsx";
import Footer from "../../components/Footer/Footer.tsx";

export default function Home() {
    return (
        <div>
            <Header/>

            <main>
                <Hero/>
                <Feature/>
                <Testimonials/>
            </main>

            <Footer/>
        </div>
    )
}