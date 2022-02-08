type User = {
    id: string
    email: UserEmail
}

type UserEmail = string & { readonly UserEmail: unique symbol }

const UserEmail = {
    ofString: (value: string) => {
        if(!value){
            throw new Error(`${value} must be not empty`)
        }
        if(!(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value))){
            throw new Error(`${value} must be correct email`)
        }
        if(!(/@itkachalka.ru\s*$/.test(value))){
            throw new Error(`${value} must be domain @itkachalka.ru`)
        }
        return value as UserEmail
    }
}

const user: User = {
    id: "id",
    email: UserEmail.ofString("am@zen.car")
}