// types in typescript
const foo: string = "Foo";
const isActive: boolean = false;
const age: number = 5;
const user: {id: number; name: string} = {id: 2, name: "Jack"}
const users: Array<{id: number; name: string}> = [user] //one way of declaring an array
const use: {id: number; name: string}[] = [user]  //another way of declaring an array

///creating a function with
const getFullName = (name: string, surname: string): string => name + " " + surname

//interface in typescript
interface User{
  id: number;
  name: string
}

const jamaa: User = {id: 1, name: "foo"}

const getName = (jamaa: User) => {
  return jamaa.name 
}

//types in typescript
type ID = string
const id: ID = 'ui'

type Numbers = number[]
const numbers: Numbers = [1,2,3,4  ]

//using extend in interface
interface Admin extends User{
  permissions: string[];
}

const jam: Admin = {id: 1, name: "Foo", permissions: ['write']}

//using interception in type
type Users = {
  id: number;
  name: string;
}

type Admins = Users & { permissions: string[]}

const ndugu: Admins = {id: 1, name: "Foo", permissions: ["write"]}

interface Person{
  name: string;
  greet(): string;
}

class Student implements Person{
  name = "Jack";
  greet(): string {
    return "hello"
  }
}

//union intypescript
type stringOrNumber = number | string;

// const loo: stringOrNumber = string

const getId = (id: string | number) => { 
  return id
}

type LoadingState ={
  state: "loading"
}

type FailedState = {
  state:  'failed'
  code: number
}

type SuccessState ={
  state: 'success',
  response: {
    title:string;
  }
}

type NetworkState = LoadingState | FailedState | SuccessState;

//implementation of narrowing
const food = (value: string | number) => {
  if(typeof value === "string"){
    return value
  }
  return value
}

const isOnline = (networkState: NetworkState) => {
  if(networkState.state === "success"){
    return networkState.response
  }else if(networkState.state === "failed"){
  return networkState.code
}
return networkState
}
