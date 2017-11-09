import React, { Component } from 'react'
import './hibachi-menu.css';

export default class HibachiMenu extends Component {
    render() {
        return (
            <div className="hibachimenu">
                <div className="menucontainer">
                    <div className="apps">
                        <h3>Appetizers</h3>
                        <h5>Shrimp Tempura</h5>
                        <h5>Light Batter Deep Fried Shrimp and Vegetables</h5>
                        <h5>Beef Kushi</h5>
                        <h5>Beef Tender Skewer with Teriyaki Sauce</h5>
                        <h5>Gyoze</h5>
                        <h5>Japanese Dumpling</h5>
                        <h5>Yakitori</h5>
                        <h5>Chicken Skewer with Teriyaki Sauce</h5>
                        <h5>Chicken Wings</h5>
                    </div>
                    <div className="sides">
                        <h3>Sides</h3>
                        <h5>Fried Rice (with dinner only)</h5>
                        <h5>Fried Noodles (with dinner only)</h5>
                    </div>
                    <div className="chickenentrees">
                        <h3>Chicken</h3>
                        <h5>Vegetable Dinner</h5>
                        <h5>Chicken Teriyaki</h5>
                        <h5>Boneless Juicy Chicken</h5>
                        <h5>cooked with Sesame Seeds & Teriyaki Sauce</h5>
                    </div>
                    <div className="steakentrees">
                        <h3>Steak and Beef</h3>
                        <h5>Sukiyaki Beef</h5>
                        <h5>Tepanyaki New York Strip</h5>
                        <h5>Ribeye Steak</h5>
                        <h5>Filet Mignon</h5>
                    </div>
                    <div className="seafoodentrees">
                        <h3>Seafood</h3>
                        <h5>Shrimp Tepanyaki</h5>
                        <h5>Tepanyaki Salmon</h5>
                        <h5>Halibut Steak</h5>
                        <h5>Teriyaki Scallops</h5>
                        <h5>Alaskan King Crab Leg</h5>
                        <h5>Teriyaki Lobster Tail</h5>
                    </div>
                    <div className="combinations">
                        <h3>Combination Plates</h3>
                        <h5>Chicken & Salmon</h5>
                        <h5>Chicken & Shrimp</h5>
                        <h5>New York Steak & Chicken</h5>
                        <h5>New York Steak & Shrimp</h5>
                        <h5>New York Steak & Salmon</h5>
                        <h5>Chicken & Scallops</h5>
                        <h5>New York Steak & Scallops</h5>
                        <h5>Shrimp & Scallops</h5>
                        <h5>Filet Mignon & Chicken</h5>
                        <h5>Filet Mignon & Salmon</h5>
                        <h5>Filet Mignon & Scallops</h5>
                        <h5>Filet Mignon & Shrimp</h5>
                        <h5>Filet Mignon & Lobster Tail</h5>
                    </div>
                    <div className="desserts">
                        <h3>Desserts</h3>
                        <h5>Ice Cream</h5>
                        <h5>Snow Ball</h5>
                        <h5>Cheesecake</h5>
                        <h5>Tempura Ice Cream</h5>
                    </div>
                    </div>
                <footer></footer>
            </div>
        )
    }
}