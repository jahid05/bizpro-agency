
// eslint-disable-next-line react/prop-types
const SectionTitle = ({title, description}) => {
    return (
        <div className="flex flex-col items-center">
            <h2 data-aos="fade-right" data-aos-duration="700" className="lg:text-5xl md:text-4xl text-3xl font-semibold">{title}</h2>
            <p data-aos="fade-left" data-aos-duration="700" className="lg:text-xl md:text-lg text-gray-600 lg:py-4 py-2 text-center">{description}</p>
        </div>
    );
};

export default SectionTitle;