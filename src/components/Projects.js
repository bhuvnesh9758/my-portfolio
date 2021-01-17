import React, { Component } from 'react'
import { Button, Card, CardActions, CardMenu, CardText, CardTitle, Cell, Grid, IconButton, Tab, Tabs } from 'react-mdl'

export default class Projects extends Component {
    constructor(props){
        super(props)
        this.state={activeIndex:0}  
    }
    toggleCategories(){
        if(this.state.activeIndex===0){
            return <div className="projects-grid">
                <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center / cover'}}>Welcome</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
                <Button colored>Github</Button>
                <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
        <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center / cover'}}>Welcome</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
                <Button colored>Github</Button>
                <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>

        <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center / cover'}}>Welcome</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
                <Button colored>Github</Button>
                <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
        </div>
        
        }else if(this.state.activeIndex===1){
            return <div >this is Node</div>
        }else if(this.state.activeIndex===2){
            return <div >this is mongoDB</div>
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
