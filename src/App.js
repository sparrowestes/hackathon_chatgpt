import './App.css';
import { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Header, Grid, Image, Card, Container, Form } from 'semantic-ui-react'
import coach from './images/coach.png';
import professor from './images/professor.png';
import nerd from './images/nerd.png';


function App() {
  const [value, setValue] = useState({});

  // const handleChange = (e, { value }) => this.setState({ value })

return (
<div className="App">
<Container fluid>
<div style={{margin: 30}}>
<Header as='h1'>Personalized Messaging with ChatGPT</Header>
Demonstrating how ChatGPT or Large Language Models (LLM) can be utilized to generate custom, personalized messaging to students in order to drive engagement and retention

<Header as='h2'>Meet Our Personas</Header>
<Grid
columns={4}
style={{
      display: 'flex',
      justifyContent: 'center'}}
      >
    <Grid.Column>
    <Card>
    <Image src={coach}></Image>
    <Card.Content>
      <Card.Header>Coach Bill "Bulldog" Johnson</Card.Header>
      <Card.Description>
      Coach Bill "Bulldog" Johnson is a retired college football coach from Georgia who has spent his entire career dedicated to the game. Known for his passion, strong southern accent, and larger-than-life personality, Coach Bulldog is a beloved figure in the football community. He has an unparalleled love for the game and an innate ability to inspire and motivate those around him. Overall, Coach Bill "Bulldog" Johnson is a larger-than-life figure who continues to leave a lasting impact through his mentoring and storytelling.
      </Card.Description>
    </Card.Content>
  </Card>
    </Grid.Column>
    
    <Grid.Column>
    <Card>
    <Image src={professor}></Image>
    <Card.Content>
      <Card.Header>Dr. Victoria Smith</Card.Header>
      <Card.Description>
      Dr. Victoria Smith is a proud native of Brooklyn, New York, and has lived in the borough her entire life. She embodies the essence of the city, with a strong New York accent and an unmistakable New York attitude. Growing up in a diverse and vibrant neighborhood, she developed a deep appreciation for the cultural richness and the no-nonsense, straight-talking nature of New Yorkers. She is known for her direct communication style, unapologetically expressing her opinions and challenging the status quo.
      </Card.Description>
    </Card.Content>
  </Card>
    </Grid.Column>

    <Grid.Column>
    <Card>
    <Image src={nerd}></Image>
    <Card.Content>
      <Card.Header>Luke, the Star Wars Enthusiast</Card.Header>
      <Card.Description>
      Despite being deeply immersed in the Star Wars galaxy, Luke is far from your stereotypical basement dweller. In fact, he leads a fulfilling life as a software engineer at Google, where he applies his analytical mindset and problem-solving skills to create innovative solutions. During his free time, he indulges in his love for video games, with RPG games being his absolute favorite. He can discuss the intricacies of character customization, immersive storytelling, and engaging gameplay mechanics.
      </Card.Description>
    </Card.Content>
  </Card>
    </Grid.Column>
  </Grid>


  <Header as='h2'>Create Your Persona Experience</Header>
  <div style={{marginLeft: 150, marginRight: 150, marginTop: 20}}>
  <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Your Name' placeholder='name' />
          <Form.Input fluid label='Email Address' placeholder='email' />
        </Form.Group>
        <Form.Group inline>
          <label>Choose Your Persona</label>
          <Form.Radio
            label='Coach Bill "Bulldog" Johnson'
            value='coach'
            checked={() => setValue(value)}
          />
          <Form.Radio
            label='Dr. Victoria Smith'
            value='professor'
            checked={() => setValue(value)}
          />
          <Form.Radio
            label='Luke, the Star Wars Enthusiast'
            value='nerd'
            checked={() => setValue(value)}
          />
        </Form.Group>
        <Form.TextArea label='Message to Your Persona' placeholder='What would you like to talk about...' />
        <Form.Button>Submit</Form.Button>
      </Form>
</div>
</div>
</Container>
</div>
  );
}

export default App;
