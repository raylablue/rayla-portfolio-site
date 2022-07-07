import React from 'react';
import { Link } from '@mui/material';
import PortfolioImage from '../atoms/ PortfolioImage/PortfolioImage';

const PortfolioItems = () => (
  <div className="m.pi_test">
    <Link href="https://promptdeck.com/" target="_blank">
      Prompt Deck
      <PortfolioImage
        alt="screenshot of prompt deck website with cards rotated to generate prompt scenario"
        src="assets/PromptDeck.png"
      />
    </Link>

    <br />
    <Link href="https://raylablue.github.io/my-movies/#/" target="_blank">
      Movie Gallery
      <PortfolioImage
        alt="srceenshot of a movie gallery with a search bar prompting user to search for movies in database"
        src="assets/MovieGallery.png"
      />
    </Link>
    <br />
    <Link href="https://raylablue.github.io/GameDevGrit/" target="_blank">
      Game Dev Grit
      <PortfolioImage
        alt="screenshot of a indie game development podcast with a game prototype image below the header"
        src="assets/GameDevPodcast.png"
      />
    </Link>
  </div>
);

export default PortfolioItems;
