import React, { Component } from 'react';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component'
import { CardList } from './components/card-list/card-list.component'

class App extends Component {
  constructor() {
    super();

    this.state = {
      cast: [
        {
          id: 1,
          name: 'Monica Geller',
          display: `I'm Monica, Super aunt!!!`,
          URL: 'https://sites.google.com/site/friends2365/_/rsrc/1472782816715/home/monica-geller/monica.jpg'
        },
        {
          id: 2,
          name: 'Chandler Bing',
          display: `Could i be anymore turned on?`,
          URL: 'https://pyxis.nymag.com/v1/imgs/079/792/3ed0d94be0a9bd3d023f00532889bab152-30-chandler-bing.rsquare.w330.jpg'
        },
        {
          id: 3,
          name: 'Phoebe Buffay',
          display: `Smelly cat, smelly cat it's not your fault`,
          URL: 'https://i.pinimg.com/originals/9a/2b/ea/9a2bea6795661d05cb017f026827751e.png'
        },
        {
          id: 4,
          name: 'Ross Geller',
          display: `We were on a Break!!!!!`,
          URL: 'https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/07/08/Pictures/_7bf5d758-c124-11ea-b246-8f7a5e10b5dd.png'
        },
        {
          id: 5,
          name: 'Rachel Green',
          display: `Nooooooo!!!!`,
          URL: 'https://www.filmcompanion.in/wp-content/uploads/2020/07/Film_Companion-RACHEL-GREEN-lead-image.jpg'
        },
        {
          id: 6,
          name: 'Joey Tribbiani',
          display: `How yow doin'?`,
          URL: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F03%2Fjoey.jpg'
        },
        {
          id: 7,
          name: 'Gunther',
          display: `Ezel`,
          URL: 'https://i.insider.com/5b6847b4bda1c72e008b4576?width=700'
        },
        {
          id: 8,
          name: 'Janice',
          display: `OH MY GOD!!`,
          URL: 'https://media3.s-nbcnews.com/j/newscms/2016_34/1152593/friends-maggie-wheeler-today-160823_cff8cf31584f19c957527d72757cf183.fit-760w.jpg'
        },
        {
          id: 9,
          name: 'Mike Hannigan',
          display: `Hi, I'm Crap bag`,
          URL: 'https://i.insider.com/5ef4c09ff0f419694246e2e5?width=1100&format=jpeg&auto=webp'
        },
        {
          id: 10,
          name: 'Ben Geller',
          display: `Monica Bang`,
          URL: 'https://i.pinimg.com/originals/00/fb/b3/00fbb3dc1745243e501cc28cb7b11024.jpg'
        },
      ],
      searchField: ''
    }
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { cast, searchField } = this.state;
    const filteredFriends = cast.filter(friends =>
      friends.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="back-img">
        <div className="text-center">
          <h1 className="pt-5">
            <span style={{ color: "#2A2A57" }}>F</span>
            <span style={{ color: "red" }}>.</span>
            <span style={{ color: "#2A2A57" }}>R</span>
            <span style={{ color: "lightblue" }}>.</span>
            <span style={{ color: "#2A2A57" }}>I</span>
            <span style={{ color: "yellow" }}>.</span>
            <span style={{ color: "#2A2A57" }}>E</span>
            <span style={{ color: "red" }}>.</span>
            <span style={{ color: "#2A2A57" }}>N</span>
            <span style={{ color: "yellow" }}>.</span>
            <span style={{ color: "#2A2A57" }}>D</span>
            <span style={{ color: "lightblue" }}>.</span>
            <span style={{ color: "#2A2A57" }}>S</span>
          </h1>
          <SearchBox
            placeholder='s.e.a.r.c.h'
            handleChange={this.handleChange}
          />
          <CardList friends={filteredFriends} />
        </div>
      </div>
    )
  }
}

export default App;
