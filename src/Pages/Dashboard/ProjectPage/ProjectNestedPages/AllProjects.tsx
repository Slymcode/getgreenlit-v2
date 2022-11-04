import { CreateProjectHeader } from '../../../../Components/Dashboard/ProjectsComponets/AllProjectsPageComponents/CreateProjectHeader'

export const AllProjects = () => {
  return (
    <div className="relative">
      <CreateProjectHeader></CreateProjectHeader>
      <div className="mt-60 h-full w-full">
        <p className="text-sm  text-gray-600 text-center">
          This is a world of limitless potential.
          <br />
          Start a project to help realize it.
        </p>
      </div>
    </div>
  )
}
