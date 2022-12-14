var cl = console.log;
// userRole  => userRoleNumber >> CAN_SEE_OTHER_CANDIDATE >> CAN_SEE_OTHER_COMP_JOBS >>CAN_SEE_BOTH
// CANDIDATE >> 1 >>false >> true >> false
//admin >> 2 >> true >> false >> false 
//superAdmin >>3  true >>true >>true 
// Type alias =>
// type person ={}
// interface Iperson {
//     fname: string,
//     lname: string,
//     age: number,
//     hobbies: string[],
//     skills: string[],
//     nickname?: string,
//     // role: (number | string)[] // union
//     role: [number, string] // tuples => array of fixed length
// }
// let person: Iperson = {
//     fname: "sdfsf",
//     lname: "sdfs",
//     age: 23,
//     hobbies: ["dsfdsf", "sdfsd", "sdfdsf"],
//     skills: ["SAdasd", "asdsad", "asdfasd"],
//     role: [1, 'canRead']
// }
// // cl(person.nickname = " xcgvfdg ")
// // person.role.push(123)
// person.role[0] = 111
// let hobbies: string[] = ["cricket", "coding", "cheess"]
// for (let hobby of hobbies) {
//     console.log(hobby.toUpperCase());
// }
// hobbies.push("100")
var Role;
(function (Role) {
    Role[Role["candidate"] = 0] = "candidate";
    Role[Role["admin"] = 1] = "admin";
    Role[Role["super_admin"] = 2] = "super_admin";
})(Role || (Role = {}));
var person = {
    role: Role.admin
};
