import React from 'react';
import { addChecked, removeChecked } from '../../features/fiterSlice/filterSlice';
import { useDispatch } from 'react-redux';

const Projects = ({ projects }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <h3 className="text-xl font-bold">Projects</h3>
            <div className="mt-3 space-y-4">
                {projects?.map((project) => {
                    dispatch(addChecked({id: project?.id }));

                    return (<div className="checkbox-container" key={project?.id}>
                        <input type="checkbox" className={project?.colorClass} onChange={(e) => {
                            if (e.target.checked === false) {
                                dispatch(removeChecked(project?.id))
                            }else{
                                dispatch(addChecked({id: project?.id }));
                            }
                        }} value={project?.id} defaultChecked />
                        <p className="label">{project?.projectName}</p>
                    </div>)
                })}
            </div>
        </div>
    );
};

export default Projects;