import React from "react";
import AboutUsAccordian from "../../Components/Accordians/AboutUsAccordian";
import AboutUsCeo from "../../Components/Single Component/AboutUsCeo";
import AboutUsCarausal from "../../Components/Carausal/AboutUsCarausal";
import Button from "../../Components/Buttons/Button1";
import Recognitions from "../../Components/Recognitions/Recognitions";



export default function AboutUsPage() {

    const certiData = [
        {
            name: 'Web Development Bootcamp',
            image: 'https://images.pexels.com/photos/1792617/pexels-photo-1792617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            name: 'React.js Advanced Training',
            image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name: 'JavaScript Mastery',
            image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name: 'Responsive UI Design',
            image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name: 'Full Stack Development',
            image: 'https://images.pexels.com/photos/1792617/pexels-photo-1792617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            name: 'Node.js Backend Essentials',
            image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
    ];


    return (
        <section aria-labelledby="about-us-heading ">
        <header
    className="relative w-full h-[70dvh] flex items-center justify-center text-center text-[var(--var-text-col)]"
    aria-labelledby="about-us-heading"
>
    {/* Video Background */}
    <video
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        src="https://cdn.pixabay.com/video/2024/04/04/206895_large.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Brick wall background video"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/30 bg-opacity-50 z-0"></div>

    {/* Heading Content */}
    <h1
        id="about-us-heading"
        className="relative z-10 text-4xl md:text-5xl font-extrabold"
    >
        About Us
    </h1>
</header>




            <section
                className="flex items-center flex-col px-4 py-8 text-center sm:text-left"
                aria-labelledby="experience-heading"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 items-center max-w-4xl w-full">
                    {/* Image + Label */}
                    <div className="flex flex-col justify-center items-center gap-8 text-center">
                        <img
                            src="https://res.cloudinary.com/dy6a2ncau/image/upload/v1747309270/25yrs_r6gidj.png"
                            alt="25 Years of Brick Manufacturing Experience"
                            className="h-40 object-contain"
                        />
                        <span
                            id="experience-heading"
                            className="font-semibold text-lg text-[var(--var-red-col)]"
                        >
                            Years of Experience
                        </span>
                    </div>


                    {/* Description */}
                    <div>
                        <p className="text-black/90 text-sm sm:text-base text-justify leading-relaxed">
                            With over 25 years of experience, we’ve built a trusted name in quality
                            brick manufacturing. Our bricks have stood strong in homes, schools, and
                            major infrastructure projects. Rooted in craftsmanship and driven by
                            innovation, we ensure lasting durability. We continuously refine our
                            methods and embrace eco-friendly practices. More than just bricks, we
                            create foundations for long-term success.
                        </p>
                    </div>
                </div>
            </section>

            <div className="flex flex-col items-center w-full gap-2">

                {/* About us Accordian */}
                <AboutUsAccordian />

                {/* Ceo Voice Here */}
                <AboutUsCeo />
            </div>

            <div ></div>
            {/* Milestone Grid */}

            <section className="grid grid-cols-1 gap-2 px-4 py-3">
                <div
                    className="relative h-56 sm:h-64 rounded-md w-full overflow-hidden"
                    style={{
                        backgroundImage: `url('https://images.pexels.com/photos/32037884/pexels-photo-32037884/free-photo-of-airplane-silhouette-against-sunset-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-center">
                        <span className="font-semibold text-xl text-white">
                            200 Tonnes / Day <br />
                            <span className="font-semibold text-xs">of firing capacity</span>
                        </span>
                    </div>
                </div>

                <div className="h-20 sm:h-40 w-full grid grid-cols-2 gap-2">
                    <div
                        key={""}
                        className="relative h-20 sm:h-40 w-full overflow-hidden"
                        style={{
                            backgroundImage: `url('https://images.pexels.com/photos/32037884/pexels-photo-32037884/free-photo-of-airplane-silhouette-against-sunset-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="absolute rounded-md inset-0 bg-black/70 flex items-center justify-center text-center">
                            <span className="font-semibold text-white">
                                6 Lakh sq. feet<br />
                                <span className="font-semibold text-xs">
                                    of manufacturing facility</span>
                            </span>
                        </div>
                    </div>
                    <div
                        key={""}
                        className="relative rounded-md h-20 sm:h-40 w-full overflow-hidden"
                        style={{
                            backgroundImage: `url('https://images.pexels.com/photos/32037884/pexels-photo-32037884/free-photo-of-airplane-silhouette-against-sunset-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-center">
                            <span className="font-semibold text-white">
                                2500+ <br />
                                <span className="font-semibold text-xs">Projects Served</span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Media Coverage & Partnership */}
            <div className="flex flex-col gap-3 items-center mb-1">
                <span className="text-[var(--var-red-col)] mt-4 sm:text-4xl text-2xl font-semibold">Media Coverage & Partnership</span>
                <AboutUsCarausal />
            </div>

            {/* Recogniations */}
            <Recognitions
                title={"Certificates"}
                data={certiData} />


            {/* Quality Insurance Report */}
            <Recognitions
                title={"Quality Insurance Report"}
                data={certiData} />


            {/* Reach Out to us */}
            <div className="flex flex-col sm:flex-row sm:w-full p-4 gap-4 mx-auto">
                <img
                    src="https://jindalbricks.in/wp-content/uploads/2020/09/10.jpg"
                    alt="Contact Us"
                    className="h-52 w-full object-cover rounded-md"
                />

                <div className="flex flex-col gap-3">
                    <span className="text-[var(--var-red-col)] font-semibold text-2xl">
                        Reach Out to Us
                    </span>
                    <span className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
                        necessitatibus fugit blanditiis nemo vitae amet deleniti saepe commodi
                        ex incidunt.
                    </span>
                    <div className="w-fit">
                        <Button text={"GET IN TOUCH"} path={'/contact-us'} />
                    </div>
                </div>
            </div>

        </section>
    );
}
