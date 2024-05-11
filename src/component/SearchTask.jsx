import AddTask from "./AddTask";

const SearchTask = () => {
    return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-2 py-4 px-8 bg-gray-100">
        <div className="w-full lg:w-1/2 border border-gray-400">Filter</div>
        <div className="w-full lg:w-1/2 border border-gray-400">
                <AddTask search={true} />
        </div>
    </div>)
}

export default SearchTask;