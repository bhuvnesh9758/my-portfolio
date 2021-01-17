import React from 'react'
import { Button, Card, CardActions, CardMenu, CardText, CardTitle, IconButton } from 'react-mdl'

function ProjectDisplay({projectTitle,projectText,github,LiveDemo,LiveDemoURL,githubURL}) {
    return (
        <div className="project-display">
            <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center / cover'}}>{projectTitle}</CardTitle>
        <CardText>
            {projectText}
        </CardText>
        <CardActions border>
            <Button colored><a target="_blank" href={githubURL} rel="noreferrer noopener">{github}</a></Button>
            <Button colored src={LiveDemoURL}><a target="_blank" href={LiveDemoURL} rel="noreferrer noopener">{LiveDemo}</a></Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
        </div>
    )
}

export default ProjectDisplay
