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

// Не совсем понимаю смысл этой функции типа продать от имени админа или клиенты могут друг у друга покупать?
const sell = (buyer: Client, seller: Client, item: Item): Response => {
    // buyer.collection -= item.id
    return {code: 401, result: 'client must not sell'}
}

type Response = {
    code: number
    result: string
}