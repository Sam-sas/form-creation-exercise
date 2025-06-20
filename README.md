Overview
-------------------------------
I added colors from the ActBlue page, while keeping the columns available. 
I also added a band selection page before you get to the ticket form, that way you can play with/see all the bands given in the folder. 
I made it responsive, mostly focusing on common break points to stay within the time frame.
For the font-family I used a google font but made sure it was in sans-serif for legibility and has a fallback.

The total will automatically update depending on how many tickets you select.
There's also a max limit of 10 to mimic how most ticket applications try to limit the amount people can select to curb scalpers/bots.

I did update some of the json files to get rid of an unclosed <p> tag and a couple of floating periods. Everything else was left the same.

Originally I had plans to add a 'thoughts' page where I would put down the planning I did, but it was eating too much into my assessment time so I have the notes for that separate.
Because of this I have a component used once for the navigation link layout, but it will make it easier to add in later.

Main packages used:
----------------------------
React-router
Tailwind
html-react-parser
date-fns (since moment is in maintenance mode)
