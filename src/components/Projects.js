import React, { Component } from 'react'
import { Cell, Grid, Tab, Tabs } from 'react-mdl'
import ProjectDisplay from './ProjectDisplay'

export default class Projects extends Component {
    constructor(props){
        super(props)
        this.state={activeIndex:0}  
    }
    toggleCategories(){
        if(this.state.activeIndex===0){
            return <div className="projects-grid">
            <ProjectDisplay
            projectTitle="Welcome"
            projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia..."
            github="Github"
            LiveDemo="LiveDemo"
            githubURL="https://github.com/bhuvnesh9758/my-portfolio"
            />
            <ProjectDisplay
            projectTitle="Welcome"
            projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia..."
            github="Github"
            LiveDemo="LiveDemo"
            />
            <ProjectDisplay
            projectTitle="Welcome"
            projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia..."
            github="Github"
            LiveDemo="LiveDemo"
            />
            <ProjectDisplay
            projectTitle="Welcome"
            projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia..."
            github="Github"
            LiveDemo="LiveDemo"
            />
            <ProjectDisplay
            projectTitle="Welcome"
            projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia..."
            github="Github"
            />
            </div>
            
        }else if(this.state.activeIndex===1){
            return <div className="projects-grid">
            <ProjectDisplay
            projectTitle="Welcome"
            projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia..."
            github="Github"
            LiveDemo="LiveDemo"
            />
            <ProjectDisplay
            projectTitle="Welcome"
            projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia..."
            github="Github"
            LiveDemo="LiveDemo"
            />
            <ProjectDisplay
            projectTitle="Welcome"
            projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia..."
            github="Github"
            />
            </div>
        }else if(this.state.activeIndex===2){
            return <div className="projects-grid">
            <ProjectDisplay
            projectTitle="Welcome"
            projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia..."
            github="Github"
            LiveDemo="LiveDemo"
            />
            <ProjectDisplay
            projectTitle="Welcome"
            projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia..."
            github="Github"
            LiveDemo="LiveDemo"
            />
            <ProjectDisplay
            projectTitle="Welcome"
            projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia..."
            github="Github"
            LiveDemo="LiveDemo"
            />
            </div>
        }
    }
    render() {
        return (
            <div className="category-tabs">
            <Tabs activeTab={this.props.activeIndex} onChange={(tabId)=>this.setState({activeIndex:tabId})} ripple>
            <Tab>React</Tab>
            <Tab>Node</Tab>
            <Tab>MongoDB</Tab>
            </Tabs>
            <Grid>
            <Cell col={12}>
            <div className="content">
            {this.toggleCategories()}
            </div>
            </Cell>
            </Grid>
            </div>
            )
        }
    }
    