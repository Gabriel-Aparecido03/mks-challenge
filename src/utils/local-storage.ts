type Item = {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: number;
  quantity: number;
  total_price: number;
}

export async function saveItemsAtLocalStorage(items : Item[]) {
  window.localStorage.setItem('@@mks-challenge-1.0.0',JSON.stringify(items))
}

export async function removeItemAtLocalStorage(id : number) {
  const actuallyitems = JSON.parse(window.localStorage.getItem('@mks-challenge-1.0.0') ?? "[]")  as Item[]
  const newArray = actuallyitems.filter(item => item.id !== id )

  window.localStorage.setItem('@@mks-challenge-1.0.0',JSON.stringify(newArray))
}

export async function cleanLocalStorage() {
  window.localStorage.setItem('@@mks-challenge-1.0.0',JSON.stringify([]))
}

export async function readItemAtLocalStorage() {
  return JSON.parse(window.localStorage.getItem('@@mks-challenge-1.0.0') ?? "[]")  as Item[]
}