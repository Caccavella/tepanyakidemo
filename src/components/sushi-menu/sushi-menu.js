import React, { Component } from 'react'
import './sushi-menu.css';

export default class SushiMenu extends Component {

    render() {
        return (
            <div className="sushimenucontainer">
                <div className="menuitems">
                    <div className="section">
                        <h2>APPETIZERS</h2>
                        <h5>Japanese Egg Roll 2pc</h5>
                        <h5>Yakitori 3pc</h5>
                        <h6>Chicken skewers with Teriyaki sauce</h6>
                        <h5>Chicken Wings 6pc</h5>
                        <h5>Gyoza 4pc</h5>
                        <h6>Japanese Style Potstickers</h6>
                        <h5>Beef Kushi 2pc</h5>
                        <h6>Beef tender with Tepanyaki sauce</h6>
                        <h5>Shrimp Tempura</h5>
                        <h6>Lightly battered deep fried shrimp and vegetables</h6>
                    </div>
                    <div className="section">
                        <h2>SUSHI BAR APPETIZERS</h2>
                        <h5>Edamame</h5>
                        <h6>Steamed soy beans</h6>
                        <h5>Sunomono</h5>
                        <h6>Cucumber salad with seafood</h6>
                        <h5>Green Mussels</h5>
                        <h6>Broiled mussels with spicy sauce</h6>
                        <h5>Ocean Salad</h5>
                        <h6>Seaweed with smoked squid</h6>
                        <h5>Dynamite</h5>
                        <h6>Broiled assorted fish with spicy sauce</h6>
                        <h5>Sushi Appetizer</h5>
                        <h6>3pc tuna roll, 3pc cucumber roll, tuna, white fish, shrimp, and man of Nigiri</h6>
                    </div>
                    <div>
                        <h2>SASHIMI APPETIZERS</h2>
                        <h5>Sashimi A: l2pc of sashimi</h5>
                        <h6>Tuna, salmon, white fish, and octopus</h6>
                        <h5>Sashimi B: 20pc of sashimi</h5>
                        <h6>Tuna, salmon, white fish, yellowtail, squid and octopus</h6>
                    </div>
                    <div className="section">
                        <h2>COMBINATIONS</h2>
                        <h6>Served with soup and salad</h6>
                        <h4>Nigiri</h4>
                        <h5>Nigiri A: 8pc of Nigiri</h5>
                        <h6>Tuna, salmon, white fish, shrimp, flyingfish eggs, octopus, eel & mackerel</h6>
                        <h5>Nigiri B: 7pc Nigiri with california roll</h5>
                        <h6>Tuna, salmon, white fish, shrimp, fiyingflsh eggs, octopus & eel</h6>
                        <h5>Nigiri C: 10pc Nigiri with california roll</h5>
                        <h6>Tuna, salmon, white fish, shrimp, flyingfish eggs, octopus</h6>
                        <h5>Hand Roll Combo</h5>
                        <h6>California, cucumber & spicy tuna hand roll</h6>
                        <h5>Roll Combo</h5>
                        <h6>California, cucumber & tuna roll</h6>
                        <h5>Unagi Donburi</h5>
                        <h6>Eel on rice bed</h6>
                        <h5>Chirashi Sushi</h5>
                        <h6>Assorted sliced fish on rice bed (tuna, salmon, white fish, yellowtail, shrimp, tobiko, omelet, squid and octopus</h6>
                        <h5>Sashimi Dinner</h5>
                        <h6>14pc of sliced tuna with a bowl of rice</h6>
                        <h5>Suchi & Sashimi</h5>
                        <h6>Tuna, shrimp, salmon, california roll & 7pc tuna Sashimi</h6>
                        <h6>* No substitutions please for combinations</h6>
                    </div>
                    <div className="section">
                        <h2>SUSHI</h2>
                        <h4>NIGIRI SUSHI A LA CARTE 2PC</h4>
                        <h5>Albacore (white tuna)</h5>
                        <h5>Maguro (tuna)</h5>
                        <h5>Amaebi (sweet shrimp)</h5>
                        <h5>Saba (mackerel)</h5>
                        <h5>Anago (sea eel)</h5>
                        <h5>Sake (salmon)</h5>
                        <h5>Ebi (shrimp)</h5>
                        <h5>Shiromi (white fish)</h5>
                        <h5>Hamachi (yellowtail)</h5>
                        <h5>Smoked salmon</h5>
                        <h5>Hokkigai (surf clam)</h5>
                        <h5>Tako (octopus)</h5>
                        <h5>Hotate (llop)</h5>
                        <h5>Tobiko (flyingfish eggs)</h5>
                        <h5>Ika (squid)</h5>
                        <h5>Unagi (BBQ eel)</h5>
                        <h5>Ikura (salmon roe)</h5>
                        <h6>See specials for other availability.</h6>
                    </div>
                    <div className="section">
                        <h2>MAKI SUSHI</h2>
                        <h4>STANDARD ROLLS 6pc</h4>
                        <h5>Alaska</h5>
                        <h6>smoked salmon, avocado & crab mix</h6>
                        <h5>California</h5>
                        <h6>Crab mix, avocado & cucumber</h6>
                        <h5>Futomaki 8 pc</h5>
                        <h6>Omelets, shiitake mushroom, seasoned gourd & cucumber</h6>
                        <h5>Kappa</h5>
                        <h6>Cucumber roll</h6>
                        <h5>Negihama</h5>
                        <h6>Yellowtail & green onion</h6>
                        <h5>Oshinko</h5>
                        <h6>Pickled radish</h6>
                        <h5>Rainbow</h5>
                        <h6>Tuna, salmon, white fish, yellowtail shrimp, mackerel fish toppings and sliced avocado over california roll</h6>
                        <h5>Sake Maki</h5>
                        <h6>Salmon & green onion</h6>
                        <h5>Salmon Skin</h5>
                        <h6>Salmon skin, cucumber, green onion, sprouts & mountain burdock</h6>
                        <h5>Shrimp Tempura Roll</h5>
                        <h6>Shrimp tempura, cucumber, avocado & crab mix</h6>
                        <h5>Spicy Scallop*</h5>
                        <h6>Spicy flavored scallop, cucumber, green onion, tobiko & sprout</h6>
                        <h5>Spicy Tuna *</h5>
                        <h6>Spicy flavored tuna, green onion & sprout</h6>
                        <h5>Spider</h5>
                        <h6>Deep-fried soft shell crab, cucumber, sprouts, avacado, masago (smelt & spicy sauce</h6>
                        <h5>Tekka</h5>
                        <h6>Tuna roll</h6>
                        <h5>Unagi Maki</h5>
                        <h6>Eel, cucumber & avocado</h6>
                        <h5>Extras</h5>
                        <h6>Uzura 2 quail eggs Tobiko flyingfish eggs spicy flavor Tuna Hamachi Salmon Hand rolls are also available upon request. Please ask chefs for any kind of hand rolls.</h6>
                    </div>
                    <div className="section">
                        <h4>SPECIAL ROLLS 6-8pc</h4>
                        <h5>Philadelphia</h5>
                        <h6>Smoked salmon, cream cheese, cucumber & avocado</h6>
                        <h5>Phoenix*</h5>
                        <h6>Spicy tuna, avocado, green onion & jalapeno</h6>
                        <h5>New York</h5>
                        <h6>Smoked salmon, crab mix, cuctxnber & sprouts</h6>
                        <h5>Sunset*</h5>
                        <h6>Fresh salmon, crab mix, cucumber, sprout & masago(smelt</h6>
                        <h5>Layton Snap*</h5>
                        <h6>A deep-fried whole roll Induding spicy tuna, crab mix inside served with eel and wasabi sauce</h6>
                        <h5>Crundi*</h5>
                        <h6>Shrimp tempura, cucumber, avocado I tempura crunch & tobiko</h6>
                        <h5>Famous*</h5>
                        <h6>Shrimp tempura, eel, avocado, crab mix & sprouts</h6>
                        <h5>Dragon</h5>
                        <h6>Eel / avocado, cucumber & crab mix</h6>
                        <h5>Red Dragon *</h5>
                        <h6>Spicy tuna over califonia roll garnished with tobiko and a piece of shrimp</h6>
                        <h5>Mars*</h5>
                        <h6>Shrimp tempra, crab mix, cucumber / avocado, tuna served with eel sauce</h6>
                        <h5>Tepanyaki</h5>
                        <h6>Eel, avocado, crab mix, lettuce & Tobiko served with eel sauce</h6>
                        <h5>Green Tiger</h5>
                        <h6>Tuna, cucumber, crab mix, Tempura crunch / shnmp & avocado</h6>
                        <h5>Salt Lake*</h5>
                        <h6>Specy albacore, seaweed salad, cucumber with 3 shrimp topping wrapped under soybean paper</h6>
                        <h5>Las Vegas</h5>
                        <h6>A deep-fried whole roll consisting of fresh salmon, cream cheese, cucumber & avocado</h6>
                        <h5>Red line*</h5>
                        <h6>Spicy yellowtail, shrimp, cucumbei lettuce served with eel sauce</h6>
                    </div>
                    <div className="section">
                        <h2>Beverages</h2>
                        <h5>Sprite, Coke, Root Beer, Dr. Pepper, Lemonade, Diet Coke, Iced Tea</h5>
                        <h5>Juice: apple, orange, cranberry, pineapple</h5>
                        <h6>Please ask servers for our wine & beer list</h6>
                    </div>
                    <div className="section">
                        <h2>Desserts</h2>
                        <h5>Ice Cream</h5>
                        <h5>Snow ball</h5>
                        <h5>Cheesecake</h5>
                        <h5>Tempra Ice cream</h5>
                    </div>

                </div>
            </div>
        )
    }
}

