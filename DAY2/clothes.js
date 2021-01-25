const clothes = ['jacket', 't-shirt'];
clothes.length = 0;//Here the array is emptied  as the value of the attribute has a side effect of deleting elements whose index is between the old and new length values.
console.log(clothes[0]);//So console output is undefined.

