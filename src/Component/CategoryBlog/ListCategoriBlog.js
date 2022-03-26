
import { useState } from "react";
function ListCategoryBlog(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex flex-col">
            <button type="button" onClick={() => setIsOpen(!isOpen)}
                className="flex flex-row justify-between py-4 items-center">
                <span className="text-sm text-[#29384E] font-semibold">{props.title}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.0002 9.16994C16.8128 8.98369 16.5594 8.87915 16.2952 8.87915C16.031 8.87915 15.7776 8.98369 15.5902 9.16994L12.0002 12.7099L8.46019 9.16994C8.27283 8.98369 8.01938 8.87915 7.75519 8.87915C7.49101 8.87915 7.23756 8.98369 7.05019 9.16994C6.95646 9.26291 6.88207 9.37351 6.8313 9.49537C6.78053 9.61723 6.75439 9.74793 6.75439 9.87994C6.75439 10.012 6.78053 10.1427 6.8313 10.2645C6.88207 10.3864 6.95646 10.497 7.05019 10.5899L11.2902 14.8299C11.3832 14.9237 11.4938 14.9981 11.6156 15.0488C11.7375 15.0996 11.8682 15.1257 12.0002 15.1257C12.1322 15.1257 12.2629 15.0996 12.3848 15.0488C12.5066 14.9981 12.6172 14.9237 12.7102 14.8299L17.0002 10.5899C17.0939 10.497 17.1683 10.3864 17.2191 10.2645C17.2699 10.1427 17.296 10.012 17.296 9.87994C17.296 9.74793 17.2699 9.61723 17.2191 9.49537C17.1683 9.37351 17.0939 9.26291 17.0002 9.16994Z" fill="#29384E" />
                </svg>

            </button>
            {isOpen && (
                <div>
                    <ul className="text-[#29384E] text-xs space-y-4 pl-4">
                        <li>Category Item</li>
                        <li>Category Item</li>
                        <li>Category Item</li>
                        <li>Category Item</li>
                    </ul>
                </div>

            )}
        </div>
    );
}

export default ListCategoryBlog;
