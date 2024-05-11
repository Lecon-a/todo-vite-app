import AddTask from "./component/AddTask"
import ListTask from "./component/ListTask"
import SearchTask from "./component/SearchTask"
import task_image from "./assets/task_image.webp"
import Header from "./component/Header"

function App() {
  

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex h-full w-screen">
        <div className="flex justify-center items-center hidden lg:w-1/2 lg:block bg-gray-400">
          <img src={task_image} alt="Task" className="mx-auto mt-44 w-[50%] h-auto" />
          {/* Credit: https://www.vecteezy.com/free-png/task */}
        </div>
        <div className="flex flex-col w-full lg:w-1/2 lg:py-8 lg:gap-8 gap-4 py-4">
            <AddTask />
            <SearchTask />
            <ListTask />
        </div>
      </div>
    </div>
  )
}

export default App
