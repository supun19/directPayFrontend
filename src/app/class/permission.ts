export class Permission{


  private _userEdit =false;
  private _userEditApprove =false;
  private _merchantEdit =false;
  private _merchantEditApprove =false;
  private _userRegister =false;
  private _userRegisterApprove =false;
  private _merchantRegister =false;
  private _merchantRegisterApprove =false;
  private _role = "operator";


  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }

  get userEdit(): boolean {
    return this._userEdit;
  }

  set userEdit(value: boolean) {
    this._userEdit = value;
  }

  get userEditApprove(): boolean {
    return this._userEditApprove;
  }

  set userEditApprove(value: boolean) {
    this._userEditApprove = value;
  }

  get merchantEdit(): boolean {
    return this._merchantEdit;
  }

  set merchantEdit(value: boolean) {
    this._merchantEdit = value;
  }

  get merchantEditApprove(): boolean {
    return this._merchantEditApprove;
  }

  set merchantEditApprove(value: boolean) {
    this._merchantEditApprove = value;
  }

  get userRegister(): boolean {
    return this._userRegister;
  }

  set userRegister(value: boolean) {
    this._userRegister = value;
  }

  get userRegisterApprove(): boolean {
    return this._userRegisterApprove;
  }

  set userRegisterApprove(value: boolean) {
    this._userRegisterApprove = value;
  }

  get merchantRegister(): boolean {
    return this._merchantRegister;
  }

  set merchantRegister(value: boolean) {
    this._merchantRegister = value;
  }

  get merchantRegisterApprove(): boolean {
    return this._merchantRegisterApprove;
  }

  set merchantRegisterApprove(value: boolean) {
    this._merchantRegisterApprove = value;
  }
}
