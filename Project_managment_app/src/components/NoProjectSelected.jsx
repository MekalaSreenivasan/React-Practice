import noProjectImg from '../assets/no-projects.png';
import Button from './Button';
export default function NoProjectSelected({onStartAdd}) {
    return <div className="mt-2 text-center w-2/3">
        <img src={noProjectImg} alt="An empty Task list" className="w-16 h-16 object-contain mx-auto"/>
        <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
        <p className="text-stone-400 mb-4">Selected a Project or get started by adding new one</p>
        <p className="mt-8">
            <Button onClick={onStartAdd}>Create new Project</Button>
        </p>
    </div>
}