import React from 'react';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import Link from '@material-ui/core/Link';
export function AlertBox() {
    return (
        <div>
            <List>
                <ListItem className="sightingListItem">
                    <Link>Sighting 1:  {sighting1.location}</Link>
                </ListItem>
                <ListItem className="sightingListItem">
                    <Link>Sighting 2:  {sighting2.location}</Link>
                </ListItem>
                <ListItem className="sightingListItem">
                    <Link>Sighting 3:  {sighting3.location}</Link>
                </ListItem>
            </List>
        </div>
    );
}


let sighting1 =     {    "location": "Perth City, Australia ", "lat": 12.6432,"lon": 25.3728}
let sighting2 =     {    "location": "New York City, USA ", "lat": 40.730610,"lon": -73.935242}
let sighting3 =     {    "location": "Beijing, China", "lat": 15.12,"lon": 26.6256}



