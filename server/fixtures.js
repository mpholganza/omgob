if (Food.find().count() === 0) {
  Food.insert({
    name: 'Peanut Butter Jelly Cheese',
    price: '$4.00'
  });
  
  Food.insert({
    name: 'Ham and Eggs',
    price: '$7.00'
  });

  Food.insert({
    name: 'Blueberry Pudding Cake',
    price: '$4.00'
  });
}
