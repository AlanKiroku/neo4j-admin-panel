import React, { Component } from 'react';
import { Container, Row, Col, Button, ButtonGroup } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      oldWords: [],
      newWords: [],
      rows:1,
      responseNeo: null
    }
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this)
  }

  handleRowChange = (evt) => {
    this.setState({
      rows: evt.target.value
    })
  }

  submitChanges = (evt) => {
      fetch('http://0.0.0.0:5000/', {
        method: 'POST',
        body: JSON.stringify(this.state)
      })
      .then((res) => {return res.json()})
      .then((data) => { this.setState({responseNeo: data.confirmation}) })
  }

  storeOld = (evt) => {
    if (evt.target.name === 'old') {
        const {value} = evt.target
        this.setState({
            oldWords: value
        })
    }
  }

  storeNew = (evt) => {
    if (evt.target.name === 'new') {
        const {value} = evt.target
        this.setState({
            newWords: value
        })
    }
  }

  onRadioBtnClick( changeType ) {
    this.setState({ changeType })
  }

  componentWillUnmount() {
    this.setState({})
  }

  render() {
    return (
      <Container className="App">
        <header className="App-header">
          <h1 className="App-title">Neo Admin Panel</h1>
        </header>
        { this.state.responseNeo === null ? '' :
            <Row>
                {this.state.responseNeo}
            </Row>
        }
        <Row>
          <Col>
            <ButtonGroup>
              <Button onClick={() => this.onRadioBtnClick('title')} active={this.state.changeType === 'title'}>Title</Button>
              <Button onClick={() => this.onRadioBtnClick('note')} active={this.state.changeType === 'note'}>Note</Button>
            </ButtonGroup>
          </Col>
          <Col>
            <label>Old</label>
            <input onChange={this.storeOld} type='text' name='old'/>
          </Col>
          <Col>
            <label>New</label>
            <input onChange={this.storeNew} type='text' name='new'/>
          </Col>
        </Row>
        <Button onClick={this.submitChanges}>Submit</Button>
      </Container>
    );
  }
}

export default App;
