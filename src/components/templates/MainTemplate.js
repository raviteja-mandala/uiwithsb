import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import BlinkistHeader from '../organisms/BlinkistHeader';
import Body from '../molecules/Body';

const useStyles = makeStyles((theme) => ({

    templateContainer : {
         display : 'flex',        
         flexDirection : 'column',
         height : 'auto',
    },
   
    header: props => ({
      height: props.dimensions.width > 1110 ? props.dimensions.height/9 : 'auto'
    }),
    
    body : props => ({
        flexGrow : 1,    
    })
  }));

function MainTemplate(props) {
    console.log('abc '+props.dimensions.height);
    const classes = useStyles(props);
    

    return (
        <Grid container spacing={0} className={classes.templateContainer}>
            <Grid item className={classes.header}>{props.header}</Grid>
            <Grid item className={classes.body}>{props.body}</Grid>            
        </Grid>
    )
}

export default MainTemplate
