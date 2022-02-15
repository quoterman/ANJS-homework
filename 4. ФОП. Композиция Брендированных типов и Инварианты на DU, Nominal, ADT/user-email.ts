type NotEmptyString = string & { readonly NotEmptyString: unique symbol }
const NotEmptyString = {
    ofString: (value: string) => {
        if (!value) {
            throw new Error(`${value} must be not empty`)
        }
        return value as NotEmptyString
    }
}

type Email = NotEmptyString & { readonly NotEmptyString: unique symbol }
const Email = {
    ofString: (value: string) => {
        if(!(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value))){
            throw new Error(`${value} must be correct email`)
        }
        return value as Email
    }
}

type RightEmail = NotEmptyString & { readonly NotEmptyString: unique symbol }
const RightEmail = {
    ofString: (value: string) => {
        if(!(/@itkachalka.ru\s*$/.test(value))){
            throw new Error(`${value} must be domain @itkachalka.ru`)
        }
        return value as RightEmail
    }
}

type UserEmail = Email & RightEmail & { readonly UserEmail: unique symbol }
const UserEmail = {
    ofString: (value: string) => {
        return Email.ofString(
          RightEmail.ofString(value)
        ) as UserEmail
    }
}

type User = {
    id: string
    email: UserEmail
}

const user: User = {
    id: "id",
    email: UserEmail.ofString("am@zen.car")
}