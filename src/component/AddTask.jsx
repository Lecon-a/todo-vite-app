const AddTask = (props) => {

    const {search} = props;

    let label = search ? "Search" : "Add";

    return (<div className="flex flex-col gap-8 justify-center items-center">
        {/* <h1 className="text-center font-bold text-2xl">Add New Task</h1> */}
        <div className={search ? "flex w-full gap-2" : "flex w-2/3 gap-2"}>
            <input type="text" placeholder="New task" className="outline-none w-2/3 border border-gray-200 px-4 py-2 rounded-lg"/>
            <div className="border bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg w-1/3 text-center font-bold cursor-pointer">{label}</div>
        </div>
    </div>)
}

export default AddTask;