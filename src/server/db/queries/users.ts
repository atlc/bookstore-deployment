import { Query } from "../connection";
import { NewUser, User } from "../../types";

const find = (column: "email" | "id", value: string | number) => Query<User[]>("SELECT * FROM Users WHERE ?? = ?", [column, value]);
const register = (newUser: NewUser) => Query("INSERT INTO Users SET ?", [newUser]);

export default {
    find,
    register,
};
