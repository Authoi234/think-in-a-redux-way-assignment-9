import React from 'react';
import Projects from './Projects';
import Team from './Team';
import { useGetProjectsQuery } from '../../features/Projects/projectsApi';
import { useGetTeamQuery } from '../../features/team/teamApi';

const Sidebar = () => {
    const { data: projects, isLoading: isProjectsLoading, isError: isProjectsError } = useGetProjectsQuery() || {};
    const {data: team, isLoading: isTeamLoading, isError: isTeamError} = useGetTeamQuery() || {};

    return (
        <div className="sidebar">
            { (isProjectsError && !isProjectsLoading) ? <h1>There was an Error</h1> : <Projects projects={projects}></Projects>}

            { (isTeamError && !isTeamLoading) ? <h1>There was an Error</h1> : <Team team={team}></Team>}
        </div>
    );
};

export default Sidebar;