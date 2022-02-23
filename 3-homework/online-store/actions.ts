import {Item} from './item';
import {Admin, Client} from './user';


const buy = (user: Client, item: Item): Response => {
    if (user.balance > 0) {
        user.balance -= item.price
        user.collection.map(item.id.toString)
        return {code: 200, result: 'film bought'}
    }
    return {code: 403, result: 'balance must be positive'}
}

const addVideo = (user: Admin, item: Item, video: string): Response => {
    switch (item.kind) {
        case 'Film':
            item.video = video
            return {code: 200, result: `${item.id} film is changed video`}
        case 'Series':
            item.video.push(video)
            return {code: 200, result: `${item.id} serial is added new video`}
    }
}

const sell = (buyer: Client, seller: Client, item: Item): Response => {
    if (buyer.balance < item.price) {
        return {code: 400, result: `buyer ${buyer.id} dont have many on balance`}
    }
    if (seller.collection.includes(item.id)) {
        return {code: 400, result: `seller ${seller.id} dont have item ${item.id}`}
    }

    buyer.balance -= item.price
    seller.balance += item.price

    seller.collection = seller.collection.filter((f) => {
        return f !== item.id
    })
    buyer.collection.push(item.id)
    return {code: 200, result: `seller ${buyer.id} sold item ${item.id} to buyer ${buyer.id} `}
}

type Response = {
    code: number
    result: string
}

/*
Questions

1. Нормально ли изменять входные параметры в функциях бизнес логики или обязательно нужно создавать локальные переменные и работать только с ними?
2. Что должны возвращать такие функции? Лучше типизировать прям сами входные параметры или стоит разбивать и такие функции на арность 1?

*/
