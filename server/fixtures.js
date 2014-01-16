if (Food.find().count() === 0) {
  Food.insert({
    name: 'Peanut Butter Jelly Cheese',
    price: '$4.00',
    description: 'A peanut butter and strawberry jam sandwich with a cheesy twist.'
  });
  
  Food.insert({
    name: 'Ham and Eggs',
    price: '$7.00',
    description: 'Spam and eggs on rice.'
  });

  Food.insert({
    name: 'Blueberry Pudding Cake',
    price: '$4.00',
  });
}
