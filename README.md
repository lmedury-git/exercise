## Project Description

Exercise application shows on Landing Page a list of subreddits ( fetch from popular.json api) on the left panel.
Cliking on each of the Subreddit will populate related Posts on the main panel ( fetch from hot.json api).

Each Subreddit link on left has visited color: blueviolet, active link color: black ( controlled via activeLink of React Router) 

Each Post has Title, Author, Post text, Thumbnail (if available). 

Highlighting on Post will have background color.

Enter Search term on left and click submit 

Posts can be switched between New and Popular views

## Installation

git clone https://github.com/lmedury-git/exercise.git
cd exercise
npm install

## start server

npm start

## Browser

Point browser to http://localhost:3000 

