
const SectionTitle = ({title, description}) => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-5xl font-semibold">{title}</h2>
            <p className="text-xl text-gray-600 py-4">{description}</p>
        </div>
    );
};

export default SectionTitle;