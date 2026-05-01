function PrintUserInfo(userId: number, userName: string): void {
    console.log(`User id: ${userId}, User name: ${userName}`);
}

PrintUserInfo(1, "Anisul Islam");

function PrintUserInfo2<T>(userId: T, userName: string): void {
    console.log(`User id: ${userId}, User name: ${userName}`);
}

PrintUserInfo2<number>(1, "Anisul Islam");
PrintUserInfo2<string>("1", "Anisul Islam");