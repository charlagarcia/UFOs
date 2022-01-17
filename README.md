# UFOs

## Overview
1. Explain the strengths and weaknesses of JavaScript "standard" and JavaScript version ES6+.
2. Describe JavaScript syntax and ideal use cases.
3. Build and deploy JavaScript functions, including built-in functions.
4. Convert JavaScript functions to arrow functions.
5. Build and deploy forEach (JavaScript for loop).
6. Create, populate, and dynamically filter a table using JavaScript and HTML

## Results
This webpage is meant to be user-friendly, where a person could access this large UFO-sighting dataset, and filter the data based on date, city, state, country, and/or shape. 

The main body of the page has an easy-to-see header with a space image, showing the user that they've landed in the right place.
![pic1](https://github.com/charlagarcia/UFOs/blob/main/static/images/page%20top.png)

The bottom of the page contains the data table and a filter. Before selecting any filters, all of the information from the dataset is shown.
![pic2](https://github.com/charlagarcia/UFOs/blob/main/static/images/table%20unfiltered.png)

The user can filter by one or more parameters to narrow their search to a particular sighting that they might be interested in.  Here, I've filtered the data to only show sightings in Texas.
![pic3](https://github.com/charlagarcia/UFOs/blob/main/static/images/table%20filtered%20tx.png)

## Summary
#### Drawbacks
One drawback that I noticed is that the filtering system isn't useful unless you already know what you're looking for.  For instance, users have to accurately type the correct state or country code to view data in specific areas.  Someone could type "AK" thinking they're gathering info from Arkansas instead of Alaska if they don't know the correct abbreviation.  The data only has abbreviations as well, so the user would not even realize their mistake, and gather the wrong information.

#### Suggested Changes
I would suggest changing some of the filters (city, state, country, and shape) to be drop-down boxes instead of text-imput boxes.  This way, users would be able to see their options before blindly searching by guessing.

If we wanted to get a little more sophisticated, one more coloumn in the table with links to any photos of these particular sightings would be really exciting to anyone interested in this field.  Obviously, not every sighting comes with photographic evidence, but I'm positive that users would love seeing photos of any that do.
