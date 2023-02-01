import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";
import axios from "./axios";
export default function TinderCards() {

    const [people, setPeople] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/tinder/cards");
            setPeople(req.data);
            setIsLoading(false);
        }
        fetchData();
    }, [])



    function swiped(dir, nameToDelete) {
        console.log("removing" + nameToDelete)
    }
    function outOfFrame(name) {
        console.log(name + "left the screen")
    }
    if (isLoading) return <h3>Loading...</h3>;
    return (

        <div className="tinderCards">

            <div className="tinderCards_cardContainer">
                {
                    people.map((person) => {
                        return <TinderCard
                            className="swipe"
                            key={person.name}
                            preventSwipe={["up", "down"]}
                            onSwipe={(dir) => swiped(dir, person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                            <div style={{ backgroundImage: `url(${person.imageUrl})` }} className="card">
                                <h3>{person.name}</h3>

                            </div>


                        </TinderCard>
                    })
                }
            </div>

        </div>

    )

}