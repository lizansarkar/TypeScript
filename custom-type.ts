type User = {userName: string; userId: number}
let user1: User;

let users: User[];
users = [];

user1 = {userName: "lizan", userId: 12}
users.push(user1);

console.log(users);

type RequestType = "GET" | "POST";
let GetRequest: RequestType;
GetRequest = "GET";
