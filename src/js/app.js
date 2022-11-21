const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

export default function getArrays(obj) {
  const { special } = obj;
  const result = [];

  special.forEach((elem) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = elem;

    result.push({
      id, name, icon, description,
    });
  });

  return result;
}

getArrays(character);
