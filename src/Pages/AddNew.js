import React, { useState, useEffect } from 'react';
import { useGetTeamQuery } from '../features/team/teamApi';
import { useGetProjectsQuery } from '../features/Projects/projectsApi';
import { useAddTaskMutation } from '../features/tasks/tasksApi';
import { useNavigate } from 'react-router-dom';

const AddNew = () => {
    const [name, setName] = useState("");
    const [teamMember, setTeamMember] = useState();
    const navigate = useNavigate();
    const [project, setProject] = useState();
    const [deadline, setDeadline] = useState("");
    const { data: team = [] } = useGetTeamQuery() || {};
    const { data: projects = [] } = useGetProjectsQuery() || {};
    const [addTask, { data: addTaskData, isSuccess }] = useAddTaskMutation();

    useEffect(() => {
        if (isSuccess) {
            navigate("/"); // Navigate after task creation is successful
        }
    }, [isSuccess, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const teamMemberObj = JSON.parse(teamMember);
        const projectObj = JSON.parse(project);
        const newTask = {
            taskName: name,
            teamMember: teamMemberObj,
            deadline,
            project: projectObj,
            status: "pending",
        };
        addTask(newTask); // Call mutation to add the task
    };

    return (
        <div className="container relative">
            <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
                <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
                    Create Task for Your Team
                </h1>

                <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="fieldContainer">
                            <label htmlFor="lws-taskName">Task Name</label>
                            <input
                                type="text"
                                name="taskName"
                                id="lws-taskName"
                                required
                                placeholder="Implement RTK Query"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="fieldContainer">
                            <label>Assign To</label>
                            <select
                                name="teamMember"
                                id="lws-teamMember"
                                required
                                value={teamMember}
                                onChange={(e) => setTeamMember(e.target.value)}
                            >
                                <option value="" hidden>
                                    Select Job
                                </option>
                                {team.map((member) => (
                                    <option key={member.id} value={JSON.stringify(member)}>
                                        {member.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="fieldContainer">
                            <label htmlFor="lws-projectName">Project Name</label>
                            <select
                                id="lws-projectName"
                                name="projectName"
                                required
                                value={project}
                                onChange={(e) => setProject(e.target.value)}
                            >
                                <option value="" hidden>
                                    Select Project
                                </option>
                                {projects.map((projectItem) => (
                                    <option key={projectItem.id} value={JSON.stringify(projectItem)}>
                                        {projectItem?.projectName}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="fieldContainer">
                            <label htmlFor="lws-deadline">Deadline</label>
                            <input
                                type="date"
                                name="deadline"
                                id="lws-deadline"
                                value={deadline}
                                onChange={(e) => setDeadline(e.target.value)}
                                required
                            />
                        </div>

                        <div className="text-right">
                            <button type="submit" className="lws-submit">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default AddNew;
