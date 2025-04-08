import './App.css';
import React from 'react';
import { Input, Message } from './components';
import { Scaledrone, MemberGenerator } from './services';


class App extends React.Component{

    state = {
    messages: [],
    currentMemberId: null
  };
  
  constructor(props){
    super(props);

    const confing = {
      member: MemberGenerator.get(),
      onInit: this.onInit,
      onMessageReceived: this.onMessageReceived,
    };

    this.drone = new Scaledrone(confing);
  }

  onInit = (currentMemberId) => {
    this.setState({currentMemberId});
  };

  onMessageReceived = (newMessage) => {
    const {messages} = this.state;
    this.setState({
      messages: [...messages, newMessage],
    })
  };

  render(){

    const { messages, currentMemberId } = this.state;

    return (
      <div className="App">
        <div className='header'>
        <h1>My chat app</h1>
        </div>
        <ul className='message-list'>
        {messages.map(message => (
    <Message message={message} currentMemberId={currentMemberId} key={message.id} />
  ))}
        </ul>
        <Input onSendMessage={this.drone.sendMessage}/>
      </div>
    );
  }
}

export default App;
