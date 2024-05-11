const ListTask = () => {
    return (<div className="flex flex-col gap-2 lg:justify-between px-8 overflow-scroll">

        <h1 className="text-center font-bold text-2xl">Tasks</h1>

        <div className="flex flex-col gap-2">

            <div className="flex justify-between py-2 px-2 border border-gray-300 rounded-lg items-center">
                <p>Task 1 Description</p>
                <div className="flex gap-2">
                    <div className="cursor-pointer px-2 py-1 rounded-lg bg-cyan-300">Complete</div>
                    <div className="cursor-pointer px-2 py-1 rounded-lg bg-yellow-300 font-bold">Edit</div>
                    <div className="cursor-pointer px-2 py-1 rounded-lg bg-red-500 font-bold">Delete</div>
                </div>
            </div>

        </div>

    </div>)
}

export default ListTask;