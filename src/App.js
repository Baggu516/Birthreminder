import React, { useState } from 'react'
import data from './data'
import List from './List'
import { Button, Container, Divider, IconButton, Toolbar, Typography } from '@material-ui/core'
import CakeIcon from '@material-ui/icons/Cake';
function App() {
  const [people, setPeople] = useState(data)
  const [value,setValue]=useState(0)
  return (
    <Container>
      <Toolbar>
      <IconButton>
        <CakeIcon fontSize="large"/>
      </IconButton>
      <Typography style={{marginTop:"10px"}}variant='h5'>Birthday Reminder</Typography>
      </Toolbar>
      <Divider></Divider>
      <Toolbar>
      <Button variant="outlined" color="inherit" style={{marginLeft:"20px"}} onClick={()=>setValue(0)}>All Details</Button>
      <Button variant="outlined" color="inherit" style={{marginLeft:"10px"}} onClick={()=>setValue(1)}>Today Borns</Button>
      </Toolbar>   
    {value==0&&
    <main>
      <section className='container'>
        <h3>Total Birthdays list</h3>
        <hr></hr>

        <List people={people} value={value}/>
        {/* <button onClick={() => setPeople([])}>clear all</button> */}
      </section>
    </main>}
    {value==1&&
    <main>
      <section className='container'>
        <h3>Today's Birthdays list</h3>
        <hr></hr>

        <List people={people} value={value}/>
        {/* <button onClick={() => setPeople([])}>clear all</button> */}
      </section>
    </main>} 
    </Container>
  )
}

export default App
