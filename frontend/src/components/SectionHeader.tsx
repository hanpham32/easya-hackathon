
interface SectionHeaderProps {
    title: string;
    description: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
    return (
        <div className="max-w-screen-xl pl-8 pt-4">
            <div className="items-start justify-between gap-x-4 py-4 border-b sm:flex">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-2xl font-bold">
                        {title}
                    </h3>
                    <p className="text-gray-600 mt-2">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SectionHeader;