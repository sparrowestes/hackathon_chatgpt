import './App.css';
import { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Header, Grid, Image, Card, Container, Form } from 'semantic-ui-react'
import coach from './images/coach.png';
import professor from './images/professor.png';
import nerd from './images/nerd.png';


function App() {
  const value = useState({});

  // const handleChange = (e, { value }) => this.setState({ value })

return (
<div className="App">
<Container fluid>
<div style={{margin: 30}}>
<Header as='h1'>LLM (this text here is for example of text can delete or change etc)</Header>
A large language model (LLM) is a type of artificial intelligence (AI) algorithm that uses deep learning techniques and massively large data sets to understand, summarize, generate and predict new content. LLMs can be used to used to enhance communications and student experience through custom messaging.

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
      <Card.Header>Dr. Anthony "Tony" Marino</Card.Header>
      <Card.Description>
      Dr. Anthony "Tony" Marino was born and raised in the heart of Brooklyn, New York. Growing up in a vibrant and diverse neighborhood, he developed a strong New York accent and embraced a distinctive New York attitude. Tony's passion for knowledge and learning led him to pursue a career in academia, where he eventually became a tenured professor at a prestigious university in the city. Tony is fiercely passionate about his subject matter and can captivate a classroom with his engaging teaching style.
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
            checked={value === 'coach'}
            // onChange={this.handleChange}
          />
          <Form.Radio
            label='Dr. Anthony "Tony" Marino'
            value='professor'
            checked={value === 'professor'}
            // onChange={this.handleChange}
          />
          <Form.Radio
            label='Luke, the Star Wars Enthusiast'
            value='nerd'
            checked={value === 'nerd'}
            // onChange={this.handleChange}
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
