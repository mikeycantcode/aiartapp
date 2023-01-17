/*import { root } from 'postcss';
import React from 'react';
export class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }



  async handleSubmit(event) {
    
    event.preventDefault();
    const response = fetch('http://61ad-35-221-44-255.ngrok.io/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'accept': 'application/json' },
      body: `prompt=${this.state.value}&negative_prompt=ugly`,
    })

    const imageBlob = await response.blob();
    setImageUrl(URL.createObjectURL(imageBlob));
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} class="w-full max-w-sm">
          <div class="items-center border-b border-teal-500 py-2">
            <label class="block mb-2 text-sm font-medium text-gray-900">
              enter your prompt

            </label>
            <input type="text" value={this.state.value} onChange={this.handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2.5" />

            <input type="submit" value="Submit" class="bg-blue" />
          </div>
        </form>
        {<img src={imageUrl} alt="Generated image" />}
      </div>
    );
  }
}
*/