let fakeData = [
    { id: 1, name: 'Toast fried Egg Butter', category: 'BREAKFAST', title: 'breakfast is most important meal', price:12.50, description: 'Everyone runs around trying to find a place where they still serve breakfast because eating breakfast, even if it is 5 clock in the afternoon, is a sign that the day has just begun and good things can still happen. Having lunch is like throwing in the towel.', url:'https://i.ibb.co/3cSrny1/breakfast5.png' },
    { id: 2, name: 'Breakfast sandwich', category: 'BREAKFAST', title: 'breakfast is most important meal', price: 15, description: 'Everyone runs around trying to find a place where they still serve breakfast because eating breakfast, even if it is 5 clock in the afternoon, is a sign that the day has just begun and good things can still happen. Having lunch is like throwing in the towel.', url:'https://i.ibb.co/YBMvMnV/breakfast2.png' },
    { id: 3, name: 'baked chicken', category: 'BREAKFAST', title: 'breakfast is most important meal', price:20.30, description: 'Everyone runs around trying to find a place where they still serve breakfast because eating breakfast, even if it is 5 clock in the afternoon, is a sign that the day has just begun and good things can still happen. Having lunch is like throwing in the towel.', url:'https://i.ibb.co/52XncpY/breakfast3.png' },
    { id: 4, name: 'Full breakfast egg toast', category: 'BREAKFAST', title: 'breakfast is most important meal', price:23.50, description: 'Everyone runs around trying to find a place where they still serve breakfast because eating breakfast, even if it is 5 clock in the afternoon, is a sign that the day has just begun and good things can still happen. Having lunch is like throwing in the towel.', url:'https://i.ibb.co/ZmSNHrz/breakfast6.png' },
    { id: 5, name: 'Bagel and cream cheese', category: 'BREAKFAST', title: 'breakfast is most important meal', price: 10.50, description: 'Everyone runs around trying to find a place where they still serve breakfast because eating breakfast, even if it is 5 clock in the afternoon, is a sign that the day has just begun and good things can still happen. Having lunch is like throwing in the towel.', url:'https://i.ibb.co/w72BMFG/breakfast1.png' },
    { id: 6, name: 'Eggs benedict', category: 'BREAKFAST', title: 'breakfast is most important meal', price: 20.50,description: 'Everyone runs around trying to find a place where they still serve breakfast because eating breakfast, even if it is 5 clock in the afternoon, is a sign that the day has just begun and good things can still happen. Having lunch is like throwing in the towel.', url:'https://i.ibb.co/Wn1kM8x/breakfast4.png' },
    { id: 7, name: 'Healthy Meal Plan', category: 'LUNCH', title: 'lunch is also important meal', price: 30.50, description: 'This was the eighteenth day in a row that the special was Mushroom Surprise. It was called Mushroom Surprise because it would have been a surprise if anybody had ever ordered it. No one ever did—except Louis, of course. That’s why they’d had it for eighteen days. There was always plenty left over.', url:'https://i.ibb.co/XsGWZ37/lunch1.png' },
    { id: 8, name: 'Trragon-Rubbed-Salmon', category: 'LUNCH', title: 'lunch is also important meal', price: 26.50, description: 'This was the eighteenth day in a row that the special was Mushroom Surprise. It was called Mushroom Surprise because it would have been a surprise if anybody had ever ordered it. No one ever did—except Louis, of course. That’s why they’d had it for eighteen days. There was always plenty left over.', url:'https://i.ibb.co/SVkYJb4/lunch3.png'},
    { id: 9, name: 'Fried Chicken Bento', category: 'LUNCH', title: 'lunch is also important meal', price: 21.50, description: 'This was the eighteenth day in a row that the special was Mushroom Surprise. It was called Mushroom Surprise because it would have been a surprise if anybody had ever ordered it. No one ever did—except Louis, of course. That’s why they’d had it for eighteen days. There was always plenty left over.', url:'https://i.ibb.co/2MRvKgY/lunch2.png' },
    { id: 10, name: 'Honey Soy Salmon', category: 'LUNCH', title: 'lunch is also important meal', price: 24.50, description: 'This was the eighteenth day in a row that the special was Mushroom Surprise. It was called Mushroom Surprise because it would have been a surprise if anybody had ever ordered it. No one ever did—except Louis, of course. That’s why they’d had it for eighteen days. There was always plenty left over.', url:'https://i.ibb.co/zSrW8Ln/lunch6.png' },
    { id: 11, name: 'Indian Lunch', category: 'LUNCH', title: 'lunch is also important meal', price: 28.50, description: 'This was the eighteenth day in a row that the special was Mushroom Surprise. It was called Mushroom Surprise because it would have been a surprise if anybody had ever ordered it. No one ever did—except Louis, of course. That’s why they’d had it for eighteen days. There was always plenty left over.', url:'https://i.ibb.co/YjMjQ37/lunch4.png' },
    { id: 12, name: 'Chicken Steak', category: 'LUNCH', title: 'lunch is also important meal', price: 35.50, description: 'This was the eighteenth day in a row that the special was Mushroom Surprise. It was called Mushroom Surprise because it would have been a surprise if anybody had ever ordered it. No one ever did—except Louis, of course. That’s why they’d had it for eighteen days. There was always plenty left over.', url:'https://i.ibb.co/hFTdX0S/lunch5.png' },
    { id: 13, name: 'Salmon with Grapefruits', category: 'DINNER', title: 'dinner is always good meal', price: 20.50,description: 'Except for cases that clearly involve a homicidal maniac, the police like to believe murders are committed by those we know and love, and most of the time they are right - a chilling thought when you sit down to dinner with a family of five.All those potential killers passing their plates.', url:'https://i.ibb.co/4gwQw1h/dinner1.png' },
    { id: 14, name: 'Curlic Butter baked salmon', category: 'DINNER', title: 'dinner is always good meal', price: 29.50, description: 'Except for cases that clearly involve a homicidal maniac, the police like to believe murders are committed by those we know and love, and most of the time they are right - a chilling thought when you sit down to dinner with a family of five.All those potential killers passing their plates.', url:'https://i.ibb.co/RSJM7x9/dinner5.png' },
    { id: 15, name: 'Baked Chicken', category: 'DINNER', title: 'dinner is always good meal', price: 12.50, description: 'Except for cases that clearly involve a homicidal maniac, the police like to believe murders are committed by those we know and love, and most of the time they are right - a chilling thought when you sit down to dinner with a family of five.All those potential killers passing their plates.', url:'https://i.ibb.co/dtpf0HL/dinner4.png' },
    { id: 16, name: 'French fries with cheese', category: 'DINNER', title: 'dinner is always good meal', price: 35.50, description: 'Except for cases that clearly involve a homicidal maniac, the police like to believe murders are committed by those we know and love, and most of the time they are right - a chilling thought when you sit down to dinner with a family of five.All those potential killers passing their plates.', url:'https://i.ibb.co/FzcGWfn/dinner3.png' },
    { id: 17, name: 'Lemony Salmon', category: 'DINNER', title: 'dinner is always good meal', price: 30.50, description: 'Except for cases that clearly involve a homicidal maniac, the police like to believe murders are committed by those we know and love, and most of the time they are right - a chilling thought when you sit down to dinner with a family of five.All those potential killers passing their plates.', url:'https://i.ibb.co/GPXYxZh/dinner2.png' },
    { id: 18, name: 'Pork Tenderiain', category: 'DINNER', title: 'dinner is always good meal', price: 15.50, description: 'Except for cases that clearly involve a homicidal maniac, the police like to believe murders are committed by those we know and love, and most of the time they are right - a chilling thought when you sit down to dinner with a family of five.All those potential killers passing their plates.', url:'https://i.ibb.co/VgGjyXs/dinner6.png' },
];

export default fakeData;