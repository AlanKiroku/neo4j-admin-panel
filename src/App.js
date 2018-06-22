import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      oldWords: [],
      newWords: [],
      rows:1 
    }
  }

  handleRowChange = (evt) => {
    this.setState({
      rows: evt.target.value
    })
  }

  submitChanges = () => {
    console.log(this.state)
  }

  storeOld = (evt) => {
    if (evt.target.name === 'old') {
      this.state.oldWords.push(evt.target.value)
    }
  }

  storeNew = (evt) => {
    if (evt.target.name === 'new') {
      this.state.newWords.push(evt.target.value)
    }
  }

  componentDidUnmount() {
    this.setState({})
  }
  
  render() {
    let rowData = [];
    for (let i = 0; i < this.state.rows; i++) {
      rowData.push(
        <Row key={i}>
          <Col>
            <label>Old</label>
            <input onChange={this.storeOld} type='text' name='old'/>
          </Col>
          <Col>
            <label>New</label>
            <input onChange={this.storeNew} type='text' name='new'/>
          </Col>
        </Row>
      )
    }
    return (
      <Container className="App">
        <header className="App-header">
          <h1 className="App-title">Neo Admin Panel</h1>
        </header>
        <Row>
          <Col>
            <label>Number of changes required</label>
            <input onChange={this.handleRowChange} value={this.state.rows} type="number" name='changes' />
          </Col>
        </Row>
        {rowData}
        <Button onClick={this.submitChanges}>Submit</Button>
      </Container>
    );
  }
}

export default App;
