import AddTask from "./AddTask";

const SearchTask = () => {
    return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-2 py-4 px-8 bg-gray-100">
        <div className="flex w-full lg:w-1/2 items-center justify-between">
            <div className="flex gap-2 items-center">
                <span>Filter by:</span>
                <select name="" id="" className="px-1 py-2 rounded-lg">
                    <option value=""> -- choose -- </option>
                    <option value="completed">Completed</option>
                    <option value="ongoing">Ongoing</option>
                </select>
            </div>
            <div className="cursor-pointer px-2 py-1 rounded-lg bg-cyan-300 font-bold">Complete All</div>
        </div>
        <div className="w-full lg:w-1/2">
                <AddTask search={true} />
        </div>
    </div>)
}

export default SearchTask;