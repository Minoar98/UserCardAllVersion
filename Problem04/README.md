Problem-04
[] -> 
[ { name: 'Minoar', age: 27 } ] -> 
[ { name: 'Minoar', age: 27 }, { name: 'Prince', age: 55 } ]

Problem-05
[] -> 
[ { id: 1, name: 'Minoar', age: 27, isFavorite: false } ] -> 
[ { id: 1, name: 'Minoar', age: 27 }, { id: 2, name: 'Prince', age: 55, isFavorite: false } ]

```jsx
const handleChange = (name, age) => {
  // setUser([{ name, age }]); // replace kora

  setUser((prevState) => [...prevState, { id: Date.now, name, age, isFavorite: false }]); // Ager kajer sathe kisu add kora
};
```

- Exta love icon (`onClick` -> oi specific card er `isFavorite` k `true` kore dibo)
- filled or not filled based on `isFavorite`
- isFavorite -> true -> filled
- else not filled(by default)


onClick={() => filledLove(id)}