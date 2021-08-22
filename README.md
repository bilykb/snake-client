# Snek Client Project
###### version 1.0.0
---
###### A [Lighthouse Labs](https://www.lighthouselabs.ca/) project by [Brett Bilyk](https://github.com/bilykb)
###### <span style="color:red">**Beware:  These functions were created while studying Web Development at Lighthouse Labs and is _not_ intended for use in production-grade software. Use at your own risk.**</span>

---
## Credits
---
> [Snek](https://github.com/taniarascia/snek) was created by [Tania Rascia](https://github.com/taniarascia).  For server side code please use this [repository](https://github.com/lighthouse-labs/snek-multiplayer)
---
## What is Snek Client?
---

>Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.
>
>This is simply a multiplayer take on the game.

---
## Summary
---

>This repository contains all the functions created over the course of the Snek project while studying at [Lighthouse Labs](https://www.lighthouselabs.ca/). 

---
## Usage
---

> Before you can run this client, you will need to be running the server side which you can download and install from [here](https://github.com/taniarascia/snek). 

---
## Final Product
---
![Snek client running in Terminal](https://user-images.githubusercontent.com/18246168/129814865-d90c7af4-7f89-4426-8c6a-6cec180eaf74.png)

---
## Table of Contents
---

| [client.js](#client) | [constants.js](#constants) | [input.js](#input) | [play.js](#play) |

---
## Contents
---

### <a name="client">[client.js](https://github.com/bilykb/snake-client/blob/master/client.js)</a>
> Contains the connect function, which establishes a connection for the client to the Snek server. This function also manages various events
 
### <a name="constants">[constant.js](https://github.com/bilykb/snake-client/blob/master/constants.js)</a>
> contains various hard coded constants that are necessary for the function of the snek client

### <a name="input">[input.js](https://github.com/bilykb/snake-client/blob/master/input.js)</a>
> contains two functions:  setupInput() and handleUserInput()
  > - setupInput() establishes how user input is managed
  > - handleUserInput() binds various in-game actions with keyboard characters

### <a name="play">[play.js](https://github.com/bilykb/snake-client/blob/master/play.js)</a>
> running this file will run the game with the assistance of all other javascript files