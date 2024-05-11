import AddTask from "./component/AddTask"
import ListTask from "./component/ListTask"
import SearchTask from "./component/SearchTask"

function App() {
  

  return (
    <div className="flex h-screen w-screen">
      <div className="flex w-0 lg:w-1/2 justify-center items-center">Hi</div>
      <div className="flex flex-col w-full lg:w-1/2 gap-4 py-4">
          <AddTask />
          <SearchTask />
          <ListTask />
      </div>
    </div>
  )
}

export default App
