import AddTask from "./AddTask";

const SearchTask = () => {
    return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-2 py-4 px-8 bg-gray-100">
        <div className="flex w-full lg:w-1/2 items-center pr-2 justify-between">
            <div className="flex w-2/3 items-center justify-between lg:justify-start lg:gap-2">
                <span>Filter by:</span>
                <select name="" id="" className="w-2/3 px-1 py-2 rounded-lg">
                    <option value="">-- Choose --</option>
                    <option value="completed">Completed</option>
                    <option value="ongoing">Ongoing</option>
                </select>
            </div>
            <div className="cursor-pointer px-2 py-2 rounded-lg bg-cyan-300 font-bold">Complete All</div>
        </div>
        <div className="w-full lg:w-1/2">
                <AddTask search={true} />
        </div>
    </div>)
}

export default SearchTask;