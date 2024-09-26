import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  //const [showAddProject, setShowAddProject] = useState(false);
  const [projectsList, setProjectsList] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(task) {
    setProjectsList(prevList => {
      const id = Math.random();
      const newTask = {
        text: task,
        projectId: prevList.selectedProjectId,
        id: id
      };
      return {
        ...prevList,
        tasks: [...prevList.tasks, newTask]
      }
    })    
  }

  function handleDeleteTask(id) {
    setProjectsList(prevList => {
      return {
        ...prevList,
        tasks: prevList.tasks.filter((task) => task.id !== id)
      }
    })     
  }

  function handleSelectProject(projectId) {
    setProjectsList(prevList => {
      return {
        ...prevList,
        selectedProjectId: projectId,

      }
    }) 
  }
  function handleAddProject() {
    //setShowAddProject(true);
    setProjectsList(prevList => {
      return {
        ...prevList,
        selectedProjectId: null,

      }
    })
  }

  function handleNewProjectAddition(projectData) {
    setProjectsList(prevList => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };
      return {
        ...prevList,
        selectedProjectId: undefined,
        projects: [...prevList.projects, newProject]
      }
    })
  }

  function handleCancelOption() {
    setProjectsList(prevList => {
      return {
        ...prevList,
        selectedProjectId: undefined,

      }
    })    
  }

  function handleProjectDeletion() {
    setProjectsList(prevList => {
      return {
        ...prevList,
        selectedProjectId: undefined,
        projects: prevList.projects.filter((project) => project.id !== prevList.selectedProjectId)
      }
    })    
  }

  const selectedProject = projectsList.projects.find(project => project.id === projectsList.selectedProjectId);

  let content = <SelectedProject 
    project={selectedProject} 
    onDelete={handleProjectDeletion} 
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
    tasks={projectsList.tasks}/>;
  if (projectsList.selectedProjectId === null) {
    content = <NewProject onAdd={handleNewProjectAddition} onCancel={handleCancelOption} />
  } else if(projectsList.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAdd={handleAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
     <Sidebar onStartAdd={handleAddProject} projects={projectsList.projects} 
      onSelectProject={handleSelectProject} 
      selectedProjectId={projectsList.selectedProjectId}/>
     {content}
    </main>
  );
}

export default App;
