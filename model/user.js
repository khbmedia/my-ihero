class User{
    constructor(id,name,email,role,create_at,token){
        this.id=id;
        this.name=name;
        this.email=email;
        this.role=role;
        this.create_at=create_at;
        this.token=token;
    }
}
export default User;