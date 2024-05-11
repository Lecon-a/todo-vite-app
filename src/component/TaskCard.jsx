const TaskCard = () => {
    return (
        <div className="flex justify-between py-2 px-2 border border-gray-300 rounded-lg items-center">
                <div className="flex gap-2">
                    <input type="checkbox" name="task_name" id="task_name" />
                    <p>Task 1 Description</p>
                </div>
                <div className="flex gap-2">
                    <div className="cursor-pointer px-2 py-1 rounded-lg bg-cyan-300 font-bold">S</div>
                    {/* Status: Ongoing and Completed */}
                    <div className="cursor-pointer px-2 py-1 rounded-lg bg-yellow-300 font-bold">E</div>
                    <div className="cursor-pointer px-2 py-1 rounded-lg bg-red-500 font-bold">D</div>
                </div>
            </div>
    )
}

export default TaskCard;