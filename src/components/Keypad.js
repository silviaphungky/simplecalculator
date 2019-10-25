import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import Output from './Output'

class Keypad extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: '',
      view: ''
    }
  }

  handleonClickAC = () => {
    this.setState({
      result: ''
    })
  }

  handleonClickDel = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }

  handleonClick = (e) => {
    this.setState({
        result: this.state.result + e.target.value
      })
    }

  calculate = () => {
    try{
      this.setState((prevState) => ({
      result: eval(this.state.result)
    }))
  } catch{
    this.setState((prevState) => ({
      result: prevState.result
    }))
  }
  };

  render () {
    return(
      <Container>
        <Row className='output-screen'>
         <Output
            result= {this.state.result}
          />
        </Row>
        <Row className='buttons'>
          <Col>
            <Button onClick={this.handleonClickAC}>AC</Button>
            <Button value={'('} onClick={(e) => this.handleonClick(e)}>(</Button>
            <Button value={')'} onClick={(e) => this.handleonClick(e)}>)</Button>
            <Button onClick={this.handleonClickDel}>Del</Button>
          </Col>
          <Col>
            <Button value={'1'} onClick={(e) => this.handleonClick(e)}>1</Button>
            <Button value={'2'} onClick={(e) => this.handleonClick(e)}>2</Button>
            <Button value={'3'} onClick={(e) => this.handleonClick(e)}>3</Button>
            <Button value={'+'} onClick={(e) => this.handleonClick(e)}>+</Button>
          </Col>
          <Col>
            <Button value={'4'} onClick={(e) => this.handleonClick(e)}>4</Button>
            <Button value={'5'} onClick={(e) => this.handleonClick(e)}>5</Button>
            <Button value={'6'} onClick={(e) => this.handleonClick(e)}>6</Button>
            <Button value={'-'} onClick={(e) => this.handleonClick(e)}>-</Button>
          </Col>
          <Col>
            <Button value={'7'} onClick={(e) => this.handleonClick(e)}>7</Button>
            <Button value={'8'} onClick={(e) => this.handleonClick(e)}>8</Button>
            <Button value={'9'} onClick={(e) => this.handleonClick(e)}>9</Button>
            <Button value={'*'} onClick={(e) => this.handleonClick(e)}>x</Button>
          </Col>  
          <Col>
            <Button value={'0'} onClick={(e) => this.handleonClick(e)}>0</Button>
            <Button value={'.'} onClick={(e) => this.handleonClick(e)}>.</Button>
            <Button onClick={this.calculate}>=</Button>
            <Button value={'/'} onClick={(e) => this.handleonClick(e)}>/</Button>
          </Col>
        </Row>
      </Container>

    );
  };
}
export default Keypad