import Butter from '../../assets/butter.png'
import Yogurt from '../../assets/yogurt.png'
import Cheese from '../../assets/cheese.png'
import Tofu from '../../assets/tofu.png'

import Strawberry from '../../assets/strawberry.png'
import Kiwi from '../../assets/kiwi.png'
import Banana from '../../assets/banana.png'
import Pineapple from '../../assets/pineapple.png'

import Eggs from '../../assets/eggs.png'
import Shrimp from '../../assets/shrimp.png'
import Salmon from '../../assets/salmon.png'

import Capsicum from '../../assets/capsicum.png'
import Broccoli from '../../assets/broccoli.png'
import Cabbage from '../../assets/cabbage.png'
import Eggplant from '../../assets/eggplant.png'
import Lettuce from '../../assets/lettuce.png'

const products = [
    {
        id: 1,
        name: 'Strawberry',
        price: 50,
        category: 'Fruits',
        image: Strawberry
    },
    {
        id: 2,
        name: 'Butter',
        price: 55,
        category: 'Dairy',
        image: Butter
    },
    {
        id: 3,
        name: 'Eggs',
        price: 72,
        category: 'Dairy',
        image: Eggs
    },
    {
        id: 4,
        name: 'Cabbage',
        price: 30,
        category: 'Vegetables',
        image: Cabbage
    },
    {
        id: 5,
        name: 'Eggplant',
        price: 50,
        category: 'Vegetables',
        image: Eggplant
    },
    {
        id: 6,
        name: 'Shrimp',
        price: 450, 
        category: 'SeaFood',
        image: Shrimp
    },
    {
        id: 7,
        name: 'Kiwi',
        price: 90,
        category: 'Fruits',
        image: Kiwi
    },
    {
        id: 8,
        name: 'Green Capsicum',
        price: 70,
        category: 'Vegetables',
        image: Capsicum
    },
    {
        id: 9,
        name: 'Broccoli',
        price: 100,
        category: 'Vegetables',
        image: Broccoli
    },
    {
        id: 10,
        name: 'Yogurt',
        price: 45,
        category: 'Dairy',
        image: Yogurt
    },
    
    {
        id: 11,
        name: 'Mozzarella Cheese',
        price: 130,
        category: 'Dairy',
        image: Cheese
    },
   
    {
        id: 12,
        name: 'Salmon Filet ',
        price: 800,
        category: 'SeaFood',
        image: Salmon
    },
    {
        id: 13,
        name: 'Banana ',
        price: 50,
        category: 'Fruits',
        image: Banana
    },
   
    {
        id: 14,
        name: 'PineApple',
        price: 80,
        category: 'Fruits',
        image: Pineapple
    },
    {
        id: 15,
        name: 'Tofu Cubes',
        price: 120,
        category: 'Dairy',
        image: Tofu
    },
    
    {
        id: 16,
        name: 'Lettuce Leaf',
        price: 80,
        category: 'Vegetables',
        image: Lettuce
    },
];

export default products