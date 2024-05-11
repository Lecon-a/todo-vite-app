import TaskCard from "./TaskCard";


const ListTask = () => {
    return (<div className="flex flex-col gap-4 px-8 overflow-scroll">

        <h1 className="text-center font-bold text-2xl">Tasks</h1>

        <div className="max-h-96 flex flex-col gap-2 px-3 py-3 overflow-y-scroll shadow-2xl">

            <TaskCard />

            <TaskCard />

            <TaskCard />

            <TaskCard />

            <TaskCard />

            <TaskCard />

            <TaskCard />

            <TaskCard />

            <TaskCard />

        </div>

    </div>)
}

export default ListTask;